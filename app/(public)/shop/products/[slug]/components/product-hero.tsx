import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  containerClass,
  ImageFrame,
  sectionClass,
} from "../../../../(home)/components/shared";
import type { ShopProduct } from "../../../utils";

export function ProductHero({ product }: { product: ShopProduct }) {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <div className="mb-8 flex items-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to shop
          </Link>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          <ImageFrame
            src={product.image}
            alt={product.title}
            className="aspect-4/3"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
          />

          <article className="flex flex-col gap-6">
            <p className="section-eyebrow">Product</p>
            <h1 className="section-title">{product.title}</h1>
            <p className="section-body max-w-2xl">{product.blurb}</p>

            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="rounded-none tracking-[0.14em]"
              >
                {product.tierLabel}
              </Badge>
              <Badge
                variant="outline"
                className="rounded-none tracking-[0.14em]"
              >
                {product.categoryLabel}
              </Badge>
            </div>

            <div className="flex flex-col gap-2 text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
              <p>{product.artisan}</p>
              <p>{product.material}</p>
            </div>

            <p className="text-lg font-medium tracking-tight text-foreground">
              {product.priceLabel}
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center border border-foreground/15 px-5 py-3 text-xs font-mono uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-muted"
              >
                Make an inquiry
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
