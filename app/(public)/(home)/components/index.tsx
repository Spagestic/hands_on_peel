import { CurrentExhibitionSection } from "./current-exhibition-section";
import { FeaturedArtisanSection } from "./featured-artisan-section";
import { WhyCraftSection } from "./why-craft-section";
import { CraftInEverydayLifeSection } from "./craft-in-everyday-life-section";
import { ExhibitionArchiveSection } from "./exhibition-archive-section";
import { MeetCraftsmenSection } from "./meet-craftsmen-section";
import { EventsSupportSection } from "./events-support-section";
import { NewsletterSection } from "./newsletter-section";

export default function HomeSections() {
  return (
    <div>
      <CurrentExhibitionSection />
      <FeaturedArtisanSection />
      <WhyCraftSection />
      <CraftInEverydayLifeSection />
      <ExhibitionArchiveSection />
      <MeetCraftsmenSection />
      <EventsSupportSection />
      <NewsletterSection />
    </div>
  );
}
