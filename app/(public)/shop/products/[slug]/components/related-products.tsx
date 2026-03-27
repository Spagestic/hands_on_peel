import {
  containerClass,
  sectionClass,
  SectionHeading,
} from "../../../../(home)/components/shared";
import { ShopProductCard } from "../../../components/shop-product-card";
import type { ShopProduct } from "../../../utils";

export function RelatedProducts({ items }: { items: ShopProduct[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Related products"
          title="You may also like"
          description="Continue exploring objects connected by category, collection tier, and craft process."
        />

        <div className="grid grid-cols-1 content-start items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 xl:gap-y-10">
          {items.map((item) => (
            <ShopProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
