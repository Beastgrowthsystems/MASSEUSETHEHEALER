import { createFileRoute } from "@tanstack/react-router";
import { Smoke } from "@/components/Smoke";
import p1 from "@/assets/photos/healer-1.jpg";
import p2 from "@/assets/photos/healer-2.jpg";
import p3 from "@/assets/photos/healer-3.jpg";
import p4 from "@/assets/photos/healer-4.jpg";
import p5 from "@/assets/photos/healer-5.jpg";
import p6 from "@/assets/photos/healer-6.jpg";
import logo from "@/assets/photos/healer-7.jpg";
import p8 from "@/assets/photos/healer-8.jpg";
import p9 from "@/assets/photos/healer-9.jpg";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": "https://masseusethehealer.com/#business",
  name: "Masseuse The Healer",
  description: "Mobile massage at your home in Kathu, Kuruman and Mothibistad. Full body, lower body and upper body massage, 7 days a week.",
  url: "https://masseusethehealer.com/",
  telephone: "+27786501056",
  email: "boipelolovedalia958@gmail.com",
  image: "https://masseusethehealer.com/og-image.jpg",
  logo: "https://masseusethehealer.com/icon-512.png",
  sameAs: ["https://share.google/PMDA4Ocp5WBi5TU4q"],
  areaServed: [
    { "@type": "City", name: "Kathu" },
    { "@type": "City", name: "Kuruman" },
    { "@type": "Place", name: "Mothibistad" },
  ],
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "19:00",
  }],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mobile Massage in Kathu, Kuruman & Mothibistad | Masseuse The Healer" },
      { name: "description", content: "Five-star mobile massage in Kathu, Kuruman & Mothibistad. Book 7 days a week." },
      { property: "og:title", content: "Mobile Massage in Kathu, Kuruman & Mothibistad | Masseuse The Healer" },
      { property: "og:description", content: "Five-star mobile massage brought to your home. Book 7 days a week, 8 AM – 7 PM." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://masseusethehealer.com/" },
      { property: "og:image", content: "https://masseusethehealer.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Masseuse The Healer logo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://masseusethehealer.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://masseusethehealer.com/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusiness) }],
  }),
  component: Index,
});

const PHONE = "078 650 1056";
const TEL = "tel:0786501056";
const WA = (msg: string) => `https://wa.me/27786501056?text=${encodeURIComponent(msg)}`;
const EMAIL = "boipelolovedalia958@gmail.com";
const GOOGLE_PROFILE = "https://share.google/PMDA4Ocp5WBi5TU4q";
const GOOGLE_REVIEW = "https://g.page/r/CRBNmY9LPHmkECE/review";
const hero = [p9, p1, p3, p6, p2, p4];
const gallery = [
  { src: p1, alt: "Therapist massaging a client's legs on a portable massage table" },
  { src: p3, alt: "Back massage on a portable massage table, client covered with a towel" },
  { src: p5, alt: "Client lying face down on the massage table, ready for a back massage" },
  { src: p9, alt: "Masseuse The Healer therapist in her branded apron" },
  { src: p6, alt: "Upper back massage in progress" },
  { src: p8, alt: "Massage table set up with fresh towels and oils" },
  { src: p2, alt: "Therapist working on a client's lower legs" },
  { src: p4, alt: "Therapist massaging a client's back, covered with a towel" },
];

const treatments = [
  { name: "Full Body", meta: "Up to 40 Mins", text: "A comprehensive, head-to-toe therapeutic journey designed to release deep tension, improve circulation, and restore total balance.", cta: "Book Full Body", tag: "Best value" },
  { name: "Lower Body", meta: "Hips • Ankles • Feet", text: "Focused therapy for those who stand for long hours or experience lower-body fatigue and stiffness.", cta: "Book Lower Body" },
  { name: "Upper Body", meta: "Shoulders • Back • Waist", text: "Targeted relief for desk-related tension, stress, and upper body knots.", cta: "Book Upper Body" },
];

const values = [
  { title: "We come to you", text: "No traffic, no waiting rooms. Your home becomes the spa.", cta: "Book a house call" },
  { title: "Open 7 days", text: "Monday to Sunday, 8 AM – 7 PM. Healing on your schedule.", cta: "Check today's slots" },
  { title: "No surprises", text: "Message us for a quote before you book (transport excluded).", cta: "Get a quote" },
];

