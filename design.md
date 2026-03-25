## Overall design direction

The site should feel:

- **editorial, calm, and image-led**
- **heritage + contemporary**
- **less like a cluttered WordPress site**
- **more like a museum / design archive / cultural publication**

## Core visual principles

- Large typography
- Strong whitespace
- Warm neutral colors
- Grid-based sections
- Reusable cards for easy CMS management
- Fewer carousels, more clean layouts
- Focus on **story + people + objects**, not just posters

---

# MVP core pages

I’d recommend these as the main public pages:

1. **Home**
2. **Exhibitions Index**
3. **Exhibition Detail**
4. **Craftsmen Index**
5. **Craftsman Detail**
6. **Events / Workshops**
7. **Event Detail**
8. **Shop / Support**
9. **Product Detail**
10. **About**
11. **Contact / Visit**

You do **not** need every page fully polished at first, but these are the right targets.

---

# Shared site shell

```txt
+----------------------------------------------------------------------------------+
| LOGO                 Exhibitions  Events  Craftsmen  Shop  About  Contact   EN 中文 |
+----------------------------------------------------------------------------------+
|                                                                                  |
|                              PAGE CONTENT GOES HERE                              |
|                                                                                  |
+----------------------------------------------------------------------------------+
| Footer                                                                           |
| Address | Opening Hours | Instagram | Email | Newsletter | Donate / Support      |
+----------------------------------------------------------------------------------+
```

---

# 1. HOME PAGE

## Goal

The homepage should answer:

- What is Crafts on Peel?
- Why does craftsmanship matter?
- What’s on now?
- Who are the artisans?
- How can I engage or support?

## Recommended sections

- Hero
- Featured exhibition
- Why craftsmanship matters / about
- Craft in everyday life
- Featured craftsmen
- Upcoming events/workshops
- Shop/support
- Newsletter/footer

---

## ASCII wireframe — Home

```txt
+----------------------------------------------------------------------------------+
| LOGO                 Exhibitions  Events  Craftsmen  Shop  About  Contact   EN 中文 |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| [FULL-WIDTH HERO IMAGE: artisan hands / material / workshop detail]              |
|                                                                                  |
|  HANDS OF PEEL                                                                   |
|  Preserving craft, extending stories.                                            |
|                                                                                  |
|  A living archive of Hong Kong craftsmanship — exhibitions, artisan stories,     |
|  workshops, and curated objects.                                                 |
|                                                                                  |
|  [ Explore Exhibitions ]   [ View Events ]   [ Support the Craft ]               |
+----------------------------------------------------------------------------------+

+--------------------------------------+-------------------------------------------+
| CURRENT EXHIBITION                   | FEATURED ARTISAN                          |
|                                      |                                           |
| [image]                              | [portrait]                                |
| Exhibition title                     | Name                                      |
| Short 2-line summary                 | Craft type                                |
| Date / Location                      | Short quote from artisan                  |
| [ View Exhibition ]                  | [ Read Story ]                            |
+--------------------------------------+-------------------------------------------+

+----------------------------------------------------------------------------------+
| WHY CRAFT STILL MATTERS                                                          |
|                                                                                  |
| Short editorial section about preserving not only techniques, but memories,      |
| emotions, and everyday meaning.                                                  |
|                                                                                  |
| [ About Crafts on Peel ]                                                         |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| CRAFT IN EVERYDAY LIFE                                                           |
| Where you may have seen these materials, forms, and traditions in Hong Kong.     |
|                                                                                  |
| +------------------+ +------------------+ +------------------+ +----------------+ |
| | [image]          | | [image]          | | [image]          | | [image]        | |
| | Galvanised steel | | Bamboo craft     | | Embroidery       | | Temple gilding | |
| | old shop gates   | | household tools  | | family objects   | | ritual objects | |
| | [ Learn more ]   | | [ Learn more ]   | | [ Learn more ]   | | [ Learn more ] | |
| +------------------+ +------------------+ +------------------+ +----------------+ |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| EXHIBITION ARCHIVE                                                               |
|                                                                                  |
| +----------------------+ +----------------------+ +----------------------+        |
| | [poster/image]       | | [poster/image]       | | [poster/image]       |        |
| | Exhibition title     | | Exhibition title     | | Exhibition title     |        |
| | Year / Theme         | | Year / Theme         | | Year / Theme         |        |
| | [ View ]             | | [ View ]             | | [ View ]             |        |
| +----------------------+ +----------------------+ +----------------------+        |
|                                                                                  |
| [ Browse All Exhibitions ]                                                       |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| MEET THE CRAFTSMEN                                                               |
|                                                                                  |
| +----------------+ +----------------+ +----------------+ +----------------+       |
| | [portrait]     | | [portrait]     | | [portrait]     | | [portrait]     |       |
| | Name           | | Name           | | Name           | | Name           |       |
| | Craft type     | | Craft type     | | Craft type     | | Craft type     |       |
| | [ Profile ]    | | [ Profile ]    | | [ Profile ]    | | [ Profile ]    |       |
| +----------------+ +----------------+ +----------------+ +----------------+       |
+----------------------------------------------------------------------------------+

+--------------------------------------+-------------------------------------------+
| UPCOMING EVENTS & WORKSHOPS          | SUPPORT THE CRAFT                         |
|                                      |                                           |
| - Bamboo workshop                    | [ Premium Pieces ]                        |
| - Artisan talk                       | For collectors and corporate buyers       |
| - HKBU campus session                |                                           |
| - Intergenerational workshop         | [ Accessible Pieces ]                     |
| [ View all events ]                  | Small gifts, accessories, craft kits      |
|                                      | [ Donate ] [ Shop ]                       |
+--------------------------------------+-------------------------------------------+

+----------------------------------------------------------------------------------+
| NEWSLETTER / FOLLOW / VISIT                                                     |
| [ email field ____________________ ] [ Subscribe ]                               |
| Peel Street address | opening hours | Instagram | email                          |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| Footer navigation                                                                |
+----------------------------------------------------------------------------------+
```

