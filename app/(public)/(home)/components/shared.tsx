import Image from "next/image";

export const sectionClass = "section-shell";
export const containerClass = "section-container";
export const eyebrowClass = "section-eyebrow";
export const titleClass = "section-title";
export const bodyClass = "section-body";
export const ctaClass = "section-cta";

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
    <div className="mb-10 flex max-w-3xl flex-col gap-4">
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
      className={`relative overflow-hidden surface-frame ${className}`}
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
