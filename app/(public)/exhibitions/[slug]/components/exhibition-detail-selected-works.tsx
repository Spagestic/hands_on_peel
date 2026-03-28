import type { ExhibitionDetailModel } from "../../utils";
import {
  containerClass,
  ImageFrame,
  sectionClass,
  SectionHeading,
} from "@/components/shared";

export function ExhibitionDetailSelectedWorks({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  if (detail.works.length === 0) return null;

  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Selected works / craftsmen"
          title="Further exhibition highlights"
          description="This section is shown only when the archive includes enough supporting content to browse individual works or participants."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {detail.works.map((work) => (
            <article key={work.id} className="space-y-4">
              <ImageFrame
                src={work.image}
                alt={work.title}
                className="aspect-4/3 w-full"
                sizes="(min-width: 1280px) 24vw, (min-width: 768px) 42vw, 100vw"
              />
              <div>
                <h3 className="text-lg tracking-tight text-foreground">
                  {work.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-foreground/75">
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
