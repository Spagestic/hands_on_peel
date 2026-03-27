import { shopCategories } from "@/data/shop-categories";
import { shopProducts, type RawShopProduct } from "@/data/shop-products";

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

export function getAllShopProducts() {
  return normaliseShopProducts(shopProducts);
}

export function getShopProductBySlug(slug: string) {
  return getAllShopProducts().find((item) => item.slug === slug);
}

export function getRelatedShopProducts({
  currentSlug,
  limit = 4,
}: {
  currentSlug: string;
  limit?: number;
}) {
  const products = getAllShopProducts();
  const current = products.find((item) => item.slug === currentSlug);

  if (!current) {
    return [];
  }

  const related = products
    .filter((item) => item.slug !== current.slug)
    .sort((a, b) => {
      const aCategoryScore = a.categorySlug === current.categorySlug ? 2 : 0;
      const bCategoryScore = b.categorySlug === current.categorySlug ? 2 : 0;
      const aTierScore = a.tier === current.tier ? 1 : 0;
      const bTierScore = b.tier === current.tier ? 1 : 0;
      const aScore = aCategoryScore + aTierScore;
      const bScore = bCategoryScore + bTierScore;

      if (aScore !== bScore) {
        return bScore - aScore;
      }

      return b.priceHkd - a.priceHkd || a.sortIndex - b.sortIndex;
    });

  return related.slice(0, limit);
}
