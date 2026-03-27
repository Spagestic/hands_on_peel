export type ShopTier = "premium" | "accessible";

export type ShopCategory = {
  slug: string;
  name: string;
  tier: ShopTier;
  description: string;
};

export const shopCategories: ShopCategory[] = [
  {
    slug: "collector-editions",
    name: "Collector Editions",
    tier: "premium",
    description:
      "Unique and limited works for collectors, interior projects, and institutional buyers.",
  },
  {
    slug: "statement-objects",
    name: "Statement Objects",
    tier: "premium",
    description:
      "Large-format pieces that bring traditional craft language into contemporary spaces.",
  },
  {
    slug: "home-rituals",
    name: "Home Rituals",
    tier: "accessible",
    description:
      "Everyday objects and small decor rooted in craft process and material memory.",
  },
  {
    slug: "wear-and-carry",
    name: "Wear & Carry",
    tier: "accessible",
    description:
      "Handmade accessories and practical pieces for daily use and gifting.",
  },
  {
    slug: "learning-kits",
    name: "Learning Kits",
    tier: "accessible",
    description:
      "Entry-level craft kits designed for families, students, and workshop participants.",
  },
];
