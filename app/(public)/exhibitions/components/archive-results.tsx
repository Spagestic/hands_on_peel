"use client";

import { ArchivePosterCard } from "./archive-poster-card";
import type { PastExhibition } from "./exhibition-archive-browser";

export function ArchiveResults({
  items,
  onLoadMore,
  hasMore,
}: {
  items: PastExhibition[];
  onLoadMore: () => void;
  hasMore: boolean;
}) {
  return (
    <>
      {items.length > 0 ? (
        <div className="grid grid-cols-1 content-start items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 xl:gap-y-10">
          {items.map((item) => (
            <ArchivePosterCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-foreground/15 px-6 py-14 text-center">
          <p className="text-sm font-mono uppercase tracking-[0.22em] text-muted-foreground">
            No exhibitions found
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
            Load more exhibitions
          </button>
        </div>
      ) : null}
    </>
  );
}
