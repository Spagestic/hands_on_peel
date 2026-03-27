import { existsSync } from "node:fs";
import { join } from "node:path";
import { currentExhibition, exhibitionArchive } from "../(home)/components/data";
import type { PastExhibition } from "./components/exhibition-archive-browser";

export type CurrentExhibitionWithExtras = typeof currentExhibition & {
  poster?: string;
  brochureHref?: string;
};

export type RawArchiveItem = {
  title: string;
  href: string;
  image?: string;
  poster?: string;
  meta?: string;
  subtitle?: string;
  year?: number;
  location?: string;
  dateLabel?: string;
  status?: string;
  summary?: string;
};

export type ExhibitionRecord = RawArchiveItem & {
  year?: number;
  location?: string;
  dateLabel?: string;
  summary?: string;
  details?: string[];
};

export type ExhibitionWork = {
  id: string;
  title: string;
  image?: string;
  caption: string;
};

export type ExhibitionDetailModel = {
  slug: string;
  title: string;
  href: string;
  heroImage?: string;
  posterImage?: string;
  dateLabel: string;
  locationLabel: string;
  yearLabel: string;
  summary: string;
  intro: string;
  narrative: string[];
  infoPairs: { label: string; value: string }[];
  works: ExhibitionWork[];
  featuredWorks: PastExhibition[];
};

export function parseDetailPairs(details: string[] = []) {
  return details
    .map((item) => {
      const [label, ...rest] = item.split(":");
      if (!label || rest.length === 0) return null;

      return {
        label: label.trim(),
        value: rest.join(":").trim(),
      };
    })
    .filter(Boolean) as { label: string; value: string }[];
}

export function extractYear(text = "") {
  const match = text.match(/\b(19|20)\d{2}\b/);
  return match ? Number(match[0]) : undefined;
}

export function extractLocation(text = "") {
  const parts = text
    .split(/·|\||,/)
    .map((part) => part.trim())
    .filter(Boolean)
    .filter((part) => !/\b(19|20)\d{2}\b/.test(part));

  return parts[0] ?? "Hong Kong";
}

export function resolvePosterSource(src?: string) {
  const value = src?.trim();

  if (!value) return undefined;
  if (!value.startsWith("/")) return value;

  const localPath = join(process.cwd(), "public", value.replace(/^\/+/, ""));
  return existsSync(localPath) ? value : undefined;
}

export function normalisePastExhibitions(
  items: RawArchiveItem[],
): PastExhibition[] {
  return items.map((item, index) => {
    const metaText = [item.meta, item.subtitle].filter(Boolean).join(" · ");
    const year = item.year ?? extractYear(metaText) ?? 2024;
    const locationLabel = item.location ?? extractLocation(metaText);

    return {
      id: item.href || `${item.title}-${index}`,
      title: item.title,
      href: item.href,
      poster: resolvePosterSource(item.poster ?? item.image),
      year,
      locationLabel,
      dateLabel: (item.dateLabel ?? item.subtitle ?? metaText) || `${year}`,
      sortIndex: index,
    };
  });
}

export function getExhibitionSlugFromHref(href = "") {
  const cleaned = href.trim().replace(/\/+$/, "");
  if (!cleaned) return "";

  const parts = cleaned.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? "";
}

export function getAllExhibitions(): ExhibitionRecord[] {
  const merged = [
    currentExhibition as ExhibitionRecord,
    ...(exhibitionArchive as ExhibitionRecord[]),
  ];

  const dedupedByHref = new Map<string, ExhibitionRecord>();
  for (const exhibition of merged) {
    if (!exhibition?.href) continue;
    dedupedByHref.set(exhibition.href, exhibition);
  }

  return [...dedupedByHref.values()];
}

export function getExhibitionBySlug(slug: string) {
  return getAllExhibitions().find(
    (item) => getExhibitionSlugFromHref(item.href) === slug,
  );
}

function fallbackSummary(exhibition: ExhibitionRecord) {
  return (
    exhibition.summary ??
    `${exhibition.title} brings together material practice, storytelling, and cultural memory through a curated selection of works.`
  );
}

function getExhibitionMedia(exhibition: ExhibitionRecord) {
  const primary = resolvePosterSource(exhibition.poster ?? exhibition.image);
  const secondary = resolvePosterSource(exhibition.image ?? exhibition.poster);
  const media = [primary, secondary].filter(Boolean) as string[];

  return [...new Set(media)];
}

function buildNarrative(exhibition: ExhibitionRecord, summary: string) {
  const place = exhibition.location ?? "Hong Kong";
  const dateLabel = exhibition.dateLabel ?? "Dates to be announced";

  return [
    summary,
    `${exhibition.title} situates contemporary making in dialogue with heritage techniques and local narratives rooted in ${place}.`,
    `Presented ${dateLabel}, the exhibition extends an invitation to look closely at process, materiality, and the social life of crafted objects.`,
  ];
}

function buildFallbackWorks(exhibition: ExhibitionRecord): ExhibitionWork[] {
  const media = getExhibitionMedia(exhibition);
  const source = media.length > 0 ? media : [undefined];

  return source.map((image, index) => ({
    id: `${exhibition.href}-work-${index + 1}`,
    title: `${exhibition.title} — Work ${index + 1}`,
    image,
    caption:
      index === 0
        ? "Featured installation view"
        : "Detail study of materials and craftsmanship",
  }));
}

function buildFeaturedWorks(currentSlug: string): PastExhibition[] {
  return normalisePastExhibitions(exhibitionArchive as RawArchiveItem[])
    .filter((item) => getExhibitionSlugFromHref(item.href) !== currentSlug)
    .sort((a, b) => b.year - a.year || a.sortIndex - b.sortIndex)
    .slice(0, 6);
}

export function buildExhibitionDetailModel(
  exhibition: ExhibitionRecord,
): ExhibitionDetailModel {
  const slug = getExhibitionSlugFromHref(exhibition.href);
  const summary = fallbackSummary(exhibition);
  const media = getExhibitionMedia(exhibition);
  const metaText = [exhibition.dateLabel, exhibition.location]
    .filter(Boolean)
    .join(" · ");
  const yearValue = exhibition.year ?? extractYear(metaText) ?? new Date().getFullYear();
  const infoPairs = parseDetailPairs(exhibition.details).length
    ? parseDetailPairs(exhibition.details)
    : [
        { label: "Date", value: exhibition.dateLabel ?? `${yearValue}` },
        { label: "Location", value: exhibition.location ?? "Hong Kong" },
        { label: "Year", value: `${yearValue}` },
      ];

  return {
    slug,
    title: exhibition.title,
    href: exhibition.href,
    heroImage: media[0],
    posterImage: media[1] ?? media[0],
    dateLabel: exhibition.dateLabel ?? `${yearValue}`,
    locationLabel: exhibition.location ?? extractLocation(metaText),
    yearLabel: `${yearValue}`,
    summary,
    intro: `${exhibition.title} explores how craft traditions continue to evolve through collaboration, experimentation, and intergenerational exchange.`,
    narrative: buildNarrative(exhibition, summary),
    infoPairs,
    works: buildFallbackWorks(exhibition),
    featuredWorks: buildFeaturedWorks(slug),
  };
}
