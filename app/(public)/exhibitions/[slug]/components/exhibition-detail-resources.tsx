import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type {
  ExhibitionBrochureItem,
  ExhibitionDetailModel,
} from "../../utils";
import {
  containerClass,
  exhibitionSectionClass,
  SectionHeading,
} from "@/components/shared";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function BrochureCarouselCard({ item }: { item: ExhibitionBrochureItem }) {
  const cover = (
    <div className="relative aspect-3/4 w-full overflow-hidden border border-dashed border-foreground/20 bg-muted/40">
      {item.isPlaceholder ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
          <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Placeholder
          </span>
          <span className="max-w-48 text-xs leading-snug text-foreground/60">
            Brochure cover will appear here
          </span>
        </div>
      ) : null}
    </div>
  );

  const caption = (
    <div className="mt-3">
      <h3 className="font-heading text-base font-medium leading-snug text-foreground line-clamp-2">
        {item.title}
      </h3>
      {item.subtitle ? (
        <p className="mt-1 text-sm font-mono uppercase tracking-[0.16em] text-muted-foreground">
          {item.subtitle}
        </p>
      ) : null}
    </div>
  );

  if (item.href) {
    return (
      <Link href={item.href} className="group block">
        <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
          {cover}
          {caption}
        </div>
      </Link>
    );
  }

  return (
    <article>
      {cover}
      {caption}
    </article>
  );
}

export function ExhibitionDetailResources({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  if (detail.brochures.length === 0) return null;

  return (
    <section className={exhibitionSectionClass} id="brochure">
      <div className={containerClass}>
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <div className="mb-4 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Exhibition materials"
              title="Brochures & resources"
              description="Printable PDFs and packs for this exhibition. Placeholder tiles will be replaced with real files and cover art."
              dense
            />
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-x-0 translate-y-0" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </div>

          <CarouselContent className="-ml-6">
            {detail.brochures.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <BrochureCarouselCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