function Btn({ href, children, light }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 ${light ? "border border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground/15" : "bg-accent text-accent-foreground shadow-lg hover:shadow-2xl"}`}>
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="relative overflow-x-hidden font-sans">
      <Smoke />
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2 hover:translate-y-0">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Masseuse The Healer logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-serif text-xl text-primary-foreground mix-blend-difference">Masseuse <em>The Healer</em></span>
          </a>
          <Btn href={WA("Hi, I'd like to book a massage.")}>Book Now</Btn>
        </nav>
      </header>

      <section className="relative z-10 flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          {hero.map((p, i) => (
            <div key={i} className="kb-slide" style={{ backgroundImage: `url(${p})`, animationDelay: `${i * 7.5 - 1}s` }} />
          ))}
        </div>
        <div className="hero-overlay absolute inset-0" />
        <div className="float-in relative mx-auto w-full max-w-6xl px-6 pt-24 text-primary-foreground">
          <h1 className="mb-5 text-xs uppercase tracking-[0.35em] text-accent">Mobile massage in Kathu, Kuruman &amp; Mothibistad</h1>
          <p className="font-serif text-6xl leading-[0.95] md:text-8xl">The Art of<br /><em>True Healing.</em></p>
          <p className="mt-6 max-w-lg text-base font-light opacity-90">Five-star massage therapy, brought directly to your sanctuary.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Btn href={WA("Hi, I'd like to book a Full Body massage.")}>Book Full Body</Btn>
            <Btn href={TEL} light>Call {PHONE}</Btn>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="glass rounded-3xl p-8">
              <h3 className="font-serif text-3xl">{v.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{v.text}</p>
              <a href={WA(`Hi! ${v.cta}, please.`)} target="_blank" rel="noreferrer" className="mt-6 inline-block border-b border-primary pb-1 text-xs font-semibold uppercase tracking-[0.2em] transition hover:text-accent-foreground hover:border-accent">{v.cta} →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-10">
        <div className="marquee gap-6">
          {[...gallery, ...gallery].map((g, i) => (
            <div key={i} className="h-80 w-60 shrink-0 overflow-hidden rounded-3xl shadow-xl md:h-[26rem] md:w-80">
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[3s] hover:scale-110" />
            </div>
          ))}
        </div>
      </section>

      <section id="treatments" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-serif text-5xl md:text-6xl">Curated <em>Treatments</em></h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {treatments.map((t) => (
            <div key={t.name} className="glass relative flex flex-col rounded-[2rem] p-8">
              {t.tag && <span className="absolute -top-3 right-6 rounded-full bg-accent px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent-foreground">{t.tag}</span>}
              <h3 className="font-serif text-4xl">{t.name}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              <div className="mt-6 flex items-end justify-between border-t border-primary/15 pt-5">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{t.meta}</span>
              </div>
              <div className="mt-6"><Btn href={WA(`Hi, I'd like to book a ${t.name} massage.`)}>{t.cta}</Btn></div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs italic text-muted-foreground">For all house calls, transportation costs are not included and are the responsibility of the client.</p>
      </section>

      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img src={p9} alt="Masseuse The Healer therapist ready for a session" className="h-[32rem] w-full rounded-[2rem] object-cover shadow-2xl" />
        <div>
          <h2 className="font-serif text-5xl md:text-6xl">A sanctuary of <em>stillness.</em></h2>
          <p className="mt-6 text-muted-foreground">True luxury is the ability to disconnect from the world and reconnect with yourself. Across Kathu, Kuruman and Mothibistad, we bring professional, restorative massage straight to your home or preferred space.</p>
          <p className="mt-6 text-sm"><strong>Hours:</strong> Monday – Sunday, 8:00 AM – 7:00 PM</p>
          <div className="mt-8"><Btn href={WA("Hi, I'd like to book my escape.")}>Reserve Your Escape</Btn></div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-primary p-12 text-center text-primary-foreground shadow-2xl">
          <h2 className="font-serif text-5xl md:text-6xl">Your body deserves <em>this.</em></h2>
          <p className="mx-auto mt-4 max-w-md text-sm opacity-80">Available 7 days a week. Message now and secure your session today.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Btn href={WA("Hi, I'd like to book a massage.")}>WhatsApp to Book</Btn>
            <Btn href={TEL} light>Call {PHONE}</Btn>
            <Btn href={`mailto:${EMAIL}`} light>Email Us</Btn>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-10 text-center text-xs text-muted-foreground">
        <p className="mb-4 flex flex-wrap justify-center gap-x-6 gap-y-2 uppercase tracking-[0.2em]">
          <a href={GOOGLE_PROFILE} target="_blank" rel="noreferrer" className="border-b border-primary/30 pb-0.5 hover:text-accent-foreground">Find us on Google</a>
          <a href={GOOGLE_REVIEW} target="_blank" rel="noreferrer" className="border-b border-primary/30 pb-0.5 hover:text-accent-foreground">Leave us a review</a>
        </p>
        © 2026 Masseuse The Healer. All rights reserved.
      </footer>
    </div>
  );
}