---

# 2. EXHIBITIONS INDEX PAGE

## Goal

This should feel like a proper archive, not just a list of posters.

## Recommended content

- Intro
- Filter tabs: Current / Past / Overseas / London Craft Week
- Grid of exhibitions
- Each card includes image, title, year, short line, CTA

---

## ASCII wireframe — Exhibitions Index

```txt
+----------------------------------------------------------------------------------+
| LOGO / NAV                                                                       |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| EXHIBITIONS                                                                      |
| A living archive of Crafts on Peel’s local and overseas exhibitions.             |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| [ Current ]   [ Past ]   [ Overseas ]   [ London Craft Week ]   [ All ]         |
+----------------------------------------------------------------------------------+

+----------------------------+----------------------------+-------------------------+
| [cover image]              | [cover image]              | [cover image]           |
| Hearts & Hands             | Eternal Connections        | Stories Encapsulated    |
| 2023 · London Craft Week   | 2024 · Hong Kong           | 2022 · Wood             |
| 2-line summary             | 2-line summary             | 2-line summary          |
| [ View Exhibition ]        | [ View Exhibition ]        | [ View Exhibition ]     |
+----------------------------+----------------------------+-------------------------+

+----------------------------+----------------------------+-------------------------+
| [cover image]              | [cover image]              | [cover image]           |
| Creative Cross-Pollination | Crafts Interwoven          | Embracing Craft         |
| year · theme               | year · theme               | year · theme            |
| [ View Exhibition ]        | [ View Exhibition ]        | [ View Exhibition ]     |
+----------------------------+----------------------------+-------------------------+
```

---

# 3. EXHIBITION DETAIL PAGE

## Goal

This is the page that most needs improvement.

Instead of:

- giant poster
- paragraph dump
- PDF only
- artisan slider

You should make it feel like a **digital exhibition story**.

## Better section structure

1. Hero banner
2. Exhibition metadata
3. Curatorial story / foreword
4. Key works gallery
5. Participating artisans
6. Workshop / event tie-ins
7. Brochure / press / downloadable resources
8. Support CTA

---

## ASCII wireframe — Exhibition Detail

