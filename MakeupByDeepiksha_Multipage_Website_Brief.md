# MakeupByDeepiksha --- Multipage Website Development Brief

## 1. Role

You are the lead frontend developer responsible for rebuilding the
existing **MakeupByDeepiksha** website into a polished,
production-ready, responsive **multipage static website** using the
supplied original HTML as the content/source reference.

The developer will receive:

1.  This Markdown brief.
2.  The original HTML file: `Deepiksha the bridal suite.html`
3.  A folder containing all extracted website photos.
4.  The photos will be supplied with sequence numbers. **Use the
    supplied sequence numbers to map the photos to the correct places in
    the website.**

Do not invent business facts, prices, testimonials, contact details,
services, policies, or claims. The original HTML is the primary source
for existing website content.

------------------------------------------------------------------------

# 2. Main Objective

Transform the existing single-page HTML website into a professional
multipage website while preserving the established visual identity.

The new site should feel like the same brand and same website --- **not
a completely different redesign**.

### Required goals

-   Keep the existing colour theme exactly.
-   Keep the existing hero section image.
-   Keep the existing overall luxury/editorial bridal aesthetic.
-   Reuse the existing wording/content from the original HTML wherever
    applicable.
-   Use the supplied image sequence for all photos.
-   Make the site fully responsive.
-   Make it work properly across Chrome, Safari, Edge and Firefox.
-   Make it excellent on Android/iPhone/tablet/desktop.
-   Improve spacing, typography, navigation, accessibility, interactions
    and usability where appropriate.
-   Convert the current section-based navigation into real separate
    pages.
-   Keep all important existing information.
-   Do not introduce unnecessary frameworks or backend technology.

------------------------------------------------------------------------

# 3. Technology

Use a simple, reliable static stack:

-   HTML5
-   CSS3
-   Vanilla JavaScript

Do NOT use React, Next.js, Vue, Angular, PHP, WordPress, a database, or
a backend unless there is a genuine requirement.

The website must be deployable as a normal static website.

Recommended structure:

``` text
makeupbydeepiksha/
│
├── index.html
├── about.html
├── services.html
├── work.html
├── pricing.html
├── contact.html
├── policies.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── ...
│
└── README.md
```

If a better static structure is required, use it, but keep it simple.

------------------------------------------------------------------------

# 4. Existing Brand Identity --- DO NOT CHANGE

The existing website uses this exact colour system:

``` css
--pearl: #FAF6F2;
--blush: #E8D2CC;
--petal: #F1DFDF;
--rose: #B98282;
--cocoa: #3A2927;
--gold: #B99A72;
```

These colours are part of the approved visual identity.

### Colour usage

-   Pearl: primary light background
-   Blush: soft secondary sections/details
-   Petal: subtle light/pink accent
-   Rose: labels, accents and interactive highlights
-   Cocoa: dark text, dark sections and footer
-   Gold: fine decorative lines, dots and premium accents

**Do not replace this palette with a new colour scheme.**

Do not introduce bright purple, blue, green, neon colours, generic
beauty-site pink, or unrelated gradients.

Small tonal variations are acceptable only when required for readability
or accessibility.

------------------------------------------------------------------------

# 5. Typography

The original website uses:

### Display / heading font

**Cormorant Garamond**

### Body / navigation font

**Jost**

Preserve this typography direction.

Headings should retain the elegant editorial serif appearance.

Body copy should remain clean, light and sophisticated.

Do not replace the typography with generic system fonts unless the
external font fails to load; include sensible fallbacks.

------------------------------------------------------------------------

# 6. Overall Visual Direction

The design should communicate:

-   Luxury
-   Bridal elegance
-   Soft sophistication
-   Editorial beauty
-   Personalised service
-   Premium but warm
-   Clean and uncluttered
-   Photography-led

The design should NOT feel:

-   Corporate
-   Overly flashy
-   Generic salon website
-   Template-like
-   Overloaded with cards
-   Over-animated
-   Too colourful

Photography should remain the primary visual focus.

Use generous whitespace, refined typography, subtle borders and
restrained animation.

------------------------------------------------------------------------

# 7. Website Pages

Create the following pages:

## 7.1 Home

File:

``` text
index.html
```

Recommended content order:

1.  Fixed/sticky navigation
2.  Hero
3.  Short introduction/about preview
4.  Services preview
5.  Signature work preview
6.  Experience / process
7.  Testimonials
8.  Pricing preview
9.  Strong booking CTA
10. Footer

