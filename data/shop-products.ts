import type { ShopTier } from "./shop-categories";

export type RawShopProduct = {
  slug: string;
  title: string;
  artisan: string;
  material: string;
  categorySlug: string;
  tier: ShopTier;
  priceHkd: number;
  image?: string;
  blurb: string;
};

export const shopProducts: RawShopProduct[] = [
  {
    slug: "harbour-bamboo-vessel",
    title: "Harbour Bamboo Vessel",
    artisan: "Lau Wing Sum",
    material: "Split bamboo · natural lacquer",
    categorySlug: "collector-editions",
    tier: "premium",
    priceHkd: 12800,
    image: "/shop/Harbour Bamboo Vessel.png",
    blurb:
      "A woven vessel inspired by harbour currents and market basket forms.",
  },
  {
    slug: "granite-rattan-floor-lamp",
    title: "Granite Rattan Floor Lamp",
    artisan: "Chan Yat Ming",
    material: "Rattan · stone-weight base",
    categorySlug: "statement-objects",
    tier: "premium",
    priceHkd: 18600,
    image: "/shop/Granite Rattan Floor Lamp.png",
    blurb:
      "A sculptural floor lamp combining basketry rhythm with architectural weight.",
  },
  {
    slug: "peel-street-wood-screen",
    title: "Peel Street Wood Screen",
    artisan: "Ng Ka On",
    material: "Reclaimed camphor wood",
    categorySlug: "statement-objects",
    tier: "premium",
    priceHkd: 24500,
    image: "/shop/Peel Street Wood Screen.png",
    blurb:
      "A foldable screen reinterpreting old lane shutters into a contemporary divider.",
  },
  {
    slug: "embroidered-ancestral-panel",
    title: "Embroidered Ancestral Panel",
    artisan: "Yuen Sau Ling",
    material: "Silk thread on linen",
    categorySlug: "collector-editions",
    tier: "premium",
    priceHkd: 9300,
    image: "/shop/Embroidered Ancestral Panel.png",
    blurb:
      "An heirloom-style wall textile stitching family symbols and temple motifs.",
  },
  {
    slug: "brass-incense-triptych",
    title: "Brass Incense Triptych",
    artisan: "Mak Wai Kit",
    material: "Hand-hammered brass",
    categorySlug: "collector-editions",
    tier: "premium",
    priceHkd: 15800,
    image: "/shop/Brass Incense Triptych.png",
    blurb:
      "A three-piece incense set balancing ceremonial form with modern simplicity.",
  },
  {
    slug: "market-tote-in-indigo",
    title: "Market Tote in Indigo",
    artisan: "Wong Hiu Yan",
    material: "Dyed cotton · bamboo handles",
    categorySlug: "wear-and-carry",
    tier: "accessible",
    priceHkd: 680,
    image: "/shop/Market Tote in Indigo.png",
    blurb:
      "A daily tote hand-dyed in deep indigo, made for produce runs and short trips.",
  },
  {
    slug: "tea-tray-with-rattan-band",
    title: "Tea Tray with Rattan Band",
    artisan: "Cheung Pui Lam",
    material: "Ash wood · rattan binding",
    categorySlug: "home-rituals",
    tier: "accessible",
    priceHkd: 980,
    image: "/shop/Tea Tray with Rattan Band.png",
    blurb: "A compact tea tray designed for slow pours and small gatherings.",
  },
  {
    slug: "lucky-knot-door-charm",
    title: "Lucky Knot Door Charm",
    artisan: "Leung Man Yi",
    material: "Cotton cord · brass bell",
    categorySlug: "home-rituals",
    tier: "accessible",
    priceHkd: 220,
    image: "/shop/Lucky Knot Door Charm.png",
    blurb:
      "A hand-knotted charm inspired by old shopfront amulets across Central lanes.",
  },
  {
    slug: "woven-lantern-mini",
    title: "Woven Lantern Mini",
    artisan: "Ip Chun Ho",
    material: "Bamboo strip · paper",
    categorySlug: "home-rituals",
    tier: "accessible",
    priceHkd: 560,
    image: "/shop/Woven Lantern Mini.png",
    blurb:
      "A tabletop lantern casting a warm pattern reminiscent of festival nights.",
  },
  // {
  //   slug: "stitch-and-story-pouch",
  //   title: "Stitch & Story Pouch",
  //   artisan: "Choi Sze Ting",
  //   material: "Canvas · hand embroidery",
  //   categorySlug: "wear-and-carry",
  //   tier: "accessible",
  //   priceHkd: 320,
  //   image: "/shop/Stitch and Story Pouch.png",
  //   blurb:
  //     "An everyday pouch featuring motifs adapted from archival exhibition graphics.",
  // },
  {
    slug: "bamboo-bending-starter-kit",
    title: "Bamboo Bending Starter Kit",
    artisan: "Crafts on Peel Studio",
    material: "Bamboo strips · guide booklet",
    categorySlug: "learning-kits",
    tier: "accessible",
    priceHkd: 390,
    image: "/shop/Bamboo Bending Starter Kit.png",
    blurb:
      "A beginner kit for learning steam-bending basics through guided mini projects.",
  },
  {
    slug: "heritage-pattern-stamp-kit",
    title: "Heritage Pattern Stamp Kit",
    artisan: "Crafts on Peel Studio",
    material: "Rubber block · pigment ink",
    categorySlug: "learning-kits",
    tier: "accessible",
    image: "/shop/Heritage Pattern Stamp Kit.png",
    priceHkd: 260,
    blurb:
      "A printmaking starter set to explore repeating motifs from local craft archives.",
  },
];
