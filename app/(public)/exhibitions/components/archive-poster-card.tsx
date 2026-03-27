"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { PastExhibition } from "./exhibition-archive-browser";

export function ArchivePosterCard({ item }: { item: PastExhibition }) {
  return (
    <article className="group relative overflow-hidden bg-background transition-transform duration-300 hover:-translate-y-0.5">
      <Link href={item.href} className="block relative w-full aspect-3/4">
        {item.poster ? (
          <Image
            src={item.poster}
            alt={item.title}
            width={600}
            height={800}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-102"
            sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          />
        ) : (
          <div className="w-full h-full bg-foreground/5" />
        )}

        {/* Dark overlay that fades in on hover */}
        <div className="absolute inset-0 bg-black/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />

        <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="mb-2 text-lg font-medium leading-snug text-white line-clamp-2">
            {item.title}
          </h3>

          <p className="mb-2 text-xs font-mono uppercase tracking-[0.2em] text-white/80">
            {item.locationLabel}
          </p>

          <p className="text-sm leading-7 text-white/90">{item.dateLabel}</p>

          <span className="mt-4 inline-flex items-center gap-2 pt-2 text-xs font-mono uppercase tracking-[0.22em] text-white/70 group-hover:text-white transition-colors duration-200">
            <span>View</span>
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </article>
  );
}
