"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageFrame } from "../../(home)/components/shared";
import type { PastExhibition } from "./exhibition-archive-browser";

export function ArchivePosterCard({ item }: { item: PastExhibition }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-foreground/10 bg-background transition-transform duration-300 hover:-translate-y-0.5">
      <Link href={item.href} className="block">
        <ImageFrame
          src={item.poster}
          alt={item.title}
          className="aspect-4/3"
          sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
        />

        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="min-h-14 text-lg font-medium leading-snug text-foreground line-clamp-2">
            {item.title}
          </h3>

          <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
            {item.locationLabel}
          </p>

          <p className="text-sm leading-7 text-foreground/75">
            {item.dateLabel}
          </p>

          <span className="mt-auto inline-flex items-center gap-2 pt-2 text-xs font-mono uppercase tracking-[0.22em] text-foreground/70 group-hover:text-foreground">
            <span>View</span>
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </article>
  );
}
