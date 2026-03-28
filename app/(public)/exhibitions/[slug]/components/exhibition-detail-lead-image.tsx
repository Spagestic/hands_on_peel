import type { ExhibitionDetailModel } from "../../utils";
import {
  containerClass,
  ImageFrame,
  sectionClass,
  SectionHeading,
} from "@/components/shared";

export function ExhibitionDetailLeadImage({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  if (!detail.leadImage) return null;

  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Lead installation view"
          title="A closer look at the exhibition"
          description="A wide exhibition image that anchors the archive page with venue context and installation detail."
        />

        <ImageFrame
          src={detail.leadImage}
          alt={`${detail.title} installation view`}
          className="aspect-16/8 w-full"
          sizes="100vw"
        />

        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          {detail.leadImageCaption}
        </p>
      </div>
    </section>
  );
}
