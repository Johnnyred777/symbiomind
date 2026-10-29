# Phase 0 report

| Capability | Status | Notes |
|---|---|---|
| Create and edit files | CAN DO | |
| Run a local preview | CAN DO | Local web server inside this session |
| Install packages | CAN DO | Via npm (used to fetch open-licence fonts) |
| Take screenshots, phone-size, reduced motion | CAN DO | Headless Chromium; see screenshots/ |
| See my own rendered work | CAN DO | I read the screenshots back as images |
| Read Zenodo records and PDFs | CAN DO WITH SETUP | zenodo.org and doi.org are blocked by this session's network settings. Allow them, or attach the PDFs |
| Lighthouse scores | CAN DO WITH SETUP | Needs a one-off npm install |
| Test on a real phone | CANNOT | Emulated phone sizes only |
| Deploy to Hostmate | CANNOT (by design) | Brief says never ask for logins; you upload the zip |

## Animation levels
- Subtle (a few dozen fireflies, slow pulse): CAN DO. Negligible cost.
- Moderate (100-200 fireflies reacting to a rule): CAN DO. 60 frames/sec in tests.
- Firefly network (fireflies linked by lines that form and break): CAN DO in Canvas 2D up to roughly 200-300 points. Risk: line-drawing cost grows fast (300 points = about 45,000 possible pairs), so it needs a grid lookup and lower counts on phones.
- Heavy 3D: CAN DO WITH SETUP (needs WebGL or a library such as three.js, roughly 150 KB+). Risks: battery drain, older phones, accessibility, and the "generic tech" look the brief wants to avoid. Not recommended.
