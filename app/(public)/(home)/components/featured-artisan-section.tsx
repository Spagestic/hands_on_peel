import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredArtisan } from "./data";
import {
  ctaClass,
  containerClass,
  eyebrowClass,
  sectionClass,
  ImageFrame,
} from "./shared";

export function FeaturedArtisanSection() {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <article className="space-y-6 border border-foreground/10 bg-muted/30 p-6 sm:p-8">
          <div className="space-y-4">
            <p className={eyebrowClass}>Featured artisan</p>
            <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {featuredArtisan.name}
            </h2>
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-muted-foreground">
              {featuredArtisan.craft}
            </p>
          </div>

          <ImageFrame
            src={featuredArtisan.image}
            alt={featuredArtisan.name}
            className="aspect-4/5"
          />

          <blockquote>
            <p className="text-lg leading-8 text-foreground/80">
              “{featuredArtisan.quote}”
            </p>
          </blockquote>

          <Link href={featuredArtisan.href} className={ctaClass}>
            <span>Read story</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      </div>
    </section>
  );
}
