import Link from "next/link";
import {
  containerClass,
  sectionClass,
  SectionHeading,
} from "@/components/shared";
import type { ShopProduct } from "../../../utils";

export function ProductArtisanPanel({ product }: { product: ShopProduct }) {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow="About the artisan"
          title={product.artisan}
          description="A featured maker from the Crafts on Peel network, bridging traditional technique with contemporary interpretation."
        />

        <article className="surface-card flex flex-col gap-5 p-6 sm:p-8">
          <p className="text-sm leading-7 text-foreground/80">
            This piece reflects the artisan’s ongoing dialogue between hand
            skill, local material memory, and practical use. Through
            exhibitions, workshops, and collaborative programmes, Crafts on Peel
            helps keep this practice visible across generations.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/craftsmen"
              className="inline-flex items-center border border-foreground/15 px-5 py-3 text-xs font-mono uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-muted"
            >
              Explore craftsmen
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center border border-foreground/15 px-5 py-3 text-xs font-mono uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-muted"
            >
              Join a workshop
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
