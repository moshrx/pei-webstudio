# Studio redesign verification — October 27, 2026

The website now uses warm paper/ink colours, coral accents, an editorial homepage,
project previews, a ListedPEI audit entry point, service rows, and updated form surfaces.
The commit includes the supporting application routes, form utilities, metadata,
showcase assets, and dependency lockfile needed to reproduce the tested site.

## Verification

- Production build passed, including TypeScript checking and 14 generated routes/resources.
- All 15 inquiry handler tests passed with mocked email delivery.
- All 202 local production HTTP checks passed, covering nine page URLs, metadata,
  landmarks, labels, anchors, 31 assets, error routes, and API validation/throttling.
- Chrome at 390px: homepage, portfolio, contact, legal, $49 offer, and both showcases
  fit without horizontal overflow; checked remaining pages had no broken loaded images.
- Mobile navigation: open, Escape dismissal, and AI Audit link dismissal verified.
- Theme switching and FAQ expansion verified.
- Empty contact submission displayed three invalid fields without sending an enquiry.

Fixed during verification: missing Open Graph image on the $49 offer; added explicit
showcase canonical/social metadata and included showcase routes in the sitemap.

Real email delivery, production hosting configuration, and field Core Web Vitals
were not tested. Local checks do not confirm deployment status.

## Mobile performance follow-up

- Replaced the render-blocking Google Fonts stylesheet with a self-hosted Next.js font.
- Marked the mobile hero image as the high-priority LCP resource and tightened its
  responsive size and quality settings.
- Replaced 4.4 MB of PNG showcase source art with visually checked JPEG masters
  totaling about 725 KB, reducing cold image-optimization work.
- Added mobile content visibility containment for below-the-fold sections.
- Lighthouse mobile lab score improved from 88 to 93–95 across final runs. First
  contentful paint improved from 2.7 seconds to 0.9 seconds; layout shift remained 0.
- The final production run passed 204 HTTP checks across 32 loaded assets.

Phone viewport testing subsequently found and fixed two layout issues: section
anchors could land early while intrinsic section heights changed, and the animated
floating dock overrode its own centering transform and covered narrow-screen content.
The dock is now hidden below 640px, where the fixed header menu supplies navigation.
The mobile menu also uses compact spacing in short landscape viewports. Portrait
checks passed at 320×568, 360×800, and 390×844; landscape passed at 844×390.

## Safari middle-page scroll follow-up (October 28)

User reports lag while scrolling through the middle of peiwebstudio.ca on iPhone
16 Pro in Safari. Live HTML still contained 42 opacity-zero reveal elements.
Removed scroll reveals, card tilt, and the global scroll progress animation;
static sections now render visibly without animation hydration. Disabled large
glows and fixed-header backdrop blur on touch pointers, removed the audit card
backdrop blur, and stopped showcase link prefetching. The desktop dock uses an
IntersectionObserver and is omitted on touch devices. MotionConfig now lives only
under showcase routes to preserve reduced-motion support without loading Motion
on every page.

- Homepage first-load JavaScript: 190 kB before, 143 kB after (about 25% less).
- Portfolio: 159 to 116 kB; legal: 155 to 111 kB.
- Homepage server HTML: zero opacity-zero reveal elements after the change.
- Production build/type/lint checks pass; all 15 unit tests pass.
- HTTP checks: 202 passed, zero failed, 31 assets checked.
- Chrome 390×844: no horizontal overflow; FAQ opens; menu opens/closes and the
  AI Audit anchor settles 112 px below the top of the viewport.
- Local Lighthouse mobile: performance 96, FCP 0.9 s, LCP 2.7 s, TBT 100 ms,
  CLS 0. This measures startup, not Safari scroll smoothness.

Physical iPhone Safari was not available for verification. These changes remove
identified scroll/compositing costs; device-specific resolution remains unverified.
