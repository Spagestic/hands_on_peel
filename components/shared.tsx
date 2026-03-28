"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const sectionClass = "section-shell";
/** Tighter rhythm for long-form exhibition pages */
export const exhibitionSectionClass = "exhibition-section-shell";
export const containerClass = "section-container";
export const eyebrowClass = "section-eyebrow";
export const titleClass = "section-title";
export const bodyClass = "section-body";
export const ctaClass = "section-cta";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  dense,
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  /** Less margin below — use on exhibition subsections */
  dense?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-2.5 sm:gap-3",
        dense ? "mb-6 sm:mb-7" : "mb-10",
        className,
      )}
    >
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
  const isRemoteImage = Boolean(imageSrc && /^https?:\/\//.test(imageSrc));
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
          unoptimized={isRemoteImage}
          onError={() => setFailedSrc(imageSrc ?? null)}
        />
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-foreground/5 via-background to-foreground/10 p-4 sm:p-6"></div>
      )}
    </div>
  );
}