The home page should not become unnecessarily long. It should provide
previews and direct visitors to the full pages.

------------------------------------------------------------------------

## 7.2 About

File:

``` text
about.html
```

Include:

-   Artist portrait
-   Artist introduction
-   Experience
-   Philosophy
-   Personalised approach
-   5+ Years Experience
-   36+ Locations Served
-   Relevant supporting photography if available

Existing source content:

### Artist

**Deepiksha Anavadia**

**Professional Makeup Artist**

> With a passion for enhancing natural beauty, Deepiksha creates
> refined, personalised makeup looks designed to make every occasion
> unforgettable.

> From the first consultation to the final touch-up before you walk down
> the aisle, every look is built around your features, your outfit and
> the story of your day --- never a template.

Stats:

-   **5+** --- Years Experience
-   **36+** --- Locations Served

The supplied Bridal Experience Guide may also be used as a source for
the About page, but do not contradict the original HTML.

The guide describes Deepiksha as a luxury bridal makeup artist based in
Navi Mumbai with over 5 years of professional experience, specialising
in timeless, elegant and personalised bridal looks. It also describes an
approach based on understanding each bride's vision, skin type and
comfort, with attention to a flawless, long-lasting and lightweight
finish.

------------------------------------------------------------------------

# 8. Services Page

File:

``` text
services.html
```

Existing services:

### I --- Bridal Makeup

Timeless, personalised bridal looks designed for your wedding day.

### II --- Engagement

Soft, radiant makeup for your special celebration.

### III --- Sangeet Glam

Elegant glam for celebrations and special occasions.

### IV --- Reception

Camera-ready beauty designed to complement your outfit and styling.

Do not invent additional services unless they are clearly present in the
supplied source material.

The pricing source also refers to:

-   Wedding
-   Reception
-   Sangeet
-   Haldi
-   Mehndi
-   Engagement
-   Touch Up
-   Lehenga draping
-   Normal saree draping
-   Hair accessories
-   Synthetic hair extensions
-   Lashes and lenses
-   Styling consultations

These can be explained on the Services page only when presented as
supported offerings/inclusions from the source.

------------------------------------------------------------------------

# 9. Work / Portfolio Page

File:

``` text
work.html
```

This should be a photography-first portfolio page.

Existing section title:

**Signature Work**

**A Look for Every Story**

Existing supporting line:

> Every bride, every glow, a little different from the last.

## IMPORTANT IMAGE MAPPING RULE

The developer will receive the images separately.

The images will be identified by sequence numbers.

Example:

``` text
01.jpg
02.jpg
03.jpg
04.jpg
...
```

Use the supplied sequence order to place the photos.

Do not randomly reorder the images.

Do not replace the existing hero image with another image.

Do not use stock photos.

Do not generate placeholder photos if the supplied photos are available.

If the original HTML provides an image-specific caption/tag, preserve
that caption where possible.

One known existing portfolio label is:

**Traditional Bride**

If the original HTML contains other image-specific labels, preserve
them.

## Portfolio interaction

Implement a polished gallery experience:

-   Responsive masonry/grid layout
-   Good portrait-image handling
-   `object-fit: cover` where appropriate
-   Full-image viewing/lightbox on click
-   Keyboard close with Escape
-   Previous/next navigation if practical
-   Touch-friendly mobile behaviour
-   Lazy loading for non-hero images
-   Proper alt text
-   No layout jumping while images load

Do not crop important faces unnecessarily.

------------------------------------------------------------------------

# 10. Hero Section

The hero must preserve the **same hero image from the original HTML**.

Do not choose a new hero image.

Existing hero content:

Eyebrow:

**Bridal · Occasion**

Headline:

**Beauty,\
Refined.**

Supporting text:

> Makeup artistry for the moments you'll look back on for the rest of
> your life.

Primary CTA:

**Book Your Session**

The new Home page should retain the same visual concept and hero image
while improving responsiveness and usability.

Hero image should:

-   Fill the intended hero composition elegantly.
-   Preserve important facial/body areas.
-   Use responsive positioning.
-   Have a suitable dark overlay if required for text contrast.
-   Not become pixelated.
-   Not distort.

------------------------------------------------------------------------

# 11. Experience / Process

Existing section:

**The Experience**

**How We Get There**

### One --- Consultation

> We talk through your outfit, skin and the mood you want --- in person
> or over a call.

### Two --- Trial Run

> A full trial before the big day, so every detail is settled well in
> advance.

