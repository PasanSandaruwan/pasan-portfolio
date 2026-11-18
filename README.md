# Pasan Sandaruwan — Portfolio

A responsive React + Vite portfolio with violet styling, a floating navigation bar, six filterable project cards, grouped skills, education, and direct email contact. No additional runtime dependencies were added.

## Run locally

```sh
npm install
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

## Update content and assets

- `src/data/portfolio.js`: profile, introduction, projects, technology tags, skills, education, certificates, and repository verification notes.
- `src/components`: reusable navigation, icons, headings, and project cards.
- `src/sections`: individual page sections.
- `src/styles/global.css`: colors, layouts, breakpoints, and motion settings.
- `public/images/projects`: add actual screenshots, then set each project's `image` to `/images/projects/filename.webp` (or another supported browser image format).
- `public/images`: add your portrait, then set `profile.portrait` to its path. Missing or failed images render original, clearly identified placeholder artwork.
- `public/documents`: add a real CV and set `profile.cv` to `/documents/filename.pdf`. The download appears only if the configured file is discovered during development/build. Restart or rebuild after adding a file.
- `certificates`: remains empty until real certificate details are supplied. Each entry accepts `title`, `issuer`, `date`, and optional `url`.

The contact section uses `mailto:` links and the browser clipboard API. It does not submit messages to a server. Google Fonts loads DM Sans and Space Grotesk, with system sans-serif fallback if unavailable.

## Content verification

Public GitHub metadata, READMEs, and contributor lists were read on November 14, 2026. Project descriptions describe the shared applications, not personal achievements or individual responsibilities.

| Project | Evidence |
| --- | --- |
| [HEMS](https://github.com/PasanSandaruwan/HEMS) | Repository description establishes MERN stack and employee, schedule, leave, finance, and access management. Multiple contributors support team attribution. |
| [AquaShield](https://github.com/PasanSandaruwan/AquaShield) | README explicitly identifies a group academic project for illegal fishing monitoring, marine species management, and incident/case handling. |
| [CareLink](https://github.com/PasanSandaruwan/CareLink) | README documents healthcare microservices, React, Node.js, MongoDB, and Docker; multiple contributors support team attribution. |
| [Online Job Portal](https://github.com/PasanSandaruwan/Online_Job_Portal) | Stack supplied by owner: PHP, MySQL, HTML, CSS, JavaScript. README names multiple team members. |
| [HerPath](https://github.com/PasanSandaruwan/herpath-womens-safety-network) | README documents Android-first React Native/Expo app, TypeScript/Express API, incident reporting, maps, route comparison, and journey tracking. Multiple contributors support team attribution. |
| [Smart Disaster Response System](https://github.com/PasanSandaruwan/smart-disaster-response-system) | README identifies academic team ownership, React/React Native/Express TypeScript foundations, and PostgreSQL/Prisma. Explicitly states business workflows are not implemented yet; shown as In Progress. |

No usable product screenshots were found in the inspected README references or screenshot/preview paths. AquaShield's README links deployment evidence, which is not a product screenshot. All six visuals are labeled illustrative artwork.

The [design reference](https://shaini-jayakody.vercel.app/) initially failed through web browsing but its HTML was accessible through a direct request. Its floating navigation, introduction/portrait structure, rounded cards, and spacious sections informed an original violet interpretation; no reference assets or personal details were reused.

## Details still needed

Provide a portrait, actual screenshots, a CV, education dates/exact qualification wording, any real certificates, and your individual responsibilities for each team project. Review the project-derived skills before publishing. No employment, results, LinkedIn profile, skill ratings, or certificates have been invented.

## Accessibility

Semantic landmarks, keyboard-operable filters and navigation, visible focus indicators, a skip link, menu Escape/outside-click handling, descriptive external links, status announcements, and reduced-motion styles are included. Certificates and CV links are hidden when their source content is absent.

Verified with `npm run lint`, `npm run build`, and headless Chrome at 320, 375, 768, 1024, and 1440px. Browser checks covered project filtering, team labels, mobile navigation, Escape/focus behavior, anchor targets, the email clipboard action, absence of unprovided CV/certificates, horizontal overflow, reduced motion, and runtime errors.

Work remains local on `feat/portfolio`; nothing is pushed or deployed by these scripts.
