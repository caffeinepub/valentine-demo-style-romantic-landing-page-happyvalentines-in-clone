# Specification

## Summary
**Goal:** Extend the Valentine landing flow with a dedicated photo gallery section and a final proposal step with playful Yes/No interactions and a celebration on “Yes”.

**Planned changes:**
- Add a new photo gallery section to the Valentine UI flow with the heading exactly: "face of my heart".
- Add the three uploaded images as static frontend assets and render them in the new photo section in a responsive layout (mobile/desktop) using stable asset paths and appropriate image fit/orientation.
- Add a new final proposal page/step at the end of the existing Valentine flow showing the text exactly: "will you be my valentine my rasmalai😍🫶" with two options: "Yes" and "No".
- Implement a playful “run away” behavior for the "No" button on hover/click/tap so it’s effectively unpressable on both desktop and mobile without breaking layout/scroll.
- On pressing "Yes", trigger a celebration theme (flowers falling from top, hearts rising from bottom) and show a popup message exactly: "I knew you love me so much🥰🫶", ensuring it remains readable and can be dismissed or ends naturally.

**User-visible outcome:** Users can progress through the Valentine experience, view a “face of my heart” photo section with the uploaded photos, and reach a final proposal step where “No” dodges interaction and “Yes” triggers celebratory animations plus the specified popup message.
