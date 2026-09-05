# MakeupByDeepiksha — Official Multipage Luxury Bridal Website

<p align="center">
  <img src="images/hero.jpg" alt="MakeupByDeepiksha Hero Banner" width="100%" style="border-radius: 8px; max-height: 420px; object-fit: cover;" />
</p>

A luxury, responsive multipage static website rebuilt for **MakeupByDeepiksha**, professional bridal makeup artist based in Vashi, Navi Mumbai.

## ✨ Features & Highlights

- **Brand Identity**: Preserved approved luxury editorial bridal aesthetic with exact color palette (`--pearl`, `--blush`, `--petal`, `--rose`, `--cocoa`, `--gold`) and typography (*Cormorant Garamond* & *Jost*).
- **SEO & Social Sharing Ready**: Complete OpenGraph, Twitter Card, JSON-LD Schema structured data, robots, and luxury SVG/PNG favicon support across all pages.
- **Architecture**: 100% Static HTML5, CSS3, and Vanilla JavaScript with zero external runtime frameworks or backend dependencies.
- **Pages**:
  - `index.html` — Homepage featuring Hero, About intro, Services preview, Signature Work highlights, The Experience process, 11 Kind Words Testimonials slider, Pricing snapshot, and Booking CTA.
  - `about.html` — Deepiksha Anavadia biography, experience (5+ years, 36+ locations), bridal philosophy, and process timeline.
  - `services.html` — Detailed bridal, engagement, sangeet, reception glam, and full inclusions (draping, lashes, lenses, extensions, styling consultations).
  - `work.html` — Photography-first portfolio gallery with category filters and interactive full-image lightbox modal.
  - `pricing.html` — Complete Mumbai/Navi Mumbai/Thane & Outstation investment tables, inclusions, and trial run policies.
  - `policies.html` — All 10 official bridal makeup terms & conditions clearly presented.
  - `contact.html` — Conversion-focused booking page with direct click-to-call, WhatsApp booking, Instagram profile link, and consultation enquiry form.

---

## Design System & Tokens

### Approved Color Palette
```css
--pearl: #FAF6F2;       /* Primary light background */
--blush: #E8D2CC;       /* Soft secondary sections / details */
--petal: #F1DFDF;       /* Subtle light/pink accent */
--rose:  #B98282;       /* Labels, accents, interactive highlights */
--cocoa: #3A2927;       /* Dark text, dark sections, footer */
--gold:  #B99A72;       /* Fine decorative lines, dots, premium accents */
```

### Typography
- **Display / Headings**: *Cormorant Garamond* (Google Fonts)
- **Body / Navigation**: *Jost* (Google Fonts)

---

## File Structure

```text
makeupbydeepiksha/
│
├── index.html            # Home page
├── about.html            # About page
├── services.html         # Services page
├── work.html             # Portfolio gallery with Lightbox
├── pricing.html          # Investment & Pricing details
├── policies.html         # Official terms & conditions
├── contact.html          # Contact & booking inquiry form
│
├── css/
│   └── style.css         # Unified responsive design system & component styles
│
├── js/
│   └── script.js         # Mobile drawer, scroll reveal, carousel, and lightbox logic
│
├── images/
│   ├── favicon.svg       # Luxury gold & rose brand SVG favicon
│   ├── hero.jpg          # Original hero image
│   ├── about-main.jpg    # Deepiksha applying makeup
│   ├── about-portrait.jpg# Deepiksha artist portrait
│   ├── cta-bg.jpg        # Signature saree CTA background
│   ├── work-01.jpg .. 14.jpg # High-resolution portfolio photographs
│   └── ... (original source images)
│
└── README.md
```

---

## Deployment Instructions

This website is a standard static site and can be deployed instantly to any static web hosting platform:

### 1. Cloudflare Pages
1. Connect your repository or drag-and-drop the directory.
2. Build command: `None` (leave blank).
3. Output directory: `/` (root directory).

### 2. GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** and choose `main` / `root`.

### 3. Vercel / Netlify
1. Import project into Vercel or Netlify.
2. Framework preset: **Other** / Static HTML.
3. Deploy.

### 4. Local Testing
Run with any local HTTP server:
```bash
# Using Python
python -m http.server 8000

# Using Node / npx
npx serve .
```
Then open `http://localhost:8000` in your web browser.
