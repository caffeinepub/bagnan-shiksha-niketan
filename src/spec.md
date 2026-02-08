# Specification

## Summary
**Goal:** Add one additional animated, original cartoon-style mascot on the Mathematics page to make the site feel more fun without affecting usability.

**Planned changes:**
- Add a new mascot image asset under `frontend/public/assets/generated` named `mascot-rocketfox.dim_768x768.png`.
- Update `frontend/src/pages/MathematicsPage.tsx` to render the new mascot as a decorative element with a lightweight animation that respects reduced-motion preferences.
- Ensure the mascot is non-interactive (`pointer-events-none`), marked decorative for assistive tech, and positioned responsively so it won’t overlap important UI (hidden or placed safely on small screens).

**User-visible outcome:** The Mathematics page shows an extra fun animated mascot that decorates the page without blocking any interactions.
