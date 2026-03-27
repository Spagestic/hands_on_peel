"use client";
import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import eventData from "@/data/events.json";
import {
  containerClass,
  eyebrowClass,
  sectionClass,
  ImageFrame,
  ctaClass,
} from "./shared";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function EventsSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="programmes" className={sectionClass}>
      <div className={containerClass}>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="flex flex-col border border-foreground/10 bg-muted/30 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <p className={eyebrowClass}>Programmes and workshops</p>
            </div>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground">
              Workshops, talks, and collaborations
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-foreground/80">
              A short archive of recent public programmes, so the section stays
              honest when there are no upcoming dates to announce.
            </p>

            <ul className="mt-12 space-y-4">
              {eventData.craftsonpeel_events.slice(0, 4).map((event, index) => {
                const isActive = index === current;
                return (
                  <li
                    key={`${event.event_title}-${event.event_date}`}
                    onClick={() => api?.scrollTo(index)}
                    className={`cursor-pointer border-b border-foreground/10 pb-4 last:border-0 last:pb-0 transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-100"
                    }`}
                  >
                    <p
                      className={`text-base leading-7 line-clamp-1 ${isActive ? "text-foreground font-medium" : "text-foreground/80"}`}
                    >
                      {event.event_title}
                    </p>
                    <p className="mt-1 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                      {event.event_category} · {event.event_date}
                    </p>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 pt-6">
              <Link href="/events" className={ctaClass}>
                <span>View all events</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <div className="min-w-0">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                slidesToScroll: 1,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
            >
              <div className="mb-4 flex items-end justify-between gap-4">
                <p className={eyebrowClass}>Workshop images</p>
                <div className="flex items-center gap-2">
                  <CarouselPrevious className="static translate-x-0 translate-y-0" />
                  <CarouselNext className="static translate-x-0 translate-y-0" />
                </div>
              </div>

              <CarouselContent className="-ml-4">
                {eventData.craftsonpeel_events.slice(0, 3).map((event) => (
                  <CarouselItem
                    key={`${event.event_title}-${event.event_date}-slide`}
                    className="basis-full pl-4 md:basis-1/2 lg:basis-full"
                  >
                    <article className="flex h-full flex-col overflow-hidden border border-foreground/10 bg-background">
                      <ImageFrame
                        alt={event.event_title}
                        className="aspect-4/3"
                        sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
                      />
                      <div className="flex flex-1 flex-col p-5">
                        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                          {event.event_category}
                        </p>
                        <h3
                          className="mt-3 line-clamp-2 flex-1 text-xl font-medium tracking-tight text-foreground"
                          title={event.event_title}
                        >
                          {event.event_title}
                        </h3>
                        <p className="mt-2 text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
                          {event.event_date}
                        </p>
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
