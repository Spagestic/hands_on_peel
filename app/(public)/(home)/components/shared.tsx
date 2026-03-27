"use client";

import Image from "next/image";
import { useState } from "react";

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
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const showImage = Boolean(imageSrc) && failedSrc !== imageSrc;

  return (
    <div
      className={`relative overflow-hidden surface-frame ${className}`}
      role={showImage ? undefined : "img"}
      aria-label={showImage ? undefined : alt}
    >
      {showImage ? (
        <Image
          src={imageSrc!}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes={sizes}
          onError={() => setFailedSrc(imageSrc ?? null)}
        />
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-foreground/5 via-background to-foreground/10 p-4 sm:p-6"></div>
      )}
    </div>
  );
}
