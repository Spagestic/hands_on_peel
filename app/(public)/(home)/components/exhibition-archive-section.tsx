import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { exhibitionArchive } from "./data";
import {
  containerClass,
  ctaClass,
  sectionClass,
  SectionHeading,
} from "./shared";
import { SectionCard } from "./section-card";

export function ExhibitionArchiveSection() {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Exhibition archive"
            title="A living record of past shows"
            description="This section should feel like a restrained archive wall: image, title, year, and a clear path into the detail page."
          />
          <Link
            href="/exhibitions"
            className="hidden shrink-0 items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            Browse all exhibitions
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {exhibitionArchive.map((item) => (
            <SectionCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link href="/exhibitions" className={ctaClass}>
            <span>Browse all exhibitions</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
