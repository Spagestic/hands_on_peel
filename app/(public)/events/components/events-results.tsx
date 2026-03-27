"use client";

import type { ArchiveEvent } from "./events-archive-browser";

export function EventsResults({
  items,
  onLoadMore,
  hasMore,
}: {
  items: ArchiveEvent[];
  onLoadMore: () => void;
  hasMore: boolean;
}) {
  return (
    <>
      {items.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((event) => (
            <article
              key={event.id}
              className="flex h-full flex-col border border-foreground/10 bg-background p-5"
            >
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                {event.categoryLabel}
              </p>
              <h2 className="mt-3 line-clamp-2 text-xl font-medium tracking-tight text-foreground">
                {event.title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {event.dateLabel}
                {event.timeLabel ? ` · ${event.timeLabel}` : ""}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {event.locationLabel}
              </p>
            </article>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-foreground/15 px-6 py-14 text-center">
          <p className="text-sm font-mono uppercase tracking-[0.22em] text-muted-foreground">
            No events found
          </p>
          <p className="mt-4 text-sm leading-7 text-foreground/70">
            Try adjusting the search term or clearing some filters.
          </p>
        </div>
      )}

      {hasMore ? (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={onLoadMore}
            className="inline-flex items-center justify-center border border-foreground/10 px-6 py-3 text-xs font-mono uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-muted"
          >
            Load more events
          </button>
        </div>
      ) : null}
    </>
  );
}
