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
                <article className="group h-full overflow-hidden border border-foreground/10 bg-background">
                  <ImageFrame
                    src={craftsman.image}
                    alt={craftsman.name}
                    className="aspect-3/4"
                    sizes="(min-width: 1024px) 25vw, 100vw"
                  />
                  <div className="space-y-3 p-5">
                    <h3 className="text-lg font-medium text-foreground">
                      {craftsman.name}
                    </h3>
                    <p className="text-sm leading-7 text-foreground/70">
                      {craftsman.craft}
                    </p>
                    <Link
                      href={craftsman.href}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-foreground/70 transition-colors group-hover:text-foreground"
                    >
                      Profile
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
