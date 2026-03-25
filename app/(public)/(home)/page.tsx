import React from "react";
import Hero from "./components/hero";
import { CurrentExhibitionSection } from "./components/current-exhibition-section";
import { FeaturedArtisanSection } from "./components/featured-artisan-section";
import { WhyCraftSection } from "./components/why-craft-section";
import { CraftInEverydayLifeSection } from "./components/craft-in-everyday-life-section";
import { ExhibitionArchiveSection } from "./components/exhibition-archive-section";
import { MeetCraftsmenSection } from "./components/meet-craftsmen-section";
import { EventsSupportSection } from "./components/events-support-section";
import { NewsletterSection } from "./components/newsletter-section";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CurrentExhibitionSection />
      <FeaturedArtisanSection />
      <WhyCraftSection />
      <CraftInEverydayLifeSection />
      <ExhibitionArchiveSection />
      <MeetCraftsmenSection />
      <EventsSupportSection />
      <NewsletterSection />
    </main>
  );
}
