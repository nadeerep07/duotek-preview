# Duotek — Human by Design Website

Client-approved production website built on the **Human Editorial** design direction (Concept 02) from the interactive preview concepts.

---

## 📁 Project Structure

```
duotek-client-preview/
├── index.html                   # Clean, semantic HTML5 entrypoint
├── css/
│   ├── variables.css            # Design tokens (warm identity, typography, glassmorphism)
│   ├── base.css                 # Reset, typography baselines, accessible motion queries
│   ├── layout.css               # Header, split stage grid (56% text / 44% sticky photo), mobile
│   ├── components.css           # Progress indicator, contact modal, floating badges
│   └── main.css                 # Master stylesheet import
├── js/
│   ├── data/
│   │   └── services.js          # Structured service records (AMC, Cloud, Security, etc.)
│   ├── modules/
│   │   ├── editorial.js         # Sticky split-screen stage controller & photo cross-fades
│   │   ├── scroll.js            # GSAP ScrollTrigger & Lenis smooth scroll orchestrator
│   │   └── modal.js             # Accessible contact dialog & direct inquiry controller
│   └── main.js                  # Application initialization
├── assets/
│   ├── icons/
│   │   └── favicon.svg          # Brand SVG favicon
│   └── images/
│       ├── hero-workspace.webp  # Hero contemporary technology workspace
│       ├── service-amc.webp     # Annual Maintenance Contract visual
│       ├── service-cloud.webp   # Cloud Solutions visual
│       ├── service-security.webp# Security Systems visual
│       ├── service-automation.webp# Home Automation visual
│       └── service-web.webp     # Web Designing visual
└── package.json                 # Optional local dev scripts
```

---

## 🎨 Design System Specifications

- **Design Philosophy**: *"Human by design"* — warm, editorial, tactile technology.
- **Color Palette**:
  - Background: `#f3f0eb` (Warm editorial linen)
  - Card & Surfaces: `#f7f5f0d9` (Glassmorphic 22px blur)
  - Ink: `#10191e` / `#182126`
  - Accent: `#e77947` (Warm orange-amber)
  - Gradient: `linear-gradient(95deg, #e6932a, #e7744d, #dba79c)`
- **Typography**:
  - Display: **Manrope** (800 / 700 / 600)
  - Body: **DM Sans** (400 / 500 / 700)
- **Interactions**:
  - Sticky split-stage with cross-fading imagery and Ken Burns scale transitions
  - GSAP typography scrub reveal staggers
  - Lenis smooth momentum wheel scrolling
  - Inline mobile imagery with responsive card layout

---

## 🚀 Running Locally

You can open `index.html` directly in any modern browser, or run a local static server:

```bash
# Using Python:
python3 -m http.server 3000

# Or using npx:
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to preview.