```txt
+----------------------------------------------------------------------------------+
| LOGO / NAV                                                                       |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| [WIDE HERO IMAGE OR DETAIL OF ARTWORK]                                           |
|                                                                                  |
| HEARTS & HANDS: CRAFTS OF HONG KONG                                              |
| 2023 · London Craft Week                                                         |
| A celebration of Hong Kong artisans, memory, and living heritage.                |
|                                                                                  |
| [ View Brochure ]   [ Related Events ]   [ Share ]                               |
+----------------------------------------------------------------------------------+

+--------------------------------------+-------------------------------------------+
| EXHIBITION INFO                      | POSTER / KEY VISUAL                        |
|                                      |                                           |
| Date                                 | [poster image]                            |
| Venue                                |                                           |
| Theme                                |                                           |
| Number of artisans                   |                                           |
| Materials featured                   |                                           |
| [ Download brochure ]                |                                           |
+--------------------------------------+-------------------------------------------+

+----------------------------------------------------------------------------------+
| CURATORIAL FOREWORD                                                             |
|                                                                                  |
| 2–4 short paragraphs, readable width, editorial style.                           |
| Not a giant text block.                                                          |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| WHY THIS EXHIBITION MATTERS                                                      |
|                                                                                  |
| +----------------------+ +----------------------+ +----------------------+        |
| | Heritage             | | Contemporary lens    | | Everyday relevance   |        |
| | Explain tradition    | | Explain reinterpret. | | Why it matters now   |        |
| +----------------------+ +----------------------+ +----------------------+        |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| HIGHLIGHTED WORKS                                                                |
|                                                                                  |
| +----------------------+ +----------------------+ +----------------------+        |
| | [artwork image]      | | [artwork image]      | | [artwork image]      |        |
| | Work title           | | Work title           | | Work title           |        |
| | artisan / material   | | artisan / material   | | artisan / material   |        |
| | short caption        | | short caption        | | short caption        |        |
| +----------------------+ +----------------------+ +----------------------+        |
|                                                                                  |
| [ View full gallery ]                                                            |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| PARTICIPATING ARTISANS                                                           |
|                                                                                  |
| +------------------+ +------------------+ +------------------+ +----------------+ |
| | [portrait]       | | [portrait]       | | [portrait]       | | [portrait]     | |
| | Name             | | Name             | | Name             | | Name           | |
| | craft type       | | craft type       | | craft type       | | craft type     | |
| | [ View profile ] | | [ View profile ] | | [ View profile ] | | [ View profile ]|
| +------------------+ +------------------+ +------------------+ +----------------+ |
+----------------------------------------------------------------------------------+

+--------------------------------------+-------------------------------------------+
| RELATED EVENTS / WORKSHOPS           | CRAFT IN EVERYDAY LIFE                    |
|                                      |                                           |
| - Bamboo steamer workshop            | [image] familiar object / local street    |
| - Artisan talk                       | Explain how this craft appears in HK life |
| - Demonstration session              | [ Learn more ]                            |
| [ View all events ]                  |                                           |
+--------------------------------------+-------------------------------------------+

+----------------------------------------------------------------------------------+
| RESOURCES                                                                         |
| [ PDF brochure ]   [ Press Coverage ]   [ Gallery ]   [ Exhibition Credits ]     |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| SUPPORT THIS CRAFT                                                               |
| Help keep traditional craftsmanship visible through workshops, donations,         |
| and curated product support.                                                     |
| [ Donate ]   [ Shop related works ]                                              |
+----------------------------------------------------------------------------------+
```

---

# 4. CRAFTSMEN INDEX PAGE

## Goal

A directory that feels respectful and easy to browse.

## ASCII wireframe — Craftsmen Index

