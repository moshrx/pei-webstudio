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
