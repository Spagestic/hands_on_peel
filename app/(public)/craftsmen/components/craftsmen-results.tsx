"use client";

import { Badge } from "@/components/ui/badge";
import { ImageFrame } from "@/components/shared";

type CraftsmanResultItem = {
  name: string;
  image_url?: string;
  craft_categories?: { value: string }[];
};

export function CraftsmenResults({
  items,
  onLoadMore,
  hasMore,
}: {
  items: CraftsmanResultItem[];
  onLoadMore: () => void;
  hasMore: boolean;
}) {
  return (
    <>
      {items.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((craftsman) => (
            <article
              key={craftsman.name}
              className="overflow-hidden border border-foreground/10 bg-card/30"
            >
              <ImageFrame
                src={craftsman.image_url}
                alt={craftsman.name}
                className="aspect-3/4"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              />

              <div className="flex flex-col gap-4 p-5">
                <h2 className="text-xl font-medium tracking-tight text-foreground">
                  {craftsman.name}
                </h2>

                <div className="flex flex-wrap gap-2">
                  {(craftsman.craft_categories ?? []).map((item) => (
                    <Badge
                      key={`${craftsman.name}-${item.value}-category`}
                      variant="outline"
                      className="rounded-none tracking-[0.14em]"
                    >
                      {item.value}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-foreground/15 px-6 py-14 text-center">
          <p className="text-sm font-mono uppercase tracking-[0.22em] text-muted-foreground">
            No craftsmen found
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
            Load more craftsmen
          </button>
        </div>
      ) : null}
    </>
  );
}