### Three --- Your Day

> Unhurried application and touch-ups, timed around your schedule.

Use this section on the Home page as a preview and/or expand it on the
Services/About page.

------------------------------------------------------------------------

# 12. Testimonials

Create a refined testimonials section.

Existing title:

**Testimonials**

**Kind Words**

Preserve the following testimonials exactly unless the client later
provides updated wording:

1.  "Deepiksha handled my entire bridal makeup for five wedding
    > functions, creating five beautiful and distinct looks --- every
    > one perfectly matched my outfits."

--- Gauri Agarwal

2.  "An absolute favourite of mine for my wedding --- calm, focused, and
    > delivered the exact look I was going for."

--- Namita Soni

3.  "Very skilled and easy to work with, always open to suggestions.
    > Loved the way she dolled me up on my big day."

--- Samidha Dhoble

4.  "The entire process was calm and peaceful, and she made me feel very
    > comfortable. The makeup looked beautiful and natural."

--- Anjali Tripathi

5.  "My last-minute saviour --- travelled so far for my big day and
    > saved it completely. The makeup was subtle, long-lasting, and got
    > so many compliments."

--- Sumaiya Khan

6.  "Deepiksha is absolutely amazing. Her calm presence and punctuality
    > made the entire experience smooth and worry-free."

--- Sharon Dsouza

7.  "I absolutely loved my look, and everything was done so perfectly.
    > The makeup stayed flawless until the very end of the day."

--- Ashwini Kotian

8.  "Such a sweet person with such an innate art of doing makeup --- she
    > did an effortless job on my face."

--- Vridhi Tilwani

9.  "An amazing experience with Deepiksha for my bridal makeup and three
    > other events --- every look was beautifully done, long-lasting,
    > and perfectly suited."

--- Hasu Arethiya

10. "Very professional and patient, and the whole session felt relaxed.
    > The makeup was done beautifully and stayed well."

--- Alexandra Dede

11. "I loved the makeup --- the look was exactly what I needed and made
    > my day. Deepiksha was very professional throughout."

--- Khushbu Daiya

Design testimonials elegantly. Do not make 11 large cards that overwhelm
the page. A responsive carousel/slider or elegant grid is acceptable.

------------------------------------------------------------------------

# 13. Pricing Page

File:

``` text
pricing.html
```

Existing heading:

**Investment**

**Pricing Details**

## Mumbai / Navi Mumbai & Thane

  Service                                              Price
  -------------------------------------- -------------------
  Wedding / Reception / Sangeet Makeup     ₹20,000 -- 23,000
  Haldi / Mehndi / Engagement Makeup       ₹15,000 -- 18,000
  Touch Up                                           ₹12,000

## Outstation Makeup

  Service                                              Price
  -------------------------------------- -------------------
  Wedding / Reception / Sangeet Makeup     ₹23,000 -- 25,000
  Haldi / Mehndi / Engagement Makeup       ₹20,000 -- 23,000
  Touch Up                                           ₹15,000

## The Above Pricing Includes

-   Lashes and lenses
-   Hair accessories and synthetic hair extensions
-   Lehenga draping, normal saree draping
-   Styling consultations as per colour theory, body shape, and facial
    anatomy of the bride, to ensure jewellery, outfits, and hair styling
    are in sync with the bride's personality and face shape

Do not alter the prices.

Do not add taxes, discounts, package names or extra fees unless they are
present in the source.

------------------------------------------------------------------------

# 14. Booking & Trial

This can be included on the Pricing page or Policies page.

Heading:

**Good to Know**

**Booking & Trial**

## Booking Policy

-   60% advance for confirmation of the booking (non-refundable)
-   Remaining 40% payable post event

## Trial Details

-   Trial takes place at my place, Vashi. Charges are ₹3,000, payable
    immediately --- this amount is deducted from the package once the
    booking is confirmed
-   A second trial prior to the wedding day to finalise the look
    (optional)

Additional notes:

> Travel expenses are borne by the client both ways and are not included
> in the package.

> To finalise the package, we'd love to discuss your specific
> requirements and budget --- a call is the best way for us to
> understand each other's needs and preferences.

Preserve the meaning and wording.

------------------------------------------------------------------------

# 15. Policies / Terms Page

File:

``` text
policies.html
```

Create a clean, readable legal/information page.

Heading:

**Please Read**

**Bridal Makeup Terms & Conditions**

Include all 10 terms:

### 01 --- Booking Confirmation

