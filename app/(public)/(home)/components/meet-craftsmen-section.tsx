import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { craftsmen } from "./data";
import {
  containerClass,
  sectionClass,
  SectionHeading,
  ImageFrame,
} from "./shared";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function MeetCraftsmenSection() {
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
              eyebrow="Meet the craftsmen"
              title="People behind the practice"
              description="A respectful directory benefits from strong portraits, short descriptors, and plenty of whitespace so every maker feels distinct."
            />
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0 translate-x-0" />
              <CarouselNext className="static translate-y-0 translate-x-0" />
            </div>
          </div>

          <CarouselContent className="-ml-6">
            {craftsmen.map((craftsman) => (
              <CarouselItem
                key={craftsman.name}
                className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Link
                  href={craftsman.href}
                  className="group block h-full overflow-hidden border border-foreground/10 bg-background transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <ImageFrame
                    src={craftsman.image}
                    alt={craftsman.name}
                    className="aspect-4/3"
                    sizes="(min-width: 1024px) 25vw, 100vw"
                  />
                  <div className="space-y-3 p-5">
                    <h3 className="text-lg font-medium text-foreground">
                      {craftsman.name}
                    </h3>
                    <p className="text-sm leading-7 text-foreground/70">
                      {craftsman.craft}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-foreground/70 transition-colors group-hover:text-foreground">
                      Profile
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
