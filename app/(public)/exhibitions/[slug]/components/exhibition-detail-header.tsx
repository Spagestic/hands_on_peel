import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ExhibitionDetailModel } from "../../utils";
import { containerClass, ImageFrame } from "@/components/shared";
import { Badge } from "@/components/ui/badge";

export function ExhibitionDetailHeader({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  return (
    <section className="border-t border-foreground/10 bg-background px-4 sm:px-6 lg:px-8">
      <div className={containerClass}>
        <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
          <div className="flex flex-wrap gap-2">
            {[detail.statusLabel, detail.locationLabel, detail.yearLabel].map(
              (tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-none border-foreground/25 bg-background/80 text-[0.6875rem] font-mono uppercase tracking-[0.16em] text-foreground/85 sm:text-xs"
                >
                  {tag}
                </Badge>
              ),
            )}
          </div>

          <div className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] xl:gap-14">
            <div className="mx-auto w-full max-w-88 lg:mx-0 xl:max-w-none">
              <ImageFrame
                src={detail.posterImage}
                alt={`${detail.title} poster`}
                className="aspect-3/4 w-full border-0 bg-transparent"
                priority
                sizes="(min-width: 1280px) 384px, (min-width: 1024px) 352px, 75vw"
              />
            </div>

            <article className="flex min-w-0 flex-col gap-4 lg:gap-5">
              <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                {detail.title}
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-foreground sm:text-xl sm:leading-9">
                {detail.summary}
              </p>

              <div className="flex flex-col gap-1 text-sm font-mono uppercase tracking-[0.18em] text-muted-foreground">
                <p>{detail.dateLabel}</p>
                <p>{detail.locationLabel}</p>
              </div>

              <p className="max-w-3xl text-base leading-8 text-foreground/88">
                {detail.overview}
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                {detail.brochureHref ? (
                  <Link
                    href={"#brochure"}
                    className="inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-2.5 text-xs font-mono uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground/90"
                  >
                    <span>View brochure</span>
                    <ArrowRight className="size-4" />
                  </Link>
                ) : null}

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-foreground/25 bg-background px-5 py-2.5 text-xs font-mono uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-muted"
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
