import type { ExhibitionDetailModel } from "../../utils";
import { containerClass, exhibitionSectionClass } from "@/components/shared";

function TextBlock({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <article className="min-w-0">
      <h2 className="exhibition-eyebrow">{title}</h2>

      <div className="mt-3 space-y-4 sm:mt-4 sm:space-y-5">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-base leading-8 text-foreground/88 sm:text-[1.0625rem] sm:leading-9"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

export function ExhibitionDetailTexts({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  return (
    <section className={exhibitionSectionClass}>
      <div className={containerClass}>
        <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-14 lg:gap-x-16 xl:gap-x-20">
          <TextBlock title="Foreword" paragraphs={detail.foreword} />
          <TextBlock
            title="Exhibition summary"
            paragraphs={detail.exhibitionSummary}
          />
        </div>
      </div>
    </section>
  );
}
