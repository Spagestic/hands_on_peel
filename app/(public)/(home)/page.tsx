// app/(public)/(home)/page.tsx
import Hero from "./components/hero";
import { WhyCraftSection } from "./components/why-craft-section";
import { CraftInEverydayLifeSection } from "./components/craft-in-everyday-life-section";
import { ExhibitionArchiveSection } from "./components/exhibition-archive-section";
import { MeetCraftsmenSection } from "./components/meet-craftsmen-section";
import { EventsSupportSection } from "./components/events-support-section";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyCraftSection />
      <CraftInEverydayLifeSection />
      <ExhibitionArchiveSection />
      <MeetCraftsmenSection />
      <EventsSupportSection />
    </div>
  );
}
