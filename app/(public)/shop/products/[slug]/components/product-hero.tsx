import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { containerClass, ImageFrame } from "@/components/shared";
import type { ShopProduct } from "../../../utils";

export function ProductHero({ product }: { product: ShopProduct }) {
  return (
    <>
      <section>
        <div className={containerClass}>
          <Link
            href="/shop"
            className="flex w-full items-center gap-3 py-4 text-xs font-mono uppercase tracking-[0.22em] text-foreground transition-colors hover:text-foreground/70"
          >
            <ArrowLeft className="size-4" />
            <span>Back to shop</span>
          </Link>
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-background">
        <div className={containerClass}>
          <div className="grid items-start gap-10 py-6 sm:py-8 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:gap-14 lg:py-10">
            <ImageFrame
              src={product.image}
              alt={product.title}
              className="aspect-5/4 w-full"
              priority
              sizes="(min-width: 1024px) 28rem, 100vw"
            />

            <article className="flex min-w-0 flex-col gap-6">
              <p className="section-eyebrow">Product</p>
              <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {product.title}
              </h1>
              <p className="text-sm leading-7 text-foreground/80">
                {product.blurb}
              </p>

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

              <div className="">
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
    </>
  );
}
