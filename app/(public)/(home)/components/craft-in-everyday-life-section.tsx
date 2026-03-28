import { everydayCrafts } from "./data";
import {
  containerClass,
  sectionClass,
  SectionHeading,
  ImageFrame,
} from "@/components/shared";

export function CraftInEverydayLifeSection() {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Craft in everyday life"
          title="Where craft appears in the city"
          description="A four-card grid can keep the section flexible for CMS content later while staying visually calm and repeatable."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {everydayCrafts.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col overflow-hidden border border-foreground/10 bg-background"
            >
              <ImageFrame
                src={item.image}
                alt={item.title}
                className="aspect-4/3"
                sizes="(min-width: 1024px) 25vw, 100vw"
              />
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-foreground/70">
                  {item.subtitle}
                </p>
                {/* <Link
                  href="/about"
                  className="mt-auto inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-foreground/70 transition-colors group-hover:text-foreground"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
