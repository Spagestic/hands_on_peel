import {
  currentExhibition,
  exhibitionArchive,
} from "../(home)/components/data";
import {
  containerClass,
  sectionClass,
  SectionHeading,
} from "@/components/shared";
import { Suspense } from "react";
import { ExhibitionArchiveBrowser } from "./components/exhibition-archive-browser";
import { CurrentExhibitionSection } from "./components/current-exhibition-section";
import { normalisePastExhibitions, type RawArchiveItem } from "./utils";

export default function Page() {
  const pastExhibitions = normalisePastExhibitions(
    (exhibitionArchive as RawArchiveItem[]).filter(
      (item) => item.href !== currentExhibition.href,
    ),
  );

  return (
    <div className="bg-background">
      <section className={sectionClass}>
        <div className={containerClass}>
          <CurrentExhibitionSection />

          <SectionHeading
            eyebrow="Exhibition Archive"
            title="Explore our past exhibitions"
            description="Discover the rich tapestry of our exhibition history, showcasing a diverse range of themes, artists, and mediums that have graced our space over the years."
          />

          <Suspense
            fallback={
              <div className="mt-10 text-sm text-muted-foreground">
                Loading archive...
              </div>
            }
          >
            <div className="mt-10">
              <ExhibitionArchiveBrowser items={pastExhibitions} />
            </div>
          </Suspense>
        </div>
      </section>
    </div>
  );
}
