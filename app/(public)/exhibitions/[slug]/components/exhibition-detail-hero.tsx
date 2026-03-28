import type { ExhibitionDetailModel } from "../../utils";
import { containerClass, sectionClass, ImageFrame } from "@/components/shared";

export function ExhibitionDetailHero({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <div className="mb-8">
          <p className="section-eyebrow">Exhibition</p>
          <h1 className="section-title mt-4">{detail.title}</h1>
          <p className="section-body mt-4 max-w-3xl">{detail.summary}</p>
        </div>

        <ImageFrame
          src={detail.heroImage}
          alt={`${detail.title} hero visual`}
          className="aspect-16/8 w-full"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
}