> The booking will be confirmed only after receiving the required
> advance payment. Dates are blocked on a first-come, first-served
> basis.

### 02 --- No Cancellation / No Refund Policy

> In the event of a client-initiated cancellation, the full outstanding
> balance of the agreed-upon services must be paid, regardless of
> whether the services have been utilized.

### 03 --- Package Policy

> If a package is booked and the client decides to cancel one or more
> makeups from the package, the client will still be required to pay the
> full amount for the entire package.

### 04 --- Hair Extensions & Accessories

> A refundable security deposit is required for accessories and
> extensions. It will be refunded if items are returned within 72 hours
> without damage; otherwise, the deposit will not be refunded.

### 05 --- Payment Policy

> The remaining payment must be cleared on or before the event day,
> before the makeup begins.

### 06 --- Travel Charges

> Travel and accommodation charges (if applicable) will be charged
> separately depending on the event location.

### 07 --- Time Management

> Clients are requested to be ready on time. Any delay from the client's
> side may affect the makeup timeline and final results.

### 08 --- Skin Conditions

> Clients must inform beforehand about any skin allergies,
> sensitivities, or medical conditions. The artist will not be
> responsible for any reactions if not disclosed earlier.

### 09 --- Photography Rights

> The makeup artist reserves the right to use pictures or videos of the
> client for portfolio, social media, and promotional purposes.

### 10 --- Unforeseen Circumstances

> In case of an unforeseen emergency or unavoidable situation where I am
> unable to personally attend the booking, I reserve the right to send a
> trained member of my team to provide the services.

Do not rewrite these policies unless specifically asked.

------------------------------------------------------------------------

# 16. Contact Page

File:

``` text
contact.html
```

Make this a strong conversion page.

Existing contact details:

**MakeupByDeepiksha**

**Bridal Makeup Artist**

**Studio in Vashi, Navi Mumbai**

Phone:

**+91 98191 61943**

WhatsApp:

**+91 98191 61943**

Instagram:

**@makeupbydeepiksha**

Instagram profile:

``` text
https://instagram.com/makeupbydeepiksha
```

WhatsApp booking link from the original site:

``` text
https://wa.me/919819161943?text=Hi%20Deepiksha%2C%20I%27d%20like%20to%20book%20a%20makeup%20session
```

Primary contact CTA:

**Book Your Appointment →**

Use real clickable links:

-   `tel:+919819161943`
-   WhatsApp link
-   Instagram link

Do not invent an email address.

Do not invent a street address.

Do not embed a map unless a verified exact location/address is provided
later.

------------------------------------------------------------------------

# 17. Footer

Preserve the existing footer identity.

Brand:

**MakeupByDeepiksha**

Description:

**Bridal Makeup Artist\
Studio in Vashi, Navi Mumbai**

Navigation links:

-   About
-   Services
-   Work
-   Pricing
-   Contact

Contact:

-   +91 98191 61943
-   WhatsApp
-   @makeupbydeepiksha

Copyright:

**© 2026 MakeupByDeepiksha. All rights reserved.**

Make the footer consistent across every page.

------------------------------------------------------------------------

# 18. Navigation

Create a consistent navigation across every page.

Suggested links:

``` text
Home
About
Services
Work
Pricing
Contact
```

Include a prominent booking CTA on desktop where it fits.

On mobile:

-   Use a proper hamburger menu.
-   Menu must open/close reliably.
-   Close when a navigation link is selected.
-   Close when Escape is pressed.
-   Prevent background scrolling while the menu is open.
-   Ensure sufficient touch target size.
-   Never let the menu overflow the screen.

The original branding is:

**MakeupByDeepiksha**

On narrow screens it may use a shorter visual mark such as:

**Deepiksha**

if this improves fit, while keeping the full brand name accessible.

------------------------------------------------------------------------

# 19. Responsive Requirements

The site must be designed mobile-first and tested at:

-   320px
-   360px
-   375px
-   390px
-   412px
-   480px
-   768px
-   1024px
-   1280px
-   1440px
-   Large desktop widths

No:

-   horizontal scrolling
-   clipped text
-   overlapping buttons
-   broken navigation
-   stretched images
-   unreadable tables
-   tiny touch targets

Pricing tables must become mobile-friendly cards/stacked rows when
necessary.

------------------------------------------------------------------------

# 20. Browser Compatibility

Ensure the website works correctly in:

