# Phase 0: Analysis & Problem Framing

## 1. Target Audience Profiles & Psychographics

### Primary: Secondary & Higher Secondary Students (Class 9–12, SSC/HSC, University Admission)
- **Hardware & Context**: Mid-to-low-tier Android handsets (2GB–4GB RAM, MediaTek Helio or Snapdragon 400/600 series, Chrome mobile or Android WebView). Often browsing late at night or during travel under patchy 3G/spotty 4G data packs (1GB–2GB weekly allowances).
- **Behavior & Pain Points**: Anxious about exams, tight on time and pocket money. Frustrated by ad-cluttered PDF sharing sites, broken Google Drive links, and bloated apps that drain data.
- **Mental Model**: Expects instant utility. Wants to verify that the note or e-book matches their specific curriculum board (NCTB / National Curriculum) before committing money.

### Secondary: Guardians & Parents (Ages 38–55)
- **Hardware & Context**: Shared family mobile device or personal smartphone. Navigates primarily in Bengali. Highly cautious of online fraud, deceptive subscriptions, and unverified digital transactions.
- **Behavior & Pain Points**: Will pay using personal mobile financial services (bKash, Nagad, Rocket) only if the store appears formal, stable, and transparent. Wants clear receipts, tangible proof of what is inside, and assurance that downloaded files open without requiring expensive proprietary software.

### Tertiary: Teachers & Private Tutors
- **Hardware & Context**: Android phones and budget laptops.
- **Behavior & Pain Points**: Seeks reliable chapter summaries, question banks, and turnkey web templates for coaching centers or personal portfolios. Evaluates structured indexes and formatting consistency.

---

## 2. Jobs to Be Done (JTBD)

1. **Pre-Exam Rapid Revision**:
   *When* I have an exam tomorrow morning and need formulas and chapter notes for Physics or Higher Math,
   *I want to* filter directly to my class level and chapter, preview the actual content structure, and buy it in under 60 seconds,
   *So that* I can download the revision sheet immediately to my phone's storage and study offline without wasting mobile data.

2. **Parental Trust & Frictionless Mobile Payment**:
   *When* my child asks me to buy a digital e-book or exam guide,
   *I want to* see transparent pricing with no hidden charges, exact bKash/Nagad send-money or merchant checkout steps, and an instant downloadable file,
   *So that* I know my hard-earned money went to legitimate study material and not an internet scam.

3. **Persistent Device Library Retrieval**:
   *When* I clear my browser tabs, restart my phone, or accidentally delete a downloaded file,
   *I want to* open "My Library" on the same device and re-download my purchased items with a single tap,
   *So that* I don't panic or pay a second time for material I already own.

---

## 3. Success Criteria (Measurable & Deterministic)

- **Payload & Speed**: Total page size strictly under 300 KB (excluding external web font); zero blocking third-party scripts; First Contentful Paint (FCP) < 500ms on 3G network simulation; Cumulative Layout Shift (CLS) = 0.
- **Zero-Build & Protocol Independence**: Runs natively when opening `index.html` via `file:///` directly from Android storage or desktop disk. Zero `fetch()` calls to local JSON/HTML; zero ES modules (`import`/`export`). All catalog and configuration data loaded via standalone script tags into a predictable namespace.
- **Bangla Script Craftsmanship**:
  - Zero matra/kar clipping: `line-height` calibrated to 1.65–1.8 for Bengali text.
  - Zero letter-spacing on Bengali text (preserving conjunct ligatures and diacritics).
  - Consistent numeral system throughout prices and metadata.
  - Fallback stack that gracefully degrades to system Bengali typography (`SolaimanLipi`, `Kalpurush`, `Siyam Rupali`, `system-ui`) without broken character boxes.
- **Accessibility & Touch Usability**:
  - WCAG 2.2 Level AA compliance across all color contrasts, interactive states, and semantic landmark elements.
  - Minimum touch target size of 44×44 CSS pixels across all buttons, filter chips, and links.
  - Full keyboard operability with distinct `:focus-visible` styling.
  - Explicit `aria-live` regions for cart updates, filter counters, search results, and checkout validation errors.
- **Anti-Deception & Radical Honesty**:
  - Zero fake social counters, zero simulated "4.9/5 stars from 12,450 users", zero fake urgent countdown timers.
  - Concrete product specifications: exact chapter outline, format (PDF/HTML/ZIP), file size in KB/MB, syllabus year, and exact sample page view drawn programmatically in SVG/CSS.
- **Scalable Architecture**:
  - Filter and search operations execute synchronously in under 16ms across 24 to 500+ items without freezing the main thread.

---

## 4. Core Assumptions

1. **Client-Side Simulation**: No dedicated server or backend database exists; orders and library access are persisted locally in `localStorage` with fail-safe error handling for incognito/restricted storage environments.
2. **Deterministic Download System**: Download actions generate and trigger real, functional downloadable payloads (e.g. self-contained study sheet HTML/SVG documents or data-URI blobs) that save directly to the user's device Downloads directory.
3. **Bilingual Academic Reality**: The primary interface is Bengali, but common academic nomenclature (e.g., "Physics", "SSC 2026", "Chapter 3", "PDF", "HTML5 Template") remains in English/Latin text to reflect real-world student search behavior and exam board conventions.
4. **Visual Identity**: The aesthetic must depart completely from generic startup templates. Instead of cookie-cutter rounded cards and purple gradients, it will draw inspiration from authentic academic publishing: Bengal press stationery, clean editorial grids, ink-stamp verification seals, notebook ruling cues, and crisp typographic contrast.

---

## 5. The 3 Biggest Threats to Quality on This Brief

1. **Threat 1: The "Generic Template Syndrome"**
   - *Risk*: Resorting to standard SaaS components—pill buttons with drop shadows, generic cards with 12px radii, pastel gradient washes, and empty hero banners with large numbers and abstract icons.
   - *Mitigation*: Anchor every visual choice in the authentic material culture of South Asian education and publishing: newsprint and ledger textures, precise mechanical borders, high-density editorial tables, and SVG-generated book covers with geometric syllabus motifs.

2. **Threat 2: Bengali Font & Glyph Rendering Breakage on Budget WebViews**
   - *Risk*: Complex Bengali conjuncts (য-ফলা, র-ফলা, ষ্ণ, ক্ত, ঙ্গ) breaking into dotted circles or misaligned diacritics under custom font delay or fallback mismatch; cramped line heights slicing top/bottom vowel signs (ই-কার, ঈ-কার, উ-কার).
   - *Mitigation*: Enforce strict typography CSS tokens (`line-height: 1.7`, `letter-spacing: normal !important` for `.bn`, robust fallback font stack matching Bengali ascent/descent metrics).

3. **Threat 3: Trust Deficit in Digital Checkout**
   - *Risk*: First-time buyers (especially parents) abandoning checkout because they cannot physically inspect the digital product and distrust mobile payment instructions.
   - *Mitigation*: Provide exhaustive "What You Get" specifications, an interactive SVG sample preview showing exact layout, zero deceptive marketing text, transparent refund/re-download terms, and a step-by-step mobile wallet guide (bKash/Nagad USSD & App instructions).

---

## Exit Statement

**This store is built for Bangladeshi students and budget-conscious parents on modest Android devices with slow, metered data, who need exam-ready notes, syllabus e-books, and starter digital templates without friction or confusion. The first screen must immediately make them feel the grounded certainty of an authentic academic press—clarity, zero fluff, instant search by class and subject—and compel them to inspect a verified chapter preview within seconds.**
