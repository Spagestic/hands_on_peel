import { ArchivePosterCard } from "../../components/archive-poster-card";
import type { ExhibitionDetailModel } from "../../utils";
import { containerClass, sectionClass, SectionHeading } from "@/components/shared";

export function ExhibitionDetailRelatedExhibitions({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  if (detail.relatedExhibitions.length === 0) return null;

  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Related exhibitions"
          title="Continue browsing the archive"
          description="Continue browsing exhibitions connected by material, period, or context."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {detail.relatedExhibitions.slice(0, 3).map((item) => (
            <ArchivePosterCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
