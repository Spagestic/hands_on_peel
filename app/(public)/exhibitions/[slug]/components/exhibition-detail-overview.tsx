import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ExhibitionDetailModel } from "../../utils";
import { containerClass, sectionClass, ImageFrame } from "@/components/shared";

export function ExhibitionDetailOverview({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
          <div className="mx-auto w-full max-w-xs lg:mx-0">
            <ImageFrame
              src={detail.posterImage}
              alt={`${detail.title} poster`}
              className="aspect-3/4 w-full"
              sizes="(min-width: 1024px) 320px, 70vw"
            />
          </div>

          <article className="flex flex-col gap-5">
            <div className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
              <p>{detail.dateLabel}</p>
              <p className="mt-1">{detail.locationLabel}</p>
            </div>

            <p className="text-lg leading-8 text-foreground/90">
              {detail.intro}
            </p>

            <div className="space-y-4">
              {detail.narrative.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-7 text-foreground/80"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="mt-3 grid gap-3 sm:grid-cols-2">
              {detail.infoPairs.map((pair) => (
                <div
                  key={`${pair.label}-${pair.value}`}
                  className="border-t pt-3"
                >
                  <dt className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                    {pair.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground/85">
                    {pair.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-foreground"
              >
                Plan a visit
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
