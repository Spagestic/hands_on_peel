import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { currentExhibition } from "../../(home)/components/data";
import { ImageFrame } from "@/components/shared";

export function CurrentExhibitionSection() {
  const exhibitionTags = ["Bamboo", "Embroidery", "Collaboration"];
  const exhibitionLocation = "11 Peel Street, Central, Hong Kong";
  const brochureHref =
    currentExhibition.href === "/"
      ? "/"
      : `${currentExhibition.href.replace(/\/$/, "")}/brochure`;

  return (
    <div className="mb-14 bg-card/30 p-6 sm:p-8 lg:mb-16 lg:p-12">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
        <div className="mx-auto w-full max-w-xs lg:mx-0">
          <ImageFrame
            src={currentExhibition.poster ?? currentExhibition.image}
            alt={`${currentExhibition.title} poster`}
            className="aspect-3/4"
            priority
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 280px, 75vw"
          />
        </div>

        <article className="flex flex-col gap-6">
          <p className="text-sm font-mono uppercase tracking-[0.22em] text-muted-foreground">
            Current exhibition
          </p>

          <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {currentExhibition.title}
          </h1>

          <div className="flex flex-col gap-1 text-sm font-mono uppercase tracking-[0.18em] text-muted-foreground">
            <p>{currentExhibition.dateLabel ?? currentExhibition.subtitle}</p>
            <p>{exhibitionLocation}</p>
          </div>

          <p className="max-w-3xl text-sm leading-7 text-foreground/80 sm:text-base">
            {currentExhibition.summary} This exhibition brings together makers
            and disciplines in a shared conversation on material, process, and
            contemporary cultural memory in Hong Kong.
          </p>

          <div className="flex flex-wrap gap-2">
            {exhibitionTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="tracking-[0.14em] rounded-none"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={currentExhibition.href}
              className="inline-flex items-center gap-2 border border-foreground/20 bg-foreground px-5 py-2.5 text-xs font-mono uppercase tracking-[0.22em] text-background transition-colors hover:bg-foreground/90"
            >
              <span>View exhibition</span>
              <ArrowRight className="size-4" data-icon="inline-end" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center border border-foreground/20 px-5 py-2.5 text-xs font-mono uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-muted"
            >
              Plan a visit
            </Link>
          </div>

          <div className="pt-3">
            <Link
              href={brochureHref}
              className="inline-flex items-center gap-2 text-sm text-foreground/80 underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-foreground"
            >
              <span>Download brochure</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
