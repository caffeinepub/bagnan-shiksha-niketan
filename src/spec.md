# Specification

## Summary
**Goal:** Replace the Home page hero’s static image with a lightweight looping animation served as a local static asset, with a reduced-motion fallback.

**Planned changes:**
- Add a new looping animated hero file under `frontend/public/assets/generated` and use it in the Home page hero section instead of `/assets/sioj.png`.
- Update `frontend/src/pages/HomePage.tsx` to render the animated asset and respect `prefers-reduced-motion` by showing a non-animated fallback.

**User-visible outcome:** The Home page hero displays a looping animation (and shows a static fallback for users who prefer reduced motion) instead of the single static image.
