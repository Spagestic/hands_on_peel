import type { ExhibitionDetailModel } from "../../utils";
import { containerClass, sectionClass } from "@/components/shared";

export function ExhibitionDetailFacts({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <div className="bg-card/30 p-6 sm:p-8 lg:p-10">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Exhibition details
          </p>

          <dl className="mt-8 grid gap-x-8 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
            {detail.detailPairs.map((pair) => (
              <div
                key={`${pair.label}-${pair.value}`}
                className="border-t border-border pt-4"
              >
                <dt className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  {pair.label}
                </dt>
                <dd className="mt-2 text-sm leading-7 text-foreground/85">
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
