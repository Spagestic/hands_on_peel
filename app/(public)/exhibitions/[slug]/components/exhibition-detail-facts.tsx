import type { ExhibitionDetailModel } from "../../utils";
import { containerClass, exhibitionSectionClass } from "@/components/shared";

export function ExhibitionDetailFacts({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  return (
    <section className={exhibitionSectionClass}>
      <div className={containerClass}>
        <div className="surface-panel border-foreground/12 p-6 sm:p-8 lg:p-10">
          <p className="exhibition-eyebrow border-b border-foreground/10 pb-2.5">
            Exhibition details
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-foreground/85">
            Quick reference for dates, venue context, and archive classification.
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8 lg:grid-cols-3 lg:gap-y-10">
            {detail.detailPairs.map((pair) => (
              <div
                key={`${pair.label}-${pair.value}`}
                className="rounded-sm border border-foreground/12 bg-background/60 px-4 py-4 sm:px-5 sm:py-5"
              >
                <dt className="text-[0.6875rem] font-mono uppercase tracking-[0.16em] text-foreground/60 sm:text-xs">
                  {pair.label}
                </dt>
                <dd className="mt-3 text-base font-medium leading-7 text-foreground sm:text-[1.0625rem] sm:leading-8">
                  {pair.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