```txt
+----------------------------------------------------------------------------------+
| CRAFTSMEN                                                                        |
| Meet the masters, artisans, and contemporary makers behind the work.             |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| [ All ] [ Bamboo ] [ Wood ] [ Metal ] [ Rattan ] [ Embroidery ] [ Mixed ]       |
+----------------------------------------------------------------------------------+

+----------------------+----------------------+----------------------+---------------+
| [portrait]           | [portrait]           | [portrait]           | [portrait]    |
| Name                 | Name                 | Name                 | Name          |
| Craft type           | Craft type           | Craft type           | Craft type    |
| 1-line descriptor    | 1-line descriptor    | 1-line descriptor    | 1-line desc   |
| [ View profile ]     | [ View profile ]     | [ View profile ]     | [ View ]      |
+----------------------+----------------------+----------------------+---------------+

+----------------------+----------------------+----------------------+---------------+
| [portrait]           | [portrait]           | [portrait]           | [portrait]    |
| Name                 | Name                 | Name                 | Name          |
| Craft type           | Craft type           | Craft type           | Craft type    |
| [ View profile ]     | [ View profile ]     | [ View profile ]     | [ View ]      |
+----------------------+----------------------+----------------------+---------------+
```

---

# 5. CRAFTSMAN DETAIL PAGE

## Goal

This should be one of the strongest pages on the site.

Not just bio + picture.  
It should show:

- who they are
- what craft they practice
- what the craft means
- selected works / exhibitions / workshops

---

## ASCII wireframe — Craftsman Detail

```txt
+----------------------------------------------------------------------------------+
| LOGO / NAV                                                                       |
+----------------------------------------------------------------------------------+

+--------------------------------------+-------------------------------------------+
| [large portrait image]               | NAME OF ARTISAN                           |
|                                      | Craft type                                |
|                                      | "Short quote about craft / memory / hand" |
|                                      |                                           |
|                                      | [ View related exhibitions ]              |
|                                      | [ View available works ]                  |
+--------------------------------------+-------------------------------------------+

+----------------------------------------------------------------------------------+
| BIOGRAPHY                                                                         |
| 2–3 short paragraphs about background, training, philosophy, and practice.       |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| THE CRAFT                                                                         |
| What it is · How it is made · Why it matters in Hong Kong                        |
|                                                                                  |
| +---------------------+ +---------------------+ +---------------------+           |
| | Process             | | Materials           | | Cultural meaning    |           |
| +---------------------+ +---------------------+ +---------------------+           |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| GALLERY OF WORKS                                                                  |
| +----------------------+ +----------------------+ +----------------------+        |
| | [image]              | | [image]              | | [image]              |        |
| | Work title           | | Work title           | | Work title           |        |
| +----------------------+ +----------------------+ +----------------------+        |
+----------------------------------------------------------------------------------+

+--------------------------------------+-------------------------------------------+
| FEATURED IN EXHIBITIONS              | EVENTS / WORKSHOPS                        |
| - Hearts & Hands                     | - Artisan talk                            |
| - Stories Encapsulated               | - Making session                          |
| - Creative Cross-Pollination         | - Campus workshop                         |
| [ See all ]                          | [ Register / Inquire ]                    |
+--------------------------------------+-------------------------------------------+

+----------------------------------------------------------------------------------+
| SUPPORT THIS ARTISAN                                                             |
| [ Premium works ]   [ Accessible pieces ]   [ Inquiry ]                          |
+----------------------------------------------------------------------------------+
```

---

# 6. EVENTS / WORKSHOPS PAGE

## Goal

This page should support:

- upcoming workshops
- talks
- community events
- HKBU collaborations
- past event archive

---

## ASCII wireframe — Events Index

```txt
+----------------------------------------------------------------------------------+
| EVENTS & WORKSHOPS                                                               |
| Learn, make, listen, and experience traditional craft in person.                 |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| [ Upcoming ]   [ Past ]   [ Workshops ]   [ Talks ]   [ Community ]             |
+----------------------------------------------------------------------------------+

+--------------------------------------+-------------------------------------------+
| FEATURED EVENT                       | COMMUNITY / UNIVERSITY COLLABORATION       |
| [event image]                        | [image]                                    |
| Bamboo Steamer Making Workshop       | HKBU Campus Craft Session                  |
| Date / Venue                         | Bring craftsmanship to younger audiences   |
| [ Register ]                         | [ Collaborate ]                            |
+--------------------------------------+-------------------------------------------+

+----------------------------+----------------------------+-------------------------+
| [card image]               | [card image]               | [card image]            |
| Event title                | Event title                | Event title             |
| Date / Tag                 | Date / Tag                 | Date / Tag              |
| short summary              | short summary              | short summary           |
| [ View details ]           | [ View details ]           | [ View details ]        |
+----------------------------+----------------------------+-------------------------+
```

