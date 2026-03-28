import type { ExhibitionDetailModel } from "../../utils";
import {
  containerClass,
  sectionClass,
  SectionHeading,
  ImageFrame,
} from "@/components/shared";

export function ExhibitionDetailWorks({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Featured works"
          title="Selected highlights"
          description="A curated sequence of images and details inspired by the original exhibition page structure."
        />

        <div className="mt-8 space-y-8">
          {detail.works.map((work, index) => (
            <article
              key={work.id}
              className="grid gap-6 border-t pt-6 sm:grid-cols-[120px_minmax(0,1fr)] md:grid-cols-[220px_minmax(0,1fr)]"
            >
              <div className="w-full max-w-55">
                <ImageFrame
                  src={work.image}
                  alt={work.title}
                  className="aspect-3/4 w-full"
                  sizes="(min-width: 768px) 220px, 45vw"
                />
              </div>
              <div className="flex flex-col justify-between gap-3">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    Work {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl tracking-tight text-foreground">
                    {work.title}
                  </h3>
                </div>
                <p className="text-sm leading-7 text-foreground/80">
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
