import {
  currentExhibition,
  exhibitionArchive,
} from "../(home)/components/data";
import {
  containerClass,
  sectionClass,
  SectionHeading,
} from "../(home)/components/shared";
import { ExhibitionArchiveBrowser } from "./components/exhibition-archive-browser";
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
          <SectionHeading
            eyebrow="Exhibition Archive"
            title="Explore our past exhibitions"
            description="Discover the rich tapestry of our exhibition history, showcasing a diverse range of themes, artists, and mediums that have graced our space over the years."
          />

          <div className="mt-10">
            <ExhibitionArchiveBrowser items={pastExhibitions} />
          </div>
        </div>
      </section>
    </div>
  );
}
