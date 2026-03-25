import Image from "next/image";

export const sectionClass =
  "border-t border-foreground/10 bg-background px-4 sm:px-6 lg:px-8 py-20 md:py-24";
export const containerClass = "mx-auto max-w-7xl";
export const eyebrowClass =
  "text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground";
export const titleClass =
  "text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground";
export const bodyClass = "text-base sm:text-lg leading-8 text-foreground/80";
export const ctaClass =
  "inline-flex items-center justify-center gap-2 border border-foreground/15 px-5 py-3 text-xs font-mono uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-3xl space-y-4">
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2 className={titleClass}>{title}</h2>
      <p className={bodyClass}>{description}</p>
    </div>
  );
}

export function ImageFrame({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src?: string | null;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const imageSrc = src?.trim();

  return (
    <div
      className={`relative overflow-hidden border border-foreground/10 bg-muted ${className}`}
      role={imageSrc ? undefined : "img"}
      aria-label={imageSrc ? undefined : alt}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes={sizes}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-foreground/5 via-transparent to-foreground/5 p-6 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground/70">
            Image unavailable
          </span>
        </div>
      )}
    </div>
  );
}
