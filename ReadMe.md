# Hands of Peel

A digital heritage and engagement platform prototype for Crafts on Peel.

## Overview

Hands of Peel is a low-maintenance digital platform designed to help Crafts on Peel preserve artisan stories, archive exhibitions, promote events and workshops, and support sustainable growth through curated craft sales and donations.

This prototype is built for the “Revitalising Traditional Craftsmanship” theme and focuses on three goals:

- **Preserve**: archive exhibitions and artisan stories
- **Engage**: make traditional craftsmanship accessible to wider audiences
- **Sustain**: support the NGO through curated product listings, events, and future donations/payment flows

---

## Problem

Crafts on Peel plays an important role in preserving and reinterpreting Hong Kong’s traditional craftsmanship, but with only a small staff team and limited funding, much of its work is difficult to maintain and scale digitally.

Current challenges include:

- limited staff capacity for website and content updates
- poor digital presentation of exhibitions and artisan stories
- temporary visibility of exhibitions after they end
- weak support for online fundraising, sales, and event promotion
- dependence on third-party website maintenance

---

## Solution

Hands of Peel provides:

- a modern public-facing website
- a digital archive for exhibitions and craftsmen
- an events and workshops section
- a curated shop for premium and accessible craft products
- a protected admin dashboard for staff to manage content independently

---

## Key Features

### Public Website

- Home page with mission and featured content
- About page
- Exhibitions archive
- Events and workshops listing
- Craftsmen directory
- Shop with product detail pages
- Contact page
- Legal pages

### Shop Categories

- **Premium Pieces**  
  Serious artworks, large installations, and unique craft pieces for collectors, interior designers, and corporate buyers  
  **Price range:** HK$5,000 – 50,000+

- **Accessible Pieces**  
  Handmade accessories, small decorations, and craft kits for the general public, tourists, and supporters  
  **Price range:** HK$100 – 1,000

### Admin Dashboard

- Secure staff login
- Manage products
- Manage categories
- Manage exhibitions
- Manage events
- Manage craftsmen
- Manage orders/inquiries
- Upload and update content without relying on external vendors

---

## Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
- **Backend / Database:** Supabase
- **Authentication:** Supabase Auth
- **Storage:** Supabase Storage
- **Payments:** Stripe (optional / future phase)
- **Deployment:** Vercel

---

## Project Structure

```bash
src/
├── app/
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── exhibitions/
│   │   ├── events/
│   │   ├── craftsmen/
│   │   ├── shop/
│   │   ├── press/
│   │   └── legal/
│   ├── admin/
│   │   ├── login/page.tsx
│   │   ├── page.tsx
│   │   ├── products/
│   │   ├── categories/
│   │   ├── orders/
│   │   ├── exhibitions/
│   │   ├── events/
│   │   ├── craftsmen/
│   │   ├── media/
│   │   └── settings/
│   └── api/
├── components/
├── lib/
├── actions/
├── types/
└── middleware.ts
```

---

## Routing

### Public Routes

- `/`
- `/about`
- `/contact`
- `/exhibitions`
- `/exhibitions/[slug]`
- `/events`
- `/events/[slug]`
- `/craftsmen`
- `/craftsmen/[slug]`
- `/shop`
- `/shop/products/[slug]`
- `/shop/categories/[slug]`
- `/press`
- `/press/[slug]`
- `/legal/privacy-policy`
- `/legal/terms`
- `/legal/refund-returns`

### Admin Routes

- `/admin/login`
- `/admin`
- `/admin/products`
- `/admin/products/new`
- `/admin/products/[id]/edit`
- `/admin/categories`
- `/admin/orders`
- `/admin/exhibitions`
- `/admin/events`
- `/admin/craftsmen`
- `/admin/press`
- `/admin/media`
- `/admin/settings`

---

## Content Types

- `profiles`
- `products`
- `categories`
- `exhibitions`
- `events`
- `craftsmen`
- `press_articles`
- `orders`

---

## Authentication and Access Control

The admin dashboard is protected using Supabase Auth.

- unauthenticated users are redirected to `/admin/login`
- only users with `admin` or `staff` roles can access admin routes
- role checks should be enforced in both middleware and server-side logic

---

## Setup

### 1. Install dependencies

```bash
bun install
```

### 2. Create environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_SITE_URL=http://localhost:3000

STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
```

### 3. Run the development server

```bash
bun dev
```

---

## MVP Priorities

### Phase 1

- public site pages
- admin login
- product/category CRUD
- exhibitions CRUD
- events CRUD
- craftsmen CRUD

### Phase 2

- order management
- Stripe checkout
- press/media management
- workshop registration
- donation support

### Future Features

- 3D exhibition previews
- digital collector inquiries
- auction functionality
- AI-generated content support
- multilingual content management

---

## Goal of the Prototype

This prototype is not just a website redesign. It is a digital infrastructure concept for preservation, storytelling, and sustainability, helping Crafts on Peel extend the life of every exhibition, reduce staff workload, and connect traditional craftsmanship with wider and younger audiences.
