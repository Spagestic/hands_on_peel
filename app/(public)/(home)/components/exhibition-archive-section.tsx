import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { exhibitionArchive } from "./data";
import { containerClass, sectionClass, SectionHeading } from "./shared";
import { SectionCard } from "./section-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
        </div>

        <ScrollArea className="w-full">
          <div className="flex w-max gap-6 pb-4">
            {exhibitionArchive.map((item) => (
              <div
                key={item.title}
                className="w-[18rem] shrink-0 sm:w-[20rem] xl:w-88"
              >
                <SectionCard {...item} />
              </div>
            ))}
            <Link
              href="/exhibitions"
              className="group flex w-[18rem] shrink-0 flex-col items-center justify-center gap-4 rounded-xl border border-dashed p-6 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground sm:w-[20rem] xl:w-88"
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
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
