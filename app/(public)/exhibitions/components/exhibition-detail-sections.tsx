import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArchivePosterCard } from "./archive-poster-card";
import type { ExhibitionDetailModel } from "../utils";
import {
  containerClass,
  sectionClass,
  SectionHeading,
  ImageFrame,
} from "../../(home)/components/shared";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

export function ExhibitionDetailOverview({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
          <div className="mx-auto w-full max-w-xs lg:mx-0">
            <ImageFrame
              src={detail.posterImage}
              alt={`${detail.title} poster`}
              className="aspect-3/4 w-full"
              sizes="(min-width: 1024px) 320px, 70vw"
            />
          </div>

          <article className="flex flex-col gap-5">
            <div className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
              <p>{detail.dateLabel}</p>
              <p className="mt-1">{detail.locationLabel}</p>
            </div>

            <p className="text-lg leading-8 text-foreground/90">{detail.intro}</p>

            <div className="space-y-4">
              {detail.narrative.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-foreground/80">
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="mt-3 grid gap-3 sm:grid-cols-2">
              {detail.infoPairs.map((pair) => (
                <div key={`${pair.label}-${pair.value}`} className="border-t pt-3">
                  <dt className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                    {pair.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground/85">{pair.value}</dd>
                </div>
              ))}
            </dl>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-foreground"
              >
                Plan a visit
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ExhibitionDetailWorks({
  detail,
}: {
  detail: ExhibitionDetailModel;
}) {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Featured works"
          title="Selected highlights"
          description="A curated sequence of images and details inspired by the original exhibition page structure."
        />

        <div className="mt-8 space-y-8">
          {detail.works.map((work, index) => (
            <article
              key={work.id}
              className="grid gap-6 border-t pt-6 sm:grid-cols-[120px_minmax(0,1fr)] md:grid-cols-[220px_minmax(0,1fr)]"
            >
              <div className="w-full max-w-[220px]">
                <ImageFrame
                  src={work.image}
                  alt={work.title}
                  className="aspect-3/4 w-full"
                  sizes="(min-width: 768px) 220px, 45vw"
                />
              </div>
              <div className="flex flex-col justify-between gap-3">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    Work {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl tracking-tight text-foreground">
                    {work.title}
                  </h3>
                </div>
                <p className="text-sm leading-7 text-foreground/80">{work.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

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
