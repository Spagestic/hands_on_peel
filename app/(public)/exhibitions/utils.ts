import { existsSync } from "node:fs";
import { join } from "node:path";
import { currentExhibition } from "../(home)/components/data";
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
