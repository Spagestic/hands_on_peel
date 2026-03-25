import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageFrame } from "./shared";

export function SectionCard({
  title,
  year,
  summary,
  href,
  image,
}: {
  title: string;
  year: string;
  summary: string;
  href: string;
  image: string;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-foreground/10 bg-background transition-transform duration-300 hover:-translate-y-0.5">
      <ImageFrame
        src={image}
        alt={title}
        className="aspect-4/3"
        sizes="(min-width: 1024px) 25vw, 100vw"
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-medium text-foreground">{title}</h3>
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          {year}
        </p>
        <p className="text-sm leading-7 text-foreground/70">{summary}</p>
        <div className="mt-auto pt-2">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-foreground/70 group-hover:text-foreground">
            View
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
      <Link href={href} aria-label={title} className="absolute inset-0" />
    </article>
  );
}
