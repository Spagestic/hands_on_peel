import { Suspense } from "react";
import {
  containerClass,
  sectionClass,
  SectionHeading,
} from "../(home)/components/shared";
import { shopProducts } from "@/data/shop-products";
import { normaliseShopProducts } from "./utils";
import { ShopBrowser } from "./components/shop-browser";

export default function Page() {
  const products = normaliseShopProducts(shopProducts);

  return (
    <div className="bg-background">
      <section className={sectionClass}>
        <div className={containerClass}>
          <SectionHeading
            eyebrow="Shop & Support"
            title="Bring craftsmanship into everyday life"
            description="Support artisans and the wider mission through curated craft objects: premium pieces for collectors and accessible pieces for daily rituals, gifting, and learning."
          />

          <div className="mb-12 grid gap-4 sm:grid-cols-2">
            <article className="surface-card p-6 sm:p-8">
              <p className="section-eyebrow">Premium pieces</p>
              <p className="mt-4 text-sm leading-7 text-foreground/80">
                Serious artworks and statement craft objects for collectors,
                interiors, and institutional buyers.
              </p>
              <p className="mt-3 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
                HK$5,000 – 50,000+
              </p>
            </article>

            <article className="surface-card p-6 sm:p-8">
              <p className="section-eyebrow">Accessible pieces</p>
              <p className="mt-4 text-sm leading-7 text-foreground/80">
                Handmade accessories, home objects, and starter kits for
                students, visitors, and first-time supporters.
              </p>
              <p className="mt-3 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
                HK$100 – 1,000
              </p>
            </article>
          </div>

          <Suspense
            fallback={
              <div className="mt-10 text-sm text-muted-foreground">
                Loading products...
              </div>
            }
          >
            <ShopBrowser items={products} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
