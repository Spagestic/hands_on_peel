import {
  containerClass,
  sectionClass,
  SectionHeading,
} from "../../../../(home)/components/shared";
import type { ShopProduct } from "../../../utils";

type ProductSpecsProps = {
  product: ShopProduct;
  categoryDescription?: string;
};

export function ProductSpecs({
  product,
  categoryDescription,
}: ProductSpecsProps) {
  const specs = [
    {
      label: "Material",
      value: product.material,
    },
    {
      label: "Collection",
      value: product.tierLabel,
    },
    {
      label: "Category",
      value: product.categoryLabel,
    },
    {
      label: "Price",
      value: product.priceLabel,
    },
  ];

  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow="About this piece"
          title="Crafted with context and care"
          description="Each object is selected for material integrity, cultural continuity, and everyday relevance in contemporary Hong Kong life."
        />

        <div className="grid gap-8 border border-foreground/10 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm leading-7 text-foreground/85">{product.blurb}</p>
            <p className="text-sm leading-7 text-foreground/75">
              {categoryDescription ??
                "This piece belongs to a curated category shaped by artisan process and long-term cultural value."}
            </p>
          </div>

          <dl className="flex flex-col gap-3">
            {specs.map((spec) => (
              <div key={spec.label} className="border-t border-foreground/10 pt-3">
                <dt className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  {spec.label}
                </dt>
                <dd className="mt-1 text-sm text-foreground/85">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
