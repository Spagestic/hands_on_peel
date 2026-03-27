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
  const exhibitionDetails = [
    { label: "Year", value: currentExhibition.year },
    { label: "Location", value: currentExhibition.location },
  ].filter((item) => item.value);

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
                {currentExhibition.dateLabel ?? currentExhibition.subtitle}
              </p>
            </div>

            <ImageFrame
              src={currentExhibition.poster ?? currentExhibition.image}
              alt={currentExhibition.title}
              className="aspect-4/3"
              priority
            />

            <div className="max-w-2xl space-y-4">
              <p className={bodyClass}>{currentExhibition.summary}</p>
              <ul className="grid gap-2 text-sm text-foreground/70 sm:grid-cols-3">
                {exhibitionDetails.map((item) => (
                  <li
                    key={item.label}
                    className="border border-foreground/10 px-3 py-2"
                  >
                    <span className="font-mono uppercase tracking-[0.2em] text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="mt-2 block">{item.value}</span>
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