---

# 7. EVENT DETAIL PAGE

## Goal

Clean event page with all important info visible quickly.

---

## ASCII wireframe — Event Detail

```txt
+----------------------------------------------------------------------------------+
| [hero image]                                                                     |
|                                                                                  |
| BAMBOO STEAMER MAKING EXPERIENCE                                                 |
| Workshop · 14 May 2023 · Royal Society of Sculptors                              |
| [ Register / Inquiry ]                                                           |
+----------------------------------------------------------------------------------+

+--------------------------------------+-------------------------------------------+
| EVENT DETAILS                        | ABOUT THIS SESSION                        |
| Date / Time                          | Short overview                            |
| Venue                                | what people will learn                    |
| Language                             | who it is for                             |
| Capacity                             | what to bring / fee                       |
| Artisan                              |                                           |
+--------------------------------------+-------------------------------------------+

+----------------------------------------------------------------------------------+
| MEET THE ARTISAN                                                                 |
| [portrait]  Name / short bio / [ View profile ]                                  |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| EVENT GALLERY / PAST PHOTOS                                                      |
| +----------------------+ +----------------------+ +----------------------+        |
| | [image]              | | [image]              | | [image]              |        |
| +----------------------+ +----------------------+ +----------------------+        |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| RELATED EVENTS                                                                   |
| [cards...]                                                                       |
+----------------------------------------------------------------------------------+
```

---

# 8. SHOP / SUPPORT PAGE

## Goal

Frame this page carefully.  
It’s not just “buy stuff.” It’s:

- support the organization
- support artisans
- own a piece of craft culture
- accessible support for general public
- premium inquiry for collectors/design buyers

---

## ASCII wireframe — Shop / Support

```txt
+----------------------------------------------------------------------------------+
| SUPPORT THE CRAFT                                                                |
| Bring craftsmanship into daily life through curated works, gifts, and kits.      |
+----------------------------------------------------------------------------------+

+--------------------------------------+-------------------------------------------+
| PREMIUM PIECES                       | ACCESSIBLE PIECES                          |
| For collectors, interior designers,  | For visitors, students, tourists, and     |
| corporate buyers                     | everyday supporters                        |
| HK$5,000 – 50,000+                   | HK$100 – 1,000                             |
| [ Browse premium ]                   | [ Browse accessible ]                      |
+--------------------------------------+-------------------------------------------+

+----------------------------------------------------------------------------------+
| FILTERS: [ All ] [ Premium ] [ Accessible ] [ Bamboo ] [ Wood ] [ Metal ]       |
+----------------------------------------------------------------------------------+

+----------------------------+----------------------------+-------------------------+
| [product image]            | [product image]            | [product image]         |
| Product title              | Product title              | Product title           |
| artisan / material         | artisan / material         | artisan / material      |
| HK$___                     | HK$___                     | HK$___                  |
| [ View details ]           | [ View details ]           | [ View details ]        |
+----------------------------+----------------------------+-------------------------+

+----------------------------------------------------------------------------------+
| OTHER WAYS TO SUPPORT                                                            |
| [ Donate ]   [ Join workshop ]   [ Partner with us ]                             |
+----------------------------------------------------------------------------------+
```

---

# 9. PRODUCT DETAIL PAGE

## Goal

Product pages should feel curated, not generic e-commerce.

---

## ASCII wireframe — Product Detail