-   Google Chrome
-   Safari
-   Microsoft Edge
-   Firefox
-   Android Chrome
-   iPhone Safari

Avoid experimental CSS/JS features unless there is a safe fallback.

Use semantic HTML and progressive enhancement.

------------------------------------------------------------------------

# 21. Performance

The website is image-heavy, so performance is important.

Use:

-   properly sized images
-   lazy loading for below-the-fold images
-   `width` and `height` or aspect-ratio to reduce layout shift
-   modern image formats where practical
-   compressed images
-   no unnecessary base64 embedding
-   no enormous JavaScript libraries
-   no unnecessary animation libraries

### IMPORTANT

The original HTML embeds very large images directly as Base64 data URLs.

Do NOT continue that architecture.

Use normal image files:

``` html
<img src="images/01.jpg" alt="...">
```

Keep the HTML, CSS and JS maintainable.

------------------------------------------------------------------------

# 22. Accessibility

Implement good basic accessibility:

-   semantic headings
-   proper button/link elements
-   meaningful image alt text
-   visible keyboard focus
-   keyboard-accessible navigation
-   keyboard-accessible gallery/lightbox
-   sufficient text contrast
-   form labels if a form is added
-   `aria-label` where necessary
-   respect `prefers-reduced-motion`

Do not rely only on hover effects because mobile/touch users cannot
hover.

------------------------------------------------------------------------

# 23. Animation

The original site uses subtle scroll reveal animations.

Preserve this feeling, but improve it where appropriate.

Animations should be:

-   subtle
-   slow/elegant
-   premium
-   not distracting

Use CSS/vanilla JS only.

Support:

