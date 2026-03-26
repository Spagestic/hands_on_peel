import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { exhibitionArchive } from "./data";
import { containerClass, sectionClass, SectionHeading } from "./shared";
import { SectionCard } from "./section-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ExhibitionArchiveSection() {
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
          <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Exhibition archive"
              title="A living record of past shows"
              description="This section should feel like a restrained archive wall: image, title, year, and a clear path into the detail page."
            />
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0 translate-x-0" />
              <CarouselNext className="static translate-y-0 translate-x-0" />
            </div>
          </div>

          <CarouselContent className="-ml-6">
            {exhibitionArchive.map((item) => (
              <CarouselItem
                key={item.title}
                className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <SectionCard {...item} />
              </CarouselItem>
            ))}
            <CarouselItem className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <Link
                href="/exhibitions"
                className="group flex h-full min-h-100 flex-col items-center justify-center gap-4 rounded-xl border border-dashed p-6 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
              >
                <div className="rounded-full bg-muted p-4 transition-transform group-hover:scale-110 group-hover:bg-background">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <div className="text-center font-mono text-xs uppercase tracking-[0.2em]">
                  Browse all
                  <br />
                  exhibitions
                </div>
              </Link>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
