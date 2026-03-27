import eventData from "@/data/events.json";
import {
  containerClass,
  sectionClass,
  SectionHeading,
} from "../(home)/components/shared";

type EventItem = {
  event_title?: string;
  event_date?: string;
  event_time?: string;
  event_location?: string;
  event_category?: string;
  event_description?: string;
  registration_link?: string;
};

const events = (eventData.craftsonpeel_events as EventItem[]).filter((event) =>
  Boolean(event.event_title),
);

const [...archivedEvents] = events;

export default function Page() {
  return (
    <div className="bg-background">
      <section className={sectionClass}>
        <div className={containerClass}>
          <div className="mt-14">
            <SectionHeading
              eyebrow="Event Archive"
              title="Explore our past programmes"
              description="Browse workshops, artist talks, and collaborations that have shaped our public programming over the years."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {archivedEvents.map((event, index) => (
                <article
                  key={`${event.event_title}-${event.event_date}-${index}`}
                  className="flex h-full flex-col border border-foreground/10 bg-background p-5"
                >
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    {event.event_category ?? "Programme"}
                  </p>
                  <h2 className="mt-3 line-clamp-2 text-xl font-medium tracking-tight text-foreground">
                    {event.event_title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {event.event_date ?? "Date TBC"}
                    {event.event_time ? ` · ${event.event_time}` : ""}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {event.event_location ?? "Crafts on Peel"}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