``` css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled, remove or greatly reduce animation.

------------------------------------------------------------------------

# 24. Image Handling

The supplied image folder is the source of truth.

Before coding the gallery:

1.  Inspect all images.
2.  Identify their sequence numbers.
3.  Determine which image corresponds to the original hero.
4.  Determine which image corresponds to the About portrait.
5.  Map remaining images to Work/portfolio in supplied sequence order.
6.  Preserve the supplied sequence.

Do not make assumptions based only on filenames if the images themselves
can be inspected.

Create a simple image mapping internally, for example:

``` text
Hero → image-01.jpg
About portrait → image-02.jpg
Work 01 → image-03.jpg
Work 02 → image-04.jpg
Work 03 → image-05.jpg
...
```

Adjust the actual mapping according to the supplied image sequence and
the original HTML.

------------------------------------------------------------------------

# 25. SEO Basics

Each page should have a unique title and meta description.

Suggested core positioning:

**MakeupByDeepiksha \| Bridal Makeup Artist in Vashi**

Existing description:

> Luxury bridal and professional makeup services by MakeupByDeepiksha in
> Vashi. 5+ years of experience across 36+ locations. Explore bridal,
> engagement and occasion makeup and book your appointment.

Create page-specific descriptions without inventing unsupported claims.

Use:

-   semantic `<h1>`
-   logical heading hierarchy
-   descriptive URLs/file names
-   image alt text
-   canonical URLs only if the final domain is known
-   Open Graph metadata where appropriate

Do not add fake review schema, fake ratings, fake addresses or
unsupported business information.

------------------------------------------------------------------------

# 26. Home Page Conversion Strategy

The website's primary business objective is to generate bridal makeup
enquiries.

Important CTA placements:

-   Hero: Book Your Session
-   Services section: Explore Services / Enquire
-   Pricing section: Discuss Your Requirements
-   End of page: Book Your Appointment
-   Footer: WhatsApp / phone / Instagram

WhatsApp should be the easiest enquiry method.

Do not create a complicated booking system unless the client later
requests one.

------------------------------------------------------------------------

# 27. Final CTA

Preserve the existing CTA concept.

Eyebrow:

**Book Your Session**

Headline:

**Your Moment.\
Your Beauty.**

Supporting text:

**Let's create your signature look.**

Button:

**Book Your Appointment →**

WhatsApp destination:

``` text
https://wa.me/919819161943?text=Hi%20Deepiksha%2C%20I%27d%20like%20to%20book%20a%20makeup%20session
```

The CTA should be visually strong but remain within the existing colour
palette.

------------------------------------------------------------------------

# 28. Content Rules

This is extremely important.

### DO

-   Use the original HTML as the content source.
-   Preserve existing copy.
-   Preserve prices.
-   Preserve policies.
-   Preserve testimonials.
-   Preserve contact information.
-   Preserve brand name.
-   Preserve existing hero copy.
-   Improve presentation.

### DO NOT

-   Invent new services.
-   Invent awards.
-   Invent client counts.
-   Invent years of experience beyond the source.
-   Invent locations.
-   Invent email addresses.
-   Invent physical addresses.
-   Invent reviews.
-   Change prices.
-   Change business claims.
-   Replace the approved colour theme.
-   Replace the hero image.

If something is missing, leave a clean placeholder or omit it rather
than inventing information.

------------------------------------------------------------------------

# 29. Existing Visual Signature to Preserve

The original website has a distinctive visual language:

-   Editorial serif headings
-   Jost uppercase micro-labels
-   Small gold decorative dots
-   Fine gold divider lines
-   Cocoa dark sections
-   Pearl/off-white backgrounds
-   Blush/petal accents
-   Rose typography accents
-   Gold premium details
-   Large photography
-   Soft image overlays
-   Elegant spacing
-   Subtle reveal animations

These details should remain recognizable after the rebuild.

------------------------------------------------------------------------

# 30. Development Quality

Write clean, maintainable code.

Avoid:

-   one enormous HTML file
-   inline Base64 images
-   duplicated CSS across pages
-   duplicated navigation/footer markup where avoidable
-   unnecessary dependencies
-   console errors
-   broken links
-   dead buttons
-   placeholder lorem ipsum
-   excessive animations

Every navigation item should work.

Every CTA should work.

Every image should load.

Every page should have a clear `<title>`.

------------------------------------------------------------------------

# 31. Suggested File Structure

Preferred final structure:

``` text
/
├── index.html
├── about.html
├── services.html
├── work.html
├── pricing.html
├── contact.html
├── policies.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── hero.*
│   ├── about.*
│   ├── 01.*
│   ├── 02.*
│   ├── 03.*
│   └── ...
│
└── README.md
```

If the provided image filenames already have meaningful sequence names,
retain them rather than unnecessarily renaming them.

------------------------------------------------------------------------

# 32. Before Finishing

Perform a complete QA pass.

### Content

-   [ ] All original important content is present.
-   [ ] Prices exactly match source.
-   [ ] Testimonials exactly match source.
-   [ ] Policies exactly match source.
-   [ ] Contact number is correct.
-   [ ] WhatsApp link works.
-   [ ] Instagram link works.
-   [ ] No invented claims.

### Design

-   [ ] Existing colour palette preserved.
-   [ ] Hero image preserved.
-   [ ] Typography feels like original.
-   [ ] Photography is the visual focus.
-   [ ] Pages look premium and cohesive.
-   [ ] No page looks like a generic template.

### Responsive

-   [ ] 320px works.
-   [ ] 360px works.
-   [ ] 390px works.
-   [ ] 412px works.
-   [ ] 768px works.
-   [ ] 1024px works.
-   [ ] Desktop works.
-   [ ] No horizontal overflow.

### Browser

-   [ ] Chrome
-   [ ] Safari
-   [ ] Edge
-   [ ] Firefox
-   [ ] Android Chrome
-   [ ] iPhone Safari

### Technical

-   [ ] No console errors.
-   [ ] No broken image paths.
-   [ ] No broken navigation links.
-   [ ] All pages load independently.
-   [ ] Images are external files, not Base64.
-   [ ] Below-fold images use lazy loading.
-   [ ] Keyboard navigation works.
-   [ ] Reduced-motion preference works.

------------------------------------------------------------------------

# 33. Important Instruction to the Developer

**First inspect the supplied original HTML thoroughly before
implementing the redesign.**

The original HTML is not merely inspiration. It is the primary reference
for:

-   content
-   visual language
-   colours
-   typography
-   hero image
-   portfolio
-   services
-   pricing
-   testimonials
-   policies
-   booking information
-   contact information
-   footer

Then inspect the supplied image folder and map the images according to
the sequence provided.

The final result should be a **professional multipage version of the
existing MakeupByDeepiksha website**, not an unrelated new website.

Preserve the identity. Improve the execution.

------------------------------------------------------------------------

# 34. Deliverable

Return a complete working static website containing:

``` text
index.html
about.html
services.html
work.html
pricing.html
contact.html
policies.html
css/style.css
js/script.js
images/...
```

It must be ready to open locally and ready for deployment to static
hosting such as Cloudflare Pages or GitHub Pages.

Do not require a backend.

Do not require a database.

Do not require a paid hosting platform.

The website should work correctly from a standard static hosting
environment.
