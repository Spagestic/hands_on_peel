import { ArchivePosterCard } from "../../components/archive-poster-card";
import type { ExhibitionDetailModel } from "../../utils";
import {
  containerClass,
  sectionClass,
  SectionHeading,
} from "@/components/shared";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ExhibitionDetailFeaturedCarousel({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  if (detail.featuredWorks.length === 0) return null;

  return (
    <section className={sectionClass}>
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
              eyebrow="Featured works"
              title="Explore related exhibitions"
              description="Continue browsing exhibitions connected by material, process, and cultural context."
            />
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0 translate-x-0" />
              <CarouselNext className="static translate-y-0 translate-x-0" />
            </div>
          </div>

          <CarouselContent className="-ml-6">
            {detail.featuredWorks.map((item) => (
              <CarouselItem
                key={item.href}
                className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <ArchivePosterCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
