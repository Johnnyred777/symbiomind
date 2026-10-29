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

## Update after reading your two ledger files (29 Oct)
The Zenodo listing (SIP_Ledger_2) shows that **your later published work replaced the ρ = 1 "tipping point"**:
- **SIP-PREREG-01** (record 20454447) "reverses the original collapse-threshold framing". ρ is now a timescale ratio, **ρ = τ_σ/τ_R**, and ρ = 1 is "the timescale balance point only".
- **Record 21126607** (June 2026) is a pre-registered negative result. It says ρ = 1 "is not a fundamental, substrate-general law".
- **SIP-PREREG-02** (record 20522330) **confirmed** a smooth law in simulation: Var = σ_q²τ_σ²/(ρ(ρ+1)). The predicted ratio of 3.0 fell inside the 95% CI [2.941, 3.033].

So the original Garden and Life cycle drafts below, where fireflies "go dark at ρ = 1", would show a claim your own record has retired. **I recommend against them.**

### Revised Garden proposal: the confirmed variance law (a real, pre-registered rule)
- **What each firefly stands for:** a regulated system holding its place against random pushes. Its jitter follows the confirmed law exactly.
- **Worked example,** using the calibration from SIP-PREREG-02 (the size of the wobble, its SD, is 0.15 when ρ = 1):

| ρ | Wobble (SD) | What you see |
|---|---|---|
| 3 | 0.061 | fireflies hold almost still |
| 2 | 0.087 | gentle hover |
| 1 | 0.150 | three times the variance of ρ = 2 |
| 0.5 | 0.245 | wide, restless wandering |

  The wobble rises smoothly as ρ falls, with no cliff at 1. That is the result.
- **Caption:** "confirmed in simulation; not yet tested on real-world data". This is the "transfer debt" your record names.
- **Link:** SIP-PREREG-02.

### Life cycle and Cosmos
- These can still show CDR and the two-ring CRS idea. However, neither has a confirmed rule, so both captions say **"illustration"**.
- Neither scene shows a tipping point at ρ = 1.

### Other things the ledgers turned up
- **Zenodo community:** https://zenodo.org/communities/symbiomind-sovereign ("SymbioMind: Sovereign Research & HATI Consensus").
- **Hubble Tension (slot 6):** the hard-state ledger lists **SIP-07 v3.1, DOI 10.5281/zenodo.19702873, "evidence update live"**. The brief uses 19199740. Which should the card link to?
- **Programme name:** recent records use "Recoherence Systems (RS), historically GTRS" and "General Theory of Recoherence Systems". Which name should the site use?
- **Credits:** they vary by record ("SHAI / HATI", "SHAI / HATI2", "SHAI / HATI3"). Cards will copy each record exactly, as the brief says.
- **Checking the ten papers:** none of the ten brief papers appear in this listing, so their details still need checking live on Zenodo.

## Earlier proposal (based on SIP-CORE-03; superseded where it uses ρ = 1 as a threshold)
**Source used:** SIP-CORE-03 "GTRS Foundations" v2.0, found in your Google Drive. Its section 4 and Appendix A summarise the equations "from SIP-CORE-01 and SIP-CORE-02". I have **not** read SIP-CORE-01 or SIP-CORE-02 themselves: they are not in your Drive, and Zenodo is blocked here. Each scene will link to SIP-CORE-01 or SIP-CORE-02, the public papers, not to SIP-CORE-03.

### Corrections to the working summary in the brief
| Brief said | Source says |
|---|---|
| ρ = R/σ, "resistance relative to noise" | ρ = R/σ, **regulatory capacity** relative to **stressor load** |
| "cycle C" | **C** is the *coherence function* C = [ρ/(1+ρ)]^k. The cycle is **CDR** |
| "condensation, dispersion, recoherence" | **Coherence, Decoherence, Recoherence** |
| "GTRS stability threshold" | Two thresholds: the phase boundary **ρ ≈ 1**, and **α**, the lowest ρ at which a system can stay coherent |

### 1. Garden (Homeostasis): ρ = R/σ and C = [ρ/(1+ρ)]^k, with k = 2
- **Worked example:** the garden has regulatory capacity R = 3.
  - Light stress, σ = 1.5: ρ = 2, C = 0.44. Fireflies glow steadily.
  - Stress rises to σ = 3: ρ = 1, the phase boundary, C = 0.25. Fireflies dim and flicker.
  - At σ = 6: ρ = 0.5, C = 0.11. Most go dark.
