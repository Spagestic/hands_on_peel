import type { ExhibitionDetailModel } from "../../utils";
import { containerClass, sectionClass } from "@/components/shared";

function TextCard({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <article className="bg-card/30 p-6 sm:p-8">
      <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </h2>

      <div className="mt-5 space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-7 text-foreground/80">
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
    <section className={sectionClass}>
      <div className={containerClass}>
        <div className="mb-8">
          <p className="section-eyebrow">Exhibition texts</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <TextCard title="Foreword" paragraphs={detail.foreword} />
          <TextCard
            title="Exhibition summary"
            paragraphs={detail.exhibitionSummary}
          />
        </div>
      </div>
    </section>
  );
}
