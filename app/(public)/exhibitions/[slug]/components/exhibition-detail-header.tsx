import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ExhibitionDetailModel } from "../../utils";
import { containerClass, ImageFrame, sectionClass } from "@/components/shared";
import { Badge } from "@/components/ui/badge";

export function ExhibitionDetailHeader({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <div className="bg-card/30 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap gap-2">
            {[detail.statusLabel, detail.locationLabel, detail.yearLabel].map(
              (tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-none tracking-[0.18em]"
                >
                  {tag}
                </Badge>
              ),
            )}
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-start lg:gap-14">
            <div className="mx-auto w-full max-w-xs lg:mx-0">
              <ImageFrame
                src={detail.posterImage}
                alt={`${detail.title} poster`}
                className="aspect-3/4 w-full"
                priority
                sizes="(min-width: 1024px) 320px, 75vw"
              />
            </div>

            <article className="flex flex-col gap-5">
              <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {detail.title}
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-foreground/90">
                {detail.summary}
              </p>

              <div className="text-sm font-mono uppercase tracking-[0.18em] text-muted-foreground">
                <p>{detail.dateLabel}</p>
                <p className="mt-1">{detail.locationLabel}</p>
              </div>

              <p className="max-w-3xl text-sm leading-7 text-foreground/80 sm:text-base">
                {detail.overview}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {detail.brochureHref ? (
                  <Link
                    href={detail.brochureHref}
                    className="inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-2.5 text-xs font-mono uppercase tracking-[0.22em] text-background transition-colors hover:bg-foreground/90"
                  >
                    <span>Download brochure</span>
                    <ArrowRight className="size-4" />
                  </Link>
                ) : null}

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-foreground/20 px-5 py-2.5 text-xs font-mono uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-muted"
                >
                  <span>Plan a visit</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