- **What each firefly stands for:** one part of the garden. Its brightness is C.
- **Visitor control:** one slider for stressor load σ.

### 2. Life cycle (CDR): dρ/dt = −γ(ρ − ρ*) + noise
- **What each firefly stands for:** one system. Its ρ drifts toward a target ρ* at rate γ, with random jostling.
- **Worked example,** with γ = 0.5 and the noise left out so the numbers are clear:
  - **Decoherence:** stress drops the target from ρ* = 2 to 0.8. ρ goes from 2 to 1.53, then 1.24, then 0.96 at times 1, 2 and 4. It crosses the boundary just before time 4.
  - **Recoherence:** an intervention raises R, and the target returns to 2. From 0.8, ρ goes to 1.27, then 1.56, then 1.84.
  - The paper's point is that recovery needs this active push. Stress simply easing off is not enough.
- **Visitor buttons:** "Add stress" and "Intervene".

### 3. Cosmos (attractor navigation): the CRS double well
- **What it shows:** two resting places.
  - A deep, genuine one at ρ* ≈ 2.0.
  - A shallow "captured" one at ρ* ≈ 1.3.
  - A ridge between them at ρ ≈ 1.6.
- **What it looks like:** these become two orbit rings, the idea you liked from reference 1.
- **Worked example:** two fireflies both sit at a healthy-looking ρ above 1. The same nudge hits both. The one in the deep ring settles back. The one in the shallow ring is knocked over the ridge and falls.
- **The source's own wording:** it calls this "the strongest novel prediction" of GTRS.
- **Gap:** the source gives the well positions but **not the depths**. Unless SIP-CORE-02 gives them, the caption must say "illustration".

### Problem found in the maths: please check
SIP-CORE-03 §8.2 says high k (6 to 10) "maintains C ≈ 1 until ρ ≈ 1", then collapses suddenly. The formula as written does not do that. With k = 8, a healthy ρ = 2 gives C = 0.04, nearly dark. A high k dims everything; it does not create a cliff at ρ = 1.

A logistic form, C = 1/(1 + e^(−k(ρ−1))), does behave as described. The paper itself lists it as an alternative. Until you decide, the Garden scene uses k = 2, which is the paper's original value.

## Questions (five at most)
1. **Papers and pairing:** do you approve the pairing above, sourced from SIP-CORE-03? And on the k problem, should I keep k = 2 or use the logistic form? The PDFs of SIP-CORE-01 and SIP-CORE-02, or allowing zenodo.org, would still let me check against the originals and get the Cosmos well depths.
2. **Filter chips:** proposed domain tags are *Core mathematics · Health · Land and animals · Physics · AI*. Example: Physics holds Quantum and Cosmology. AI holds Sovereign AI Hub, both AI safety papers and Edge AI. OK?
3. **Footer:** your papers already show "Toormina, NSW, Australia", "symbiomind@proton.me" and "CC BY-NC-SA 4.0". I won't use any of them until you confirm. Please give, or say "leave out":
   - (a) the Zenodo community URL
   - (b) the email address
   - (c) the licence line
   - (d) the town, or just "New South Wales, Australia"
   - (e) whether to show the ABN, and the number
4. **Live data (assumption 1):** OK to have each visitor's browser read Zenodo directly? The alternative is that I refresh a stored copy each time you ask for an edit.
5. **Method line ("produced with AI collaboration, credited as SHAI / HATI"):** draft it in Phase 2, or strike it now?

## Paper list replaced (29 Oct)
John supplied a new list of ten, in page order. It replaces the table in section 5 of the brief. It is stored in `site/data/papers.json`.
- **Published, six with DOIs:** 18501621, 18501041, 18501290, 18629169, 23191148, 23355456. None is checked yet, because Zenodo is still blocked here.
- **In development, four with no links:** Sixteen Registers, Jeopardy Architecture, HSAI, and the HATI² discriminator.
- **Possible conflict:** the Zenodo listing (SIP_Ledger_2) shows HATI²-01 as record 20621906, Open. The hard-state ledger says "draft reserved, not published".
- **Not used:** the dates, licences and "why it's here" notes in the list. Cards read dates and licences live from Zenodo, and the summaries will be drafted from each abstract.
- **Filter chips (proposed):** AI safety · Physics · Quantum · Technology · Method.