```txt
+----------------------------------------------------------------------------------+
| LOGO / NAV                                                                       |
+----------------------------------------------------------------------------------+

+--------------------------------------+-------------------------------------------+
| [main product image]                 | PRODUCT TITLE                             |
| [thumb] [thumb] [thumb]              | artisan name                              |
|                                      | material / category                       |
|                                      | HK$___                                    |
|                                      |                                           |
|                                      | Short story / why this piece matters      |
|                                      |                                           |
|                                      | [ Add to inquiry / Add to cart ]          |
+--------------------------------------+-------------------------------------------+

+----------------------------------------------------------------------------------+
| ABOUT THIS PIECE                                                                 |
| Description, process, dimensions, care instructions, significance.               |
+----------------------------------------------------------------------------------+

+--------------------------------------+-------------------------------------------+
| ABOUT THE ARTISAN                    | RELATED EXHIBITIONS                        |
| [portrait + short bio]               | [ exhibition links ]                       |
| [ View profile ]                     |                                           |
+--------------------------------------+-------------------------------------------+

+----------------------------------------------------------------------------------+
| YOU MAY ALSO LIKE                                                                |
| [3 related cards]                                                                |
+----------------------------------------------------------------------------------+
```

---

# 10. ABOUT PAGE

## Goal

Translate their existing rich story into a cleaner editorial layout.

---

## ASCII wireframe — About

```txt
+----------------------------------------------------------------------------------+
| ABOUT CRAFTS ON PEEL                                                             |
| Revive, reinterpret, and perpetuate traditional craftsmanship.                   |
+----------------------------------------------------------------------------------+

+--------------------------------------+-------------------------------------------+
| OUR STORY                            | [building / hands / exhibition image]     |
| Clear 2–3 paragraph introduction     |                                           |
| about mission, history, and role     |                                           |
+--------------------------------------+-------------------------------------------+

+----------------------------------------------------------------------------------+
| THE MEANING OF THE HANDS                                                       |
| Explain the logo, the “手”, mirrored hand, “我”, master-apprentice relationship. |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| WHAT WE DO                                                                       |
| +----------------------+ +----------------------+ +----------------------+        |
| | Exhibitions          | | Workshops            | | Artisan Residence    |        |
| +----------------------+ +----------------------+ +----------------------+        |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| HISTORY MEETS FUTURE                                                             |
| Historical building + modern reinterpretation narrative                          |
+----------------------------------------------------------------------------------+
```

---

# 11. CONTACT / VISIT PAGE

```txt
+----------------------------------------------------------------------------------+
| VISIT US                                                                         |
+----------------------------------------------------------------------------------+

+--------------------------------------+-------------------------------------------+
| ADDRESS / OPENING HOURS              | [map / location image]                     |
| 11 Peel Street, Central              |                                           |
| Tue–Sat ...                          |                                           |
| [ Get Directions ]                   |                                           |
+--------------------------------------+-------------------------------------------+

+--------------------------------------+-------------------------------------------+
| CONTACT FORM                         | GENERAL ENQUIRIES                         |
| Name                                 | Email                                     |
| Email                                | Phone                                     |
| Message                              | Instagram                                 |
| [ Send ]                             |                                           |
+--------------------------------------+-------------------------------------------+
```

---

# Strong homepage content hierarchy

If you only have time to polish one page first, make it this order:

1. Hero
2. Featured exhibition
3. Why craft matters
4. Craft in everyday life
5. Featured craftsmen
6. Upcoming events
7. Support/shop

That alone will already feel much stronger than the current homepage.

---

# Key improvements over their current site

## Home

Current:

- hero slider
- generic about
- crafts fellows

Improved:

- clear mission
- current exhibition
- emotional storytelling
- archive preview
- events
- support pathways

## Exhibition pages

Current:

- poster
- foreword
- pdf
- artisan images

Improved:

- digital exhibition story
- key works
- exhibition context
- participating artisans
- related events
- support / archive / gallery

---

# Reusable components to design first

To speed up implementation, define reusable blocks:

- Navbar
- Footer
- Hero section
- Section heading
- Exhibition card
- Artisan card
- Event card
- Product card
- Quote block
- Two-column content section
- CTA banner
- Gallery grid

That will let you build pages much faster.

---

# Suggested page build priority

If you want MVP speed:

## First build

1. Home
2. Exhibitions index
3. Exhibition detail
4. Craftsmen index
5. Craftsman detail

## Then

6. Events index/detail
7. Shop/support
8. Product detail
9. About/contact

That gives you the strongest story first.

---

If you want, next I can turn these wireframes into either:

1. a **component checklist**,
2. a **Tailwind-friendly page section plan**, or
3. a **homepage copy draft section by section**.
