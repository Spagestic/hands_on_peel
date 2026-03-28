import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ExhibitionDetailModel } from "../../utils";
import {
  containerClass,
  ImageFrame,
  sectionClass,
  SectionHeading,
} from "@/components/shared";

export function ExhibitionDetailResources({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  if (detail.resources.length === 0 && !detail.brochureHref) return null;

  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Brochure / resources"
          title="Browse available exhibition assets"
          description="Browse selected archive visuals here, and download the full brochure when a dedicated file is available."
        />

        {detail.resources.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {detail.resources.map((resource) => (
              <article key={resource.id} className="space-y-4">
                <ImageFrame
                  src={resource.image}
                  alt={`${detail.title} ${resource.title}`}
                  className="aspect-4/3 w-full"
                  sizes="(min-width: 1280px) 24vw, (min-width: 768px) 42vw, 100vw"
                />
                <div>
                  <h3 className="text-lg tracking-tight text-foreground">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-foreground/75">
                    {resource.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        {detail.brochureHref ? (
          <div className="mt-8">
            <Link
              href={detail.brochureHref}
              className="inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-2.5 text-xs font-mono uppercase tracking-[0.22em] text-background transition-colors hover:bg-foreground/90"
            >
              <span>Download full brochure</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
