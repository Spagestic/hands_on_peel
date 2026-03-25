import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { craftsmen } from "./data";
import {
  containerClass,
  sectionClass,
  SectionHeading,
  ImageFrame,
} from "./shared";

export function MeetCraftsmenSection() {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Meet the craftsmen"
          title="People behind the practice"
          description="A respectful directory benefits from strong portraits, short descriptors, and plenty of whitespace so every maker feels distinct."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {craftsmen.map((craftsman) => (
            <article
              key={craftsman.name}
              className="group overflow-hidden border border-foreground/10 bg-background"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
