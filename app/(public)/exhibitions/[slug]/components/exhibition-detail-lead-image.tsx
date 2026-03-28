import type { ExhibitionDetailModel } from "../../utils";
import {
  containerClass,
  exhibitionSectionClass,
  ImageFrame,
  SectionHeading,
} from "@/components/shared";

export function ExhibitionDetailLeadImage({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  if (!detail.leadImage) return null;

  const hasSecondary = Boolean(detail.leadImageSecondary);

  return (
    <section className={exhibitionSectionClass}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Installation view"
          title="In the gallery"
          description="Installation photography situates the exhibition in the building — scale, light, and the relationship between works and visitors."
          dense
        />

        <div
          className={
            hasSecondary
              ? "grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-start lg:gap-6"
              : undefined
          }
        >
          <ImageFrame
            src={detail.leadImage}
            alt={`${detail.title} installation view`}
            className="aspect-16/8 w-full ring-1 ring-foreground/10 lg:aspect-auto lg:min-h-[min(28rem,50vh)]"
            sizes="100vw"
          />
          {hasSecondary ? (
            <ImageFrame
              src={detail.leadImageSecondary}
              alt={`${detail.title} installation detail`}
              className="aspect-4/3 w-full ring-1 ring-foreground/10 lg:aspect-3/4"
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
          ) : null}
        </div>

        <p className="mt-4 max-w-3xl text-base leading-8 text-foreground/80 sm:mt-5 sm:text-[1.0625rem] sm:leading-9">
          {detail.leadImageCaption}
        </p>
      </div>
    </section>
  );
}
