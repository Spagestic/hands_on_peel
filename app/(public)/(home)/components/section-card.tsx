import Link from "next/link";
import { ImageFrame } from "./shared";

export function SectionCard({
  title,
  href,
  image,
}: {
  title: string;
  href: string;
  image: string;
}) {
  return (
    <article className="group relative h-full overflow-hidden border border-foreground/10 bg-background transition-transform duration-300 hover:-translate-y-0.5">
      <ImageFrame
        src={image}
        alt={title}
        className="aspect-3/4"
        sizes="(min-width: 1024px) 25vw, 100vw"
      />
      <Link href={href} aria-label={title} className="absolute inset-0" />
    </article>
  );
}
