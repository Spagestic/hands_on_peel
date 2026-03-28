import craftsmenData from "@/data/craftsmen.json";
import type { Craftsman } from "./components/craftsmen-browser";

export type CraftsmanRecord = Craftsman & {
  name_citation?: string;
};

function slugifyName(name: string) {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

export function getCraftsmanSlugFromCitation(url = "") {
  const trimmed = url.trim();
  if (!trimmed) return "";

  try {
    const pathname = new URL(trimmed).pathname.replace(/\/+$/, "");
    const parts = pathname.split("/").filter(Boolean);
    return parts[parts.length - 1] ?? "";
  } catch {
    return "";
  }
}

export function getCraftsmanSlug(artisan: Craftsman | CraftsmanRecord) {
  const fromCitation = getCraftsmanSlugFromCitation(artisan.name_citation ?? "");
  if (fromCitation) return fromCitation;
  return slugifyName(artisan.name);
}

export function getAllCraftsmen(): CraftsmanRecord[] {
  return (craftsmenData.artisans ?? []) as CraftsmanRecord[];
}

export function getCraftsmanBySlug(slug: string) {
  return getAllCraftsmen().find((item) => getCraftsmanSlug(item) === slug);
}
