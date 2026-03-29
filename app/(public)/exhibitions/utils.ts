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
  leadImage?: string;
  /** Optional second installation image (supporting detail). */
  leadImageSecondary?: string;
  leadImageCaption?: string;
  meta?: string;
  subtitle?: string;
  year?: number;
  location?: string;
  dateLabel?: string;
  status?: string;
  summary?: string;
  brochureHref?: string;
  foreword?: string[];
  exhibitionSummary?: string[];
  programme?: string;
  archiveType?: string;
  works?: ExhibitionWork[];
};

export type ExhibitionRecord = RawArchiveItem & {
  year?: number;
  location?: string;
  dateLabel?: string;
  summary?: string;
  details?: string[];
};

export type ExhibitionResource = {
  id: string;
  title: string;
  image?: string;
  description: string;
  href?: string;
  ctaLabel?: string;
};

/** Printable / downloadable brochure slots (PDFs, packs, etc.) */
export type ExhibitionBrochureItem = {
  id: string;
  title: string;
  subtitle?: string;
  href?: string;
  /** No file yet — show placeholder tile */
  isPlaceholder?: boolean;
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
  leadImage?: string;
  leadImageSecondary?: string;
  leadImageCaption: string;
  posterImage?: string;
  dateLabel: string;
  locationLabel: string;
  yearLabel: string;
  statusLabel: string;
  summary: string;
  overview: string;
  foreword: string[];
  exhibitionSummary: string[];
  detailPairs: { label: string; value: string }[];
  brochureHref?: string;
  /** Brochure and related PDFs — placeholders until real assets are wired */
  brochures: ExhibitionBrochureItem[];
  resources: ExhibitionResource[];
  works: ExhibitionWork[];
  relatedExhibitions: PastExhibition[];
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

function isCurrentExhibition(exhibition: ExhibitionRecord) {
  return (
    exhibition.href === currentExhibition.href &&
    exhibition.year === currentExhibition.year &&
    exhibition.dateLabel === currentExhibition.dateLabel
  );
}

function getExhibitionMedia(exhibition: ExhibitionRecord) {
  const poster = resolvePosterSource(exhibition.poster ?? exhibition.image);
  const lead = resolvePosterSource(
    exhibition.leadImage ?? exhibition.image ?? exhibition.poster,
  );
  const media = [poster, lead].filter(Boolean) as string[];

  return [...new Set(media)];
}

function normalizeParagraphs(blocks: string[] | undefined, fallback: string[]) {
  const normalized = blocks?.map((block) => block.trim()).filter(Boolean) ?? [];
  return normalized.length > 0 ? normalized : fallback;
}

function buildForeword(exhibition: ExhibitionRecord, summary: string) {
  const place = exhibition.location ?? "Hong Kong";

  return normalizeParagraphs(exhibition.foreword, [
    summary,
    `${exhibition.title} situates contemporary making in dialogue with heritage techniques and local narratives rooted in ${place}.`,
  ]);
}

function buildExhibitionSummary(exhibition: ExhibitionRecord) {
  const dateLabel = exhibition.dateLabel ?? "Dates to be announced";
  const place = exhibition.location ?? "Hong Kong";

  return normalizeParagraphs(exhibition.exhibitionSummary, [
    `${exhibition.title} highlights material knowledge, process, and the cultural context that gives each object its life beyond display.`,
    `Presented ${dateLabel}, the exhibition invites visitors to read craft through gesture, memory, and place in ${place}.`,
  ]);
}

function buildDetailPairs(
  exhibition: ExhibitionRecord,
  yearValue: number,
  statusLabel: string,
) {
  const locationLabel = exhibition.location ?? "Hong Kong";
  const programmeLabel =
    exhibition.programme ??
    (locationLabel.toLowerCase() === "hong kong"
      ? "Local exhibition"
      : "Overseas exhibition");

  return [
    { label: "Date", value: exhibition.dateLabel ?? `${yearValue}` },
    { label: "Location", value: locationLabel },
    { label: "Status", value: statusLabel },
    { label: "Year", value: `${yearValue}` },
    { label: "Programme", value: programmeLabel },
    {
      label: "Archive type",
      value: exhibition.archiveType ?? "Crafts on Peel archive",
    },
  ];
}

function buildResources(
  exhibition: ExhibitionRecord,
  posterImage: string | undefined,
  leadImage: string | undefined,
): ExhibitionResource[] {
  const resources: ExhibitionResource[] = [];

  if (posterImage) {
    resources.push({
      id: `${exhibition.href}-poster`,
      title: "Poster",
      image: posterImage,
      description: "Key visual for the exhibition archive entry.",
    });
  }

  if (leadImage && leadImage !== posterImage) {
    resources.push({
      id: `${exhibition.href}-installation-view`,
      title: "Installation view",
      image: leadImage,
      description:
        exhibition.leadImageCaption ??
        "Exhibition view, installation detail, or venue context.",
    });
  }

  return resources;
}

function buildDefaultBrochureHref(href: string | undefined) {
  if (!href || href === "/") return undefined;
  return `${href.replace(/\/$/, "")}/brochure`;
}

function buildBrochureItems(
  exhibition: ExhibitionRecord,
  brochureHref: string | undefined,
): ExhibitionBrochureItem[] {
  const items: Omit<ExhibitionBrochureItem, "id">[] = [
    {
      title: "Main brochure",
      subtitle: "Full exhibition PDF",
      href: brochureHref,
      isPlaceholder: true,
    },
    {
      title: "Press pack",
      subtitle: "Media & images",
      isPlaceholder: true,
    },
    {
      title: "Education sheet",
      subtitle: "Schools & groups",
      isPlaceholder: true,
    },
    {
      title: "Large print",
      subtitle: "Accessible format",
      isPlaceholder: true,
    },
    {
      title: "Sponsors & credits",
      subtitle: "Acknowledgements",
      isPlaceholder: true,
    },
  ];

  return items.map((item, index) => ({
    ...item,
    id: `${exhibition.href}-brochure-${index}`,
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
  const yearValue =
    exhibition.year ?? extractYear(metaText) ?? new Date().getFullYear();
  const statusLabel = exhibition.status ?? (
    isCurrentExhibition(exhibition) ? "Current exhibition" : "Past exhibition"
  );
  const leadImage =
    resolvePosterSource(exhibition.leadImage) ?? media[1] ?? media[0];
  const posterImage = resolvePosterSource(exhibition.poster) ?? media[0];
  const brochureHref =
    exhibition.brochureHref?.trim() ||
    buildDefaultBrochureHref(exhibition.href);
  const leadImageSecondary = resolvePosterSource(
    exhibition.leadImageSecondary,
  );

  return {
    slug,
    title: exhibition.title,
    href: exhibition.href,
    heroImage: leadImage,
    leadImage,
    leadImageSecondary,
    leadImageCaption:
      exhibition.leadImageCaption ??
      "Gallery installation at Crafts on Peel, 11 Peel Street, Central — exhibition display, installation detail, and venue context.",
    posterImage,
    dateLabel: exhibition.dateLabel ?? `${yearValue}`,
    locationLabel: exhibition.location ?? extractLocation(metaText),
    yearLabel: `${yearValue}`,
    statusLabel,
    summary,
    overview:
      `${exhibition.title} offers a concise introduction to the exhibition's makers, materials, and curatorial context before the texts below.`,
    foreword: buildForeword(exhibition, summary),
    exhibitionSummary: buildExhibitionSummary(exhibition),
    detailPairs: buildDetailPairs(exhibition, yearValue, statusLabel),
    brochureHref,
    brochures: buildBrochureItems(exhibition, brochureHref),
    resources: buildResources(exhibition, posterImage, leadImage),
    works: exhibition.works ?? [],
    relatedExhibitions: buildFeaturedWorks(slug),
  };
}
