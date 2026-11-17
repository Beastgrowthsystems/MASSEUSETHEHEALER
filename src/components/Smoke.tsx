import { useEffect, useRef } from "react";

// Layered, depth-sorted drifting smoke puffs on a canvas (pseudo-3D parallax).
export function Smoke() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    // Respect users who ask for less motion.
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    const color = getComputedStyle(document.documentElement).getPropertyValue("--smoke").trim() || "white";
    let w = 0, h = 0, raf = 0;
    const resize = () => { w = c.width = innerWidth; h = c.height = innerHeight; };
    resize(); addEventListener("resize", resize);
    const sprite = document.createElement("canvas"); sprite.width = sprite.height = 256;
    const s = sprite.getContext("2d")!;
    const g = s.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, color); g.addColorStop(1, "transparent");
    s.fillStyle = g; s.fillRect(0, 0, 256, 256);
    // Fewer puffs on phones: the full set kept slow mobile CPUs busy every frame.
    const count = innerWidth < 768 ? 12 : 30;
    const puffs = Array.from({ length: count }, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      z: Math.random() * 0.9 + 0.1, r: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.002, ph: Math.random() * 100,
    })).sort((a, b) => a.z - b.z);
    let t = 0, last = 0, started = false, startTimer = 0;
    const loop = (now = 0) => {
      raf = requestAnimationFrame(loop);
      // ~30 fps is plenty for slow drifting smoke and halves the work.
      if (now - last < 33) return;
      last = now;
      if (document.hidden) return;
      t += 2; ctx.clearRect(0, 0, w, h);
      for (const p of puffs) {
        p.x += 0.5 * p.z + Math.sin((t + p.ph) / 200) * 0.6;
        p.y -= 0.24 * p.z;
        p.r += p.vr * 2;
        const size = 260 + p.z * 520;
        if (p.x - size / 2 > w) p.x = -size / 2;
        if (p.y + size / 2 < 0) p.y = h + size / 2;
        ctx.save(); ctx.globalAlpha = 0.05 + p.z * 0.1;
        ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.scale(1.6, 1);
        ctx.drawImage(sprite, -size / 2, -size / 2, size, size); ctx.restore();
      }
    };
    // Start after the page has loaded so the first view appears fast.
    const start = () => { if (started) return; started = true; startTimer = window.setTimeout(() => { raf = requestAnimationFrame(loop); }, 1500); };
    if (document.readyState === "complete") start(); else addEventListener("load", start, { once: true });
    return () => { cancelAnimationFrame(raf); clearTimeout(startTimer); removeEventListener("load", start); removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0 h-full w-full mix-blend-screen" />;
}
