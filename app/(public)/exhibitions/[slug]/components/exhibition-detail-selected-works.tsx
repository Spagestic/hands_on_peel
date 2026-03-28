import type { ExhibitionDetailModel } from "../../utils";
import {
  containerClass,
  exhibitionSectionClass,
  ImageFrame,
  SectionHeading,
} from "@/components/shared";

export function ExhibitionDetailSelectedWorks({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  if (detail.works.length === 0) return null;

  return (
    <section className={exhibitionSectionClass}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Selected works / craftsmen"
          title="Further exhibition highlights"
          description="Shown when the archive includes individual works or participating makers to explore in more depth."
          dense
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-7 xl:grid-cols-3">
          {detail.works.map((work) => (
            <article
              key={work.id}
              className="surface-panel space-y-4 border-foreground/12 p-4 sm:p-5"
            >
              <ImageFrame
                src={work.image}
                alt={work.title}
                className="aspect-4/3 w-full ring-1 ring-foreground/10"
                sizes="(min-width: 1280px) 24vw, (min-width: 768px) 42vw, 100vw"
              />
              <div>
                <h3 className="text-lg font-medium tracking-tight text-foreground">
                  {work.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-foreground/85">
                  {work.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
