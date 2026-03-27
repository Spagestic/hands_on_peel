import { shopCategories } from "@/data/shop-categories";
import type { RawShopProduct } from "@/data/shop-products";

export type ShopProduct = {
  id: string;
  slug: string;
  href: string;
  title: string;
  artisan: string;
  material: string;
  categorySlug: string;
  categoryLabel: string;
  tier: "premium" | "accessible";
  tierLabel: string;
  priceHkd: number;
  priceLabel: string;
  image?: string;
  blurb: string;
  sortIndex: number;
};

const hkdFormatter = new Intl.NumberFormat("en-HK", {
  style: "currency",
  currency: "HKD",
  maximumFractionDigits: 0,
});

function toTierLabel(tier: "premium" | "accessible") {
  return tier === "premium" ? "Premium" : "Accessible";
}

export function normaliseShopProducts(items: RawShopProduct[]): ShopProduct[] {
  return items.map((item, index) => {
    const category = shopCategories.find(
      (candidate) => candidate.slug === item.categorySlug,
    );

    return {
      id: `${item.slug}-${index}`,
      slug: item.slug,
      href: `/shop/products/${item.slug}`,
      title: item.title,
      artisan: item.artisan,
      material: item.material,
      categorySlug: item.categorySlug,
      categoryLabel: category?.name ?? "Uncategorised",
      tier: item.tier,
      tierLabel: toTierLabel(item.tier),
      priceHkd: item.priceHkd,
      priceLabel: hkdFormatter.format(item.priceHkd),
      image: item.image,
      blurb: item.blurb,
      sortIndex: index,
    };
  });
}
