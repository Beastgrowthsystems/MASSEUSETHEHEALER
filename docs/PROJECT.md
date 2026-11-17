# Project log — Masseuse The Healer

> The agent reads this first on every session and updates it last. Humans can edit it too.
> Note: the site was built in Lovable before this log existed; earlier gates (G1–G7) were not recorded here.

## Status
- **Phase:** 7 Search & Business Profile
- **Next action:** Operator resubmits the sitemap in Search Console; client's Google account is made Owner in Search Console.
- **Waiting on:** Operator
- **Open [[TBC]] items:** not audited yet

## Key facts
| Item | Value |
|---|---|
| Client contact (approver) | Boipelo (boipelolovedalia958@gmail.com) |
| Agency operator | Beast Growth Systems |
| Domain | masseusethehealer.com |
| Registrar / account owner | [[TBC]] |
| Domain expiry | [[TBC]] |
| Has email on domain? | [[TBC]] — site uses a Gmail address |
| Canonical URL | https://masseusethehealer.com/ (bare domain, matches Netlify primary domain) |
| GitHub repo | https://github.com/Beastgrowthsystems/MASSEUSETHEHEALER (Lovable-connected; don't rewrite history) |
| Netlify project / site ID | masseusethehealer / 690e379e-606f-41b8-a366-b61ecb4246f8 |
| Netlify team & plan | team 6a3be8ceb8a7e23619735345, Pro |
| DNS path | [[TBC]] — Namecheap or Netlify DNS |
| Official NAP (exact) | Name: Masseuse The Healer · Service areas: Kathu, Kuruman, Mothibistad (mobile) · Phone display: 078 650 1056 · Phone link: +27786501056 |
| Business's Google account (owner) | [[TBC]] — Search Console currently owned by agency account |
| Search Console | property type: Domain (DNS TXT) · verified: yes, 2026-11-17 · agency user: currently Owner → to become Full once client is Owner |
| Google Business Profile | [[TBC]] |

## Gates
| Gate | Status | Date | Approved by | What exactly was approved |
|---|---|---|---|---|
| G5 (change) Search Console prep | ✅ | 2026-11-17 | Operator | PR #3, merge commit 337b8b8, Netlify deploy 6afc42a2c53834eb017fdbd4 |
| G8a Search Console DNS record | ✅ | 2026-11-17 | Operator (did the step) | One TXT record at @ — google-site-verification; Domain property verified |
| G8 Search & Business Profile | ⏳ | | | Search Console part in progress; Business Profile not started |

## Approval log (verbatim)
- 2026-11-17 14:03 — G5 PR #3 — Operator — "Approve"
- 2026-11-17 14:13 — Change request PR #5 (favicon) — Operator — "approve"

## Launch plan
| Milestone | Target date | Status |
|---|---|---|
| Search Console verified | 2026-11-17 | ✅ Domain property |
| Home page indexing requested | 2026-11-17 | ✅ |
| Sitemap submitted | 2026-11-17 | Submitted; first fetch failed (file not yet live) → resubmit after PR #3 |
| Search Console 7-day check (Pages + sitemap status) | 2026-11-24 | ⬜ |
| Search Console 4-week check (first query data) | 2026-12-15 | ⬜ |

## Decisions
- 2026-11-17 — Canonical is the bare domain (https://masseusethehealer.com/), not www — matches how the site is already served on Netlify.

## Change requests (after launch)
| Date | Request | Old → new | PR | Approved by | Live |
|---|---|---|---|---|---|
| 2026-11-17 | Site had no own favicon | Lovable default heart → hands icon from client logo (ico 16/32/48, apple-touch 180, 512 png) | #5 (01f53b8) | Operator | ✅ |

## Session notes
- 2026-11-17 — Added sitemap.xml, robots Sitemap line and canonical tag (PR #3, merged after approval). Operator verified Domain property via TXT, requested indexing of home page, submitted https://masseusethehealer.com/sitemap.xml. Sitemap confirmed live 14:07. Favicon replaced (PR #5). Next: resubmit sitemap, move Search Console ownership to client, then Google Business Profile.
