# ashwingupta.dev — Complete Design & Recreation Guide

> A full breakdown of every section, element, animation, and design decision on [ashwingupta.dev](https://www.ashwingupta.dev/) for faithful recreation.

---

## 0. Tech Stack & Architecture

| Layer | Technology |
|-------|-----------|
| Framework | Astro (static site generator) |
| View Transitions | Astro View Transitions API (`astro:transitions`) with `animate` fallback |
| Deployment | Vercel |
| Rendering | Canvas RAF loop for all visual effects (single loop, not per-component) |
| Animations | Custom JS / Canvas — NOT CSS-only |
| Images | WebP format, offscreen pre-rendering, lazy loading |
| Fonts | Minimalist monospace / sans-serif system (inferred from design aesthetic) |

**Key architectural insight from the author's own case study:**
The site was rebuilt specifically to eliminate 400 animated DOM nodes and a 2 MB JPEG hero. All visual effects collapse into a **single Canvas `requestAnimationFrame` loop**. Frame time went from 18–25ms → 4–6ms.

---

## 1. Global Design Language

### Color Palette
- **Background:** Near-black (dark navy/charcoal) — `#0a0a0f` or similar deep dark
- **Primary text:** Off-white / light gray — `#e8e8e8` or `#f0f0f0`
- **Accent / highlight:** Muted amber or warm gold for key numbers and callouts
- **Secondary text:** Mid-gray for labels, metadata — `#888` / `#999`
- **Borders / dividers:** Very subtle, low-opacity white lines — `rgba(255,255,255,0.08)`
- **HUD elements:** Slightly dimmer than body text, monospace, small caps feel

### Typography
- **Hero name:** Very large serif or display font, split across two lines ("Ashwin" / "Gupta"), likely 96–120px
- **Section headings (H2):** Medium-large, ~40–56px, clean weight
- **Body / prose:** ~16–18px, generous line height (~1.7)
- **HUD / metadata:** Monospace, ~11–13px, letter-spacing: 0.05em
- **Labels / tags:** Uppercase, small, tracked — ~11px

### Spacing & Layout
- Max content width: ~1100–1280px, centered
- Generous section padding: 120–160px vertical
- Left-aligned text blocks with intentional whitespace on right
- Grid: mostly single-column narrative with breakout elements

---

## 2. Global Persistent HUD (Heads-Up Display)

This is the most distinctive element — a set of ambient data readouts fixed on screen that persist **across all Astro View Transitions**.

### HUD Elements (always visible, corners/edges of viewport)

#### Top-Left: Location + Time
```
BLR  23:50:36
···  18:20:36
```
- **BLR** = Bangalore airport IATA code (geolocation → nearest airport)
- First time = **local time (Bangalore)**
- `···` = separator / dots
- Second time = **UTC or viewer's local time**
- Font: monospace, ~12px, muted color
- Updates: live clock, ticking every second

#### Top-Right or Corner: Coordinates Display
```
00:00
X  0.0000
Y  0.0000
```
- Shows **normalized mouse XY coordinates** (0.0000 to 1.0000)
- `00:00` = possibly scroll depth time or session timer
- Updates in real-time as mouse moves
- Font: monospace, same style as clock

#### Scroll Progress Arc
- A **color-staged circular/arc progress indicator** tracking scroll depth
- Changes color at thresholds (e.g., green → amber → red as you scroll deeper)
- Likely rendered on Canvas, not CSS
- Position: fixed, likely bottom-right or top area

### HUD Design Notes
- All HUD elements are **non-interactive** (pointer-events: none)
- Very low visual weight — they are ambient, not focal
- They persist through page transitions (Astro View Transitions keep them mounted)
- Monospace font creates a "systems terminal" aesthetic

---

## 3. Navigation

### Structure
```
[About] [Experience] [Impact]    Work▾    [Recommendations] [Stack] [Articles] [Contact]
```
- Flat horizontal nav, no heavy styling
- "Work" has a dropdown (`▾` indicator) revealing sub-pages
- Links are plain text — no buttons, no borders
- Active state: subtle underline or color shift
- Position: fixed top, full width
- Background: transparent or very subtle blur backdrop on scroll

### Behavior
- On scroll: may gain a subtle backdrop blur or border-bottom
- Mobile: collapses to hamburger or simplified layout
- View Transitions: nav persists, only content morphs

---

## 4. Hero Section

### Layout
Split into two distinct zones:

**Left Zone (text)**
- Tagline above name: *"Not what a model outputs - how the system decides, executes, and holds under load."*
  - Small, gray, italic or light weight
- Name on two lines:
  ```
  # Ashwin
  # Gupta
  ```
  Large display type, full weight
- Role block below name:
  ```
  Role         AI Systems Engineer
  Company      Coforge
               Jun 2024 – Present
  ```
  Two-column label/value layout, monospace or small caps labels
- Social links row: Email · GitHub · LinkedIn · Download Resume
- Tagline footer: *"Optimising: Residuals • Not: Roles"*

**Right Zone (visual)**
- **Profile photo** — circular or slightly rounded, mid-right position
- Below photo: credential pills/tags
  ```
  MLOps & GenAI - IIIT Bangalore
  PyTorch • LLMs • RAG • GCP
  ```
- These appear as subtle tag/badge elements

**Bottom of Hero**
- "Scroll" indicator — likely a subtle downward arrow or animated dot
- May have a scroll-triggered fade

### Hero Canvas Background
- The background is a **Canvas-rendered ambient effect**
- Could be: particle field, noise texture, subtle grid, or constellation-style dots
- Extremely subtle — doesn't compete with text
- Reacts to mouse position (parallax or field distortion)

---

## 5. About Section

### Heading
```
## Inference is easy. Everything around it isn't.
Honest where it matters. Available when it's hard.
```
- H2 + subheading in a lighter weight, slightly smaller

### Body
- Long-form prose, 3–4 paragraphs
- Line length controlled (~70–75ch max)
- No bullet points in first part — pure narrative

### Three Pillar Cards
After the prose, three labeled concept blocks:

| Pillar | Description |
|--------|-------------|
| **Inference as a System** | Prose about p95 latency, architecture questions |
| **Execution Under Constraints** | Latency budgets, VRAM ceilings |
| **Physics-Informed Scientific ML** | PDEs, sparse data |

**Card design:**
- Minimal border (left-border accent line, or subtle full border)
- Heading bold, body regular weight
- Monospace label or numbered prefix possible
- Hover: very subtle background lift or border color change

### "What I don't do" List
- Three bullet points in a distinct style (dash prefix `–` or `•`)
- Slightly dimmer text or italic — signals contrast
- No card wrapper — inline with section

---

## 6. Achievements / Awards Ticker

### Section Label
```
• The Gold and the Glory •
```
Centered, with decorative bullet separators, small caps or tracked uppercase.

### Marquee / Auto-Scrolling Ticker
A **horizontally scrolling infinite marquee** of achievement cards. Two rows scroll in **opposite directions** (one left, one right) for visual depth.

**Each card contains:**
- Company/org logo (SVG or WebP, small ~32px)
- Achievement title (bold)
- Date
- Brief description

**Cards include:**
- Guinness World Record (Jul 2025)
- $1.3M+ Annualised Savings (Jan 2026)
- Best Team Award (Nov 2025)
- Pat on Back — Think Customer Award (Dec 2024)
- Keep It Up Award (Jun 2026)
- Java Spring AI Trainer (Dec '25–May '26)
- Best Outgoing Project (Aug 2024)
- Augment.AI Mentor and Founder (Jan 2022)
- 42.8K Downloads • 202K Views — Kaggle Dataset

**Animation:**
- Pure CSS `animation: marquee linear infinite` or JS-driven RAF
- Cards are duplicated in DOM to create seamless loop
- Hover on ticker: pauses scroll (`animation-play-state: paused`)
- Speed: moderate — readable but always moving
- Separator between cards: `•` bullet

---

## 7. Experience & Education — Timeline

### Heading
```
## The trajectory.
```

### Year Axis
```
2019  2020  2021  2022  2023  2024  2025  2026  2027
```
- Horizontal year markers across the top
- Small, monospace, evenly spaced
- Current year highlighted or marked with a cursor/indicator

### Timeline Entries
Each entry is a horizontal band spanning its date range:

```
[Title]           [Date range]
[Company/Org]
▪ Bullet 1
▪ Bullet 2
▪ Bullet 3
```

**Entries (chronological):**

| Role | Org | Dates |
|------|-----|-------|
| Graphic Designer | OutLawed | Jan 2020–Oct 2022 |
| AI Product Developer | CellStrat | Feb 2021–Dec 2021 |
| Head of Machine Learning | IISc NMCAD Lab | Jan 2022–Sep 2022 |
| Data Scientist | Gida Technologies | Jan 2023–May 2024 |
| AI Engineer | Coforge | Jun 2024–Present |
| B.E. Mechanical Engineering | BMSCE | Aug 2019–May 2023 |
| Executive Diploma AI & ML | IIIT Bangalore | Oct 2025–Mar 2027 |

**Design:**
- Horizontal bar per entry, width proportional to duration
- Color: possibly different hues for employment vs education
- Bars sit on a shared horizontal time axis
- Click/hover expands bullet details
- Vertical stacking when roles overlap in time

### Animation
- Bars animate in from left on scroll-into-view
- Staggered entrance delay per entry
- Bullets fade in after bar appears

---

## 8. Impact Section — Metrics Grid

### Heading
```
## Proof, not promises.
```

### Category Tabs
Horizontal filter tabs across the top:
```
Scale & Performance | Cost & Efficiency | Reliability & Ops | Systems Breadth | Reach & Languages | Research & Publications | Accuracy & Quality
```
- Clicking a tab filters/highlights relevant metrics
- Active tab: underline or filled style

### Metrics Grid
A dense grid of **large numbers**, each linking to the relevant case study.

**Sample metrics:**
| Metric | Value | Project |
|--------|-------|---------|
| Session capacity | 7× | HSBC |
| Concurrent sessions | 1,600+ | HSBC |
| Test load | 2,000 | HSBC |
| E2E latency | <300ms | HSBC |
| Packet loss | <5% | HSBC |
| Inference latency | <50ms | Skill Graph |
| GPU | 1× T4 | Skill Graph |
| Frame time | 18→4ms | This site |
| Frame rate | 60 FPS | This site |
| Annual savings | ~$1.3M | HSBC |
| Compute cost | $118K→$8K | HSBC |
| VMs | 80→15 | HSBC |
| MTTR | 2hr→10m | HSBC |
| Languages | 163+ | Here.app |
| Relevance | +30% | Skill Graph |

**Design:**
- Each number is large (36–48px), bold, with a link underline on hover
- Label below in small muted text
- Grid layout: 5–7 columns, multiple rows
- Numbers not in active tab category are dimmed (opacity: 0.3)
- Hover tooltip or inline label appears on hover

### Footer note
```
Hover a point - every number is delivered, not projected.
```
Small, italic, centered below grid.

---

## 9. Featured Work — Cards

### Heading
```
## What the arc produced.
```

### Work Cards
Large, full-width (or near-full-width) expandable cards. Each has a consistent structure:

**Card Anatomy:**
```
[Title]              [Tag: Client Delivery / Open Source / etc.]
[Client / Org • Date range]

[Context]  Paragraph describing the problem
[Approach] Paragraph describing the method
[System]   Paragraph describing the architecture
[Outcome]  Paragraph with bold metric callouts ↗
```

**Visual structure:**
- Left: vertical label column (`Context`, `Approach`, `System`, `Outcome`) in small muted caps
- Right: content paragraphs
- **Bold inline metrics** within prose (e.g., `**7×**`, `**$1.3M/yr**`)
- `↗` arrow link at bottom-right — links to full case study
- Subtle top border or left-border accent line per card
- Hover: very subtle background lift + border brightens

**Featured Projects:**
1. Conversational Analytics — HSBC (Client Delivery)
2. controla — Local-First Inference OS (In Development)
3. Here.app — 163-Language RAG (Client Delivery)
4. PINNs — Physics-Informed Neural Networks (Research)
5. PHYSCLIP — Contrastive Regime Classification (Open Source)

---

## 10. Research & Systems — Compact Cards

### Heading
```
## Systems that had to hold.
```

### Card Structure
Similar to featured work but more compact — 2 columns on desktop:

```
[Title]              [Tag: Published / Shipped / etc.]
[Org • Context]

Problem    [one-liner]
Method     [one-liner]
System     [one-liner]
Insight    [one-liner]
                                ↗
```

**Projects:**
1. NCISCT 2022 — Published paper, MCQ generation with BERT + WordNet
2. ScholarOS — Research execution OS, 5 locked MCP services
3. ashwingupta.dev — Design handoff, Canvas RAF loop
4. PageIndexOllama — Local-first fork, provider routing layer
5. Azure Infrastructure Documentation Engine
6. Graph-Based Skill Recommendation Engine

---

## 11. Recommendations Section

### Heading
```
## In their words.
```

### Quote Cards
Grid or stacked list of testimonials:

**Card structure:**
```
[Name]           [Title • Company]
"Quote text..."
[Context tag]    [Date]
```

**Design:**
- Large opening `"` quotation mark, decorative, slightly transparent
- Name bold, title muted
- Quote body in regular weight, generous line height
- Context tag in small monospace (e.g., "Direct colleague • HSBC project • Nov 2025")
- Subtle card border, no heavy shadow

**Testimonials from:**
- Arun Kumar Vastrakar (Senior Delivery Director, Coforge)
- Raja Sekhar Amirapu (Senior Technical Architect, Coforge)
- Snehasish Chakraborty (GCP Infrastructure Engineer, HSBC)
- Kartik Mehta (Fraud VS Technology Lead, HSBC)
- Tulsi Patro (AI Engineer, Gida Technologies)

---

## 12. Stack Section

### Heading
```
## What I run in production.
Profiled under load. Not just imported.
```

### Category Groups
Skills organized into labeled groups, each with logo + name pairs:

| Group | Items |
|-------|-------|
| Languages | Python, TypeScript, C/C++, SQL, Bash, Linux |
| Backend & Systems | Distributed systems, Microservices, REST/OpenAPI, Kafka, Redis, Grafana, Prometheus |
| Profiling & Perf | Scalene, line_profiler, Memray |
| Real-Time & Voice | PJSIP/PJSUA2, Kamailio, SIPp, TLS/DTLS |
| Data & Infra | PostgreSQL, MongoDB, Kafka, Spark, FastAPI, FAISS, Chroma |
| AI / ML Systems | LLM deployment, RAG, LangChain/Graph, PyTorch, LoRA, W&B, Ollama, HuggingFace |
| Cloud & DevOps | GCP, Azure, AWS, Docker, Kubernetes, Packer, Terraform, GitHub Actions |

**Design:**
- Each item: SVG logo (24–32px) + text label side by side
- Items in a loose wrap grid within each group
- Group label: uppercase, tracked, muted, ~12px
- Logo + label pairs have subtle hover state (opacity lift or color tint)
- Some items have parenthetical sub-labels: `Python (async · concurrency)`

---

## 13. Contact Section

### Heading
```
## Hard problems welcome.
Optimising: Residuals • Not: Roles
```

### Body text
Short paragraph explaining current status (building, not role-hunting) and openness to conversation.

### Contact Link Grid
```
Resume     Ashwin_Gupta_Senior_AI_Engineer.pdf  ↗
Email      ashwingupta3012@gmail.com            ↗
GitHub     github.com/ughshwin                  ↗
LinkedIn   linkedin.com/in/ashwingupta3012      ↗
Kaggle     kaggle.com/ashwingupta3012           ↗
Location   Bangalore, India                     ↗
```

**Design:**
- Two-column: label (muted, ~120px wide) + value (link, underline on hover)
- `↗` arrow suffix on each link
- No button styling — plain text links
- Generous row spacing

---

## 14. Footer

```
🎨 Vision & design by Ashwin Gupta  •  ⚡ Engineered with Claude Code  •  🚀 Deployed on Vercel
```
- Centered
- Very small (~12px), muted color
- Emoji + text pattern
- Awwwards nomination link below

---

## 15. Canvas / Visual Effects System

This is the **engineering core** of the site's visual identity. All effects run in a **single RAF loop on one `<canvas>` element**.

### Effect 1: Background Particle / Noise Field
- Subtle moving particles or perlin noise texture
- Extremely low opacity — ambient texture, not focal
- Reacts to mouse: slight field distortion or parallax

### Effect 2: Mouse XY Tracker
- Normalized coordinates (0–1) captured on `mousemove`
- Displayed in HUD (`X 0.4231  Y 0.7102`)
- May drive subtle background effect (magnetic pull, ripple, etc.)

### Effect 3: Scroll Depth Arc
- SVG or Canvas arc that fills as user scrolls
- Color transitions: e.g., `hsl(200, 70%, 60%)` → `hsl(40, 90%, 55%)` → `hsl(0, 80%, 55%)`
- Smooth interpolation between color stops

### Effect 4: Clock(s)
- Live `Date()` → formatted HH:MM:SS
- Two timezones: Bangalore (IST, UTC+5:30) + UTC or viewer local
- Updates every 1000ms via `setInterval`

### Implementation Notes
```javascript
// Single RAF loop pattern
function tick(timestamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawParticles(timestamp);
  drawMouseEffect(mouseX, mouseY);
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
```

---

## 16. Astro View Transitions

Page-to-page navigation uses Astro's built-in View Transitions API.

### Behavior
- Navigation links trigger **smooth morphing transitions** — no full page reload
- HUD elements (clocks, mouse tracker, scroll arc) persist unmounted across transitions
- Content fades or slides in/out
- `<meta name="astro-view-transitions-enabled" content="true">` in `<head>`
- Fallback: `animate` (CSS animation fallback for unsupported browsers)

### Transition Types Used (inferred)
- **Fade:** Default for most content sections
- **Slide:** Possibly for case study page entries
- **Morph:** Shared element transitions on titles if navigating to detail pages

---

## 17. Case Study / Detail Pages

### URL Pattern
```
/work/[slug]     — Client delivery case studies
/research/[slug] — Research & personal projects
```

### Page Structure
```
← Back to featured        [nav link]

[Category tag] • [Company]

# [Project Title]

[One-line description]

[Metric badges row]
  ✓ 7× Per-VM session capacity
  ✓ 1,600+ Concurrent sessions sustained
  ...

Δ Infrastructure           [section marker with Greek delta]

[Before/After table]

[Section: The Constraint Environment]
[Long-form prose...]

[Section: What Was Actually Broken]
[Technical narrative + code diagrams in mermaid/flowchart format]
```

### Design Details
- `←` back link: top-left, small, muted
- `Δ` (delta) symbol used as section marker — mathematical notation for "change"
- Metric badges: checkmark `✓` + value + label, pill or inline
- Prose sections have bold inline highlights for key numbers
- Code/diagram blocks: dark background, monospace, with label overlay (`System Topology - Before`)
- Mermaid flowcharts rendered inline for architecture diagrams

---

## 18. Responsive Design

### Breakpoints (inferred)
| Breakpoint | Layout |
|------------|--------|
| Mobile (<768px) | Single column, HUD simplified or hidden |
| Tablet (768–1024px) | Two-column for some sections |
| Desktop (>1024px) | Full layout as described |

### Mobile Adaptations
- HUD: possibly only clock shown, mouse XY hidden
- Timeline: vertical stack instead of horizontal
- Impact grid: 2–3 columns
- Marquee: single row, slower speed
- Nav: collapsed

---

## 19. Micro-interactions & Transitions

| Element | Interaction |
|---------|-------------|
| Nav links | Underline slides in on hover (`transform: scaleX`) |
| Work cards | Background lightens subtly on hover |
| Metrics grid | Non-active numbers dim; hover highlights + shows label |
| Stack logos | Opacity lifts on hover |
| Contact links | `↗` shifts position slightly on hover |
| Marquee | Pauses on hover |
| Timeline bars | Expand on hover to show bullets |
| Scroll arc | Color changes through scroll depth |
| Page transitions | Astro View Transitions fade/morph |

---

## 20. Recreation Priority Order

For faithful recreation, implement in this order:

1. **Global CSS** — colors, typography, spacing tokens
2. **Canvas HUD system** — RAF loop, clocks, mouse XY, scroll arc
3. **Navigation** — fixed, minimal, with dropdown
4. **Hero section** — name, role block, social links, profile photo
5. **Marquee ticker** — infinite scroll, dual rows, pause on hover
6. **Astro View Transitions** — page persistence
7. **About section** — prose + pillar cards
8. **Timeline** — horizontal year axis + duration bars
9. **Impact metrics grid** — tabs + large numbers
10. **Work cards** — Context/Approach/System/Outcome structure
11. **Research cards** — compact two-column grid
12. **Recommendations** — quote cards
13. **Stack grid** — logo + label groups
14. **Contact section** — label/value links
15. **Case study pages** — detail template

---

## 21. Key Design Principles to Maintain

1. **Systems aesthetic** — The design *looks* like it was built by someone who thinks about architecture. Terminal-style HUD, monospace accents, Greek mathematical symbols (Δ), terse labels.

2. **Restraint** — Almost no decorative illustration. No gradients except very subtle. No stock icons except purpose-built SVG logos.

3. **Performance-as-design** — The site demonstrates its own engineering. 60 FPS canvas, single RAF loop, WebP images, no 400-node animated DOM. The design is the proof.

4. **Dense information** — The impact grid packs many numbers into a small space. This is intentional — it communicates depth without verbosity.

5. **Prose-first** — Long, well-written paragraphs are not broken into bullets. Personality and voice come through text, not layout tricks.

6. **Dark + ambient** — Deep dark background with glowing/bright text. Ambient canvas effects that don't distract. The darkness makes the content feel precise and focused.

7. **Earned ornamentation** — The marquee, the delta symbols, the HUD — every unusual element has a reason. Nothing is decorative for its own sake.
