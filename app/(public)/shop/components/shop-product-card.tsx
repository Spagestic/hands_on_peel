"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ImageFrame } from "../../(home)/components/shared";
import type { ShopProduct } from "../utils";

export function ShopProductCard({ item }: { item: ShopProduct }) {
  return (
    <article className="group flex h-full flex-col border border-foreground/10 bg-background transition-transform duration-300 hover:-translate-y-0.5">
      <Link href={item.href} className="block">
        <div>
          <ImageFrame
            src={item.image}
            alt={item.title}
            className="aspect-4/3"
            sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          />

          <div className="flex flex-1 flex-col gap-4 p-5">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="rounded-none tracking-[0.14em]"
              >
                {item.tierLabel}
              </Badge>
              <Badge
                variant="outline"
                className="rounded-none tracking-[0.14em]"
              >
                {item.categoryLabel}
              </Badge>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="line-clamp-2 text-xl font-medium tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                {item.artisan}
              </p>
              <p className="text-sm leading-7 text-foreground/70">
                {item.material}
              </p>
              <p className="text-sm leading-7 text-foreground/80">
                {item.blurb}
              </p>
            </div>

            <div className="mt-auto flex items-center justify-between">
              <p className="text-sm font-mono uppercase tracking-[0.2em] text-foreground">
                {item.priceLabel}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
