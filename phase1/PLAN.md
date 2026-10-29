# Phase 1 plan

## Decided in Phase 0
- Palette A "Deep Field": black #05070D, blues #2F7BFF / #7CB8FF, firefly #BFE0FF. Source Serif 4 headings, Inter body, self-hosted.
- Logo mark: the ring with one bright point (from the palette page).
- References: keep the deep glow on black, one luminous focal object, the hero layout of image 2, orbit rings as an idea for the Cosmos scene. Avoid the stock-illustration look (image 3) and falling code (image 1).
- Firefly density: medium (150) by default. Phones get fewer, calm mode one third, reduced motion a still frame.

## The brief in one paragraph
One long, credible landing page for SymbioMind Research Practice. The page has a hero; three full-screen scroll scenes (Garden, Life cycle, Cosmos), each running a real rule from the papers; ten paper cards with filter chips; and a footer. It uses plain static files uploaded through cPanel, with no build step. Papers live in papers.json and page text in copy.json, so an AI assistant can edit them later. Australian English, restrained tone, nothing claimed beyond the evidence.

## Proposed file layout
```
site/
  index.html
  css/site.css
  js/fireflies.js    shared firefly engine (from Phase 0)
  js/scenes.js       the three scenes
  js/papers.js       builds the cards
  data/papers.json   DOI, slot, domain, plain summary (no titles or dates)
  data/copy.json     all page wording
  fonts/
```
The current index.html (the purple site) stays as it is until launch.

## Assumptions (tell me if any is wrong)
1. **Live Zenodo data.** Example: a visitor opens the page, and their browser asks Zenodo for record 19307045. Zenodo replies with the title, date, version and licence, and the card fills in. papers.json holds only what Zenodo doesn't have: the slot, domain tag and plain summary. This depends on Zenodo allowing browsers on other sites to read its records. I believe it does but must test once Zenodo is unblocked.
2. **If Zenodo is down**, cards show "Details unavailable, open the record on Zenodo" with the DOI link, rather than stored text that could go stale.
3. **No contact form.** The footer uses an email link only.
4. **Scenes** are Canvas 2D, with no WebGL and no 3D.
5. **Papers on the "needs John" list** (a DOI that fails or a title that doesn't match) stay off the page.

## Scene pairing: WAITING ON THE PAPERS
Your working summary, which I have not checked:
- Garden = ρ = R/σ
- Life cycle = cycle C
- Cosmos = GTRS stability threshold

I will not confirm the pairing, or give worked examples with numbers, until I have read SIP-CORE-01 and Mathematical Core v2.2.

## Questions (five at most)
1. **Papers:** allow zenodo.org and doi.org in this session's network settings, or attach the two PDFs. This is the only thing blocking the scene pairing.
2. **Filter chips:** proposed domain tags are *Core mathematics · Health · Land and animals · Physics · AI*. Example: Physics holds Quantum and Cosmology. AI holds Sovereign AI Hub, both AI safety papers and Edge AI. OK?
3. **Footer:** please give, or say "leave out":
   - (a) the Zenodo community URL
   - (b) the email address
   - (c) the licence line
   - (d) the town, or just "New South Wales, Australia"
   - (e) whether to show the ABN, and the number
4. **Live data (assumption 1):** OK to have each visitor's browser read Zenodo directly? The alternative is that I refresh a stored copy each time you ask for an edit.
5. **Method line ("produced with AI collaboration, credited as SHAI / HATI"):** draft it in Phase 2, or strike it now?
