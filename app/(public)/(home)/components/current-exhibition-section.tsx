import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { currentExhibition } from "./data";
import {
  bodyClass,
  containerClass,
  ctaClass,
  eyebrowClass,
  sectionClass,
  ImageFrame,
} from "./shared";

export function CurrentExhibitionSection() {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <article className="space-y-6">
            <div className="space-y-4">
              <p className={eyebrowClass}>Current exhibition</p>
              <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {currentExhibition.title}
              </h2>
              <p className="text-sm font-mono uppercase tracking-[0.22em] text-muted-foreground">
                {currentExhibition.subtitle}
              </p>
            </div>

            <ImageFrame
              src={currentExhibition.image}
              alt={currentExhibition.title}
              className="aspect-4/3"
              priority
            />

            <div className="max-w-2xl space-y-4">
              <p className={bodyClass}>{currentExhibition.summary}</p>
              <ul className="grid gap-2 text-sm text-foreground/70 sm:grid-cols-3">
                {currentExhibition.details.map((item) => (
                  <li
                    key={item}
                    className="border border-foreground/10 px-3 py-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={currentExhibition.href} className={ctaClass}>
                <span>View exhibition</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
