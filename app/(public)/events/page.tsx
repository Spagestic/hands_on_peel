import eventData from "@/data/events.json";
import {
  containerClass,
  sectionClass,
  SectionHeading,
} from "@/components/shared";
import { Suspense } from "react";
import {
  EventsArchiveBrowser,
  type ArchiveEvent,
} from "./components/events-archive-browser";

type EventItem = {
  event_id?: string;
  event_title?: string;
  event_date?: string;
  event_time?: string;
  event_location?: string;
  event_category?: string;
  event_description?: string;
  registration_link?: string;
};

function extractYear(dateLabel = "") {
  const match = dateLabel.match(/\b(19|20)\d{2}\b/);
  return match ? Number(match[0]) : new Date().getFullYear();
}

const events = (eventData.craftsonpeel_events as EventItem[]).filter((event) =>
  Boolean(event.event_title),
);

const archivedEvents: ArchiveEvent[] = events.map((event, index) => ({
  id:
    event.event_id ??
    `${event.event_title ?? "event"}-${event.event_date ?? "unknown"}-${index}`,
  title: event.event_title ?? "Untitled Event",
  dateLabel: event.event_date ?? "Date TBC",
  timeLabel: event.event_time ?? "",
  locationLabel: event.event_location || "Crafts on Peel",
  categoryLabel: event.event_category || "Programme",
  description: event.event_description ?? "",
  year: extractYear(event.event_date),
  sortIndex: index,
}));

export default function Page() {
  return (
    <div className="bg-background">
      <section className={sectionClass}>
        <div className={containerClass}>
          <SectionHeading
            eyebrow="Event Archive"
            title="Explore our past programmes"
            description="Browse workshops, artist talks, and collaborations that have shaped our public programming over the years."
          />

          <Suspense
            fallback={
              <div className="mt-10 text-sm text-muted-foreground">
                Loading events archive...
              </div>
            }
          >
            <div className="mt-10">
              <EventsArchiveBrowser items={archivedEvents} />
            </div>
          </Suspense>
        </div>
      </section>
    </div>
  );
}
