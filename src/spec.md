# Specification

## Summary
**Goal:** Make the Baby Girl/Baby Boy selection correctly switch and persist site-wide theme colors, and update the Home hero to use the provided illustration with a lightweight animation while removing any duplicate/overlay hero image.

**Planned changes:**
- Fix Baby Girl/Baby Boy theme switching so it updates the full UI color palette across pages (background, text, cards, buttons, gradients) and persists across navigation and refresh, while staying compatible with Tailwind `hsl(var(--...))` bindings.
- Replace the current Home hero illustration with `sioj.png` served from `frontend/public/...` and apply a kid-friendly lightweight animation to the hero image.
- Remove the unintended extra/overlay hero image so only the intended hero image renders and no layering/z-index overlap remains.

**User-visible outcome:** Selecting “Baby Girl” or “Baby Boy” immediately changes the site colors everywhere and stays selected after refresh; the Home page shows the new hero illustration with a subtle animation and no duplicate image overlay.
