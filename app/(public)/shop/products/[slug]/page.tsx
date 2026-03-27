import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { shopCategories } from "@/data/shop-categories";
import {
  getAllShopProducts,
  getRelatedShopProducts,
  getShopProductBySlug,
} from "../../utils";
import { ProductArtisanPanel } from "./components/product-artisan-panel";
import { ProductHero } from "./components/product-hero";
import { ProductSpecs } from "./components/product-specs";
import { RelatedProducts } from "./components/related-products";

type ShopProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllShopProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ShopProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getShopProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Crafts on Peel",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.title} | Crafts on Peel`,
    description:
      product.blurb ??
      "Explore the story, material context, and artisan behind this curated craft object.",
  };
}

export default async function ShopProductDetailPage({
  params,
}: ShopProductDetailPageProps) {
  const { slug } = await params;
  const product = getShopProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = shopCategories.find((item) => item.slug === product.categorySlug);
  const relatedProducts = getRelatedShopProducts({ currentSlug: slug, limit: 4 });

  return (
    <div className="bg-background">
      <ProductHero product={product} />
      <ProductSpecs
        product={product}
        categoryDescription={category?.description}
      />
      <ProductArtisanPanel product={product} />
      <RelatedProducts items={relatedProducts} />
    </div>
  );
}
