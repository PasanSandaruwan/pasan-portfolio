# Portfolio review

Reviewed locally on `feat/portfolio`. No push, merge, or deployment was performed.

## Issues fixed

- The portrait's rotated decorative orbit expanded the viewport on some phone and tablet widths. Its narrow-screen bounds now stay inside the page.
- The portrait placeholder caption overlapped its floating education badge. The caption now sits beneath the portrait.
- Project descriptions and technology tags were small. Their text is larger at all breakpoints.
- Menu, filter, copy-email, and GitHub controls now have larger interaction areas.
- The skip-link destination now accepts focus, and the mobile menu closes when keyboard focus leaves navigation.
- The decorative contact sparkle overlapped heading text on mobile. It now sits above the heading.

## Verification

- `npm run lint` and `npm run build` passed.
- Headless Chrome exercised the production build at 320, 375, 480, 600, 768, 1024, and 1440px. Checks compare document scroll width with client width, avoiding the inflated mobile `innerWidth` that masked the orbit issue in the initial implementation checks.
- No horizontal page overflow, broken images, or application runtime exceptions were found after fixes.
- Project filters show the expected projects. Internal anchor destinations exist.
- Mobile navigation responds to Enter, Escape, outside clicks, and Tab leaving navigation. Escape restores focus to the menu toggle. The skip link transfers focus to main content.
- Reduced-motion styles disable floating animation; email copying succeeds with browser clipboard permission.
- All six project repository links returned HTTP 200 and use a new tab with `rel="noreferrer"`.
- axe-core 4.10.3 reported no confirmed WCAG A/AA or best-practice violations at 375, 768, and 1440px. Automated color-contrast evaluation was incomplete because of decorative pseudo-elements/gradients. Representative palette contrast calculations exceeded 4.5:1 (body 17.63, muted card text 7.90, primary button 6.61, footer 6.04); desktop/tablet/mobile captures were also inspected visually. This is a focused review, not a full manual screen-reader audit.
- CV download and certificates remain absent because none were supplied.

## Placeholders and details needed

1. **Portrait:** the PS illustration is a placeholder. Add a real photo and configure `profile.portrait`.
2. **Six project screenshots:** HEMS, AquaShield, CareLink, Online Job Portal, HerPath, and Smart Disaster Response System currently use labeled original artwork. Add screenshots under `public/images/projects` and configure each `image` path.
3. **CV:** provide a real document under `public/documents`, then set `profile.cv`. The download stays hidden without a matching file.
4. **Education:** confirm the exact qualification/programme wording, start date, and expected graduation date. The current entry uses only the supplied SLIIT undergraduate status.
5. **Certificates (optional):** provide actual certificate title, issuer, date, and a document or verification URL. No certificate section is currently shown.
6. **Project responsibilities:** provide your actual individual contributions for each team project. Current descriptions cover shared project functionality and do not claim personal ownership or results.
7. **Profile copy and skills:** review the drafted introduction/about copy and project-derived technology list to ensure they reflect how you want to present your own experience.

The supplied email and GitHub profile are already configured. No LinkedIn URL, employment history, skill percentages, or project results have been invented. Editable content is in `src/data/portfolio.js`.
