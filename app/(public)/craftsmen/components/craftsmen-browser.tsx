"use client";

import { useMemo, useState } from "react";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { CraftsmenBrowserControls } from "./craftsmen-browser-controls";
import { CraftsmenResults } from "./craftsmen-results";

export type Craftsman = {
  name: string;
  image_url?: string;
  bio?: string;
  name_citation?: string;
  craft_categories?: { value: string }[];
};

export function CraftsmenBrowser({ items }: { items: Craftsman[] }) {
  const [query, setQuery] = useQueryState("q", parseAsString.withDefault(""));
  const [selectedCategories, setSelectedCategories] = useQueryState(
    "category",
    parseAsArrayOf(parseAsString).withDefault([]),
  );
  const [visibleCount, setVisibleCount] = useState(9);

  const categoryOptions = useMemo(() => {
    const categories = items.flatMap((item) =>
      (item.craft_categories ?? [])
        .map((category) => category.value?.trim())
        .filter(Boolean),
    );

    return [...new Set(categories)].sort().map((category) => ({
      value: category,
      label: category,
    }));
  }, [items]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const next = items.filter((item) => {
      const categories = (item.craft_categories ?? []).map((category) =>
        category.value.trim(),
      );
      const searchable = [item.name, item.bio ?? "", ...categories]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery.length === 0 || searchable.includes(normalizedQuery);

      const matchesCategory =
        selectedCategories.length === 0 ||
        categories.some((category) => selectedCategories.includes(category));

      return matchesQuery && matchesCategory;
    });

    next.sort((a, b) => a.name.localeCompare(b.name));

    return next;
  }, [items, query, selectedCategories]);

  const visibleItems = filteredItems.slice(0, visibleCount);

  const toggleCategory = (value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <CraftsmenBrowserControls
        query={query}
        onQueryChange={(value) => {
          setVisibleCount(9);
          setQuery(value);
        }}
        categoryOptions={categoryOptions}
        selectedCategories={selectedCategories}
        onToggleCategory={(value) => {
          setVisibleCount(9);
          toggleCategory(value);
        }}
        onClearCategories={() => {
          setVisibleCount(9);
          setSelectedCategories([]);
        }}
      />

      <CraftsmenResults
        items={visibleItems}
        hasMore={visibleCount < filteredItems.length}
        onLoadMore={() => setVisibleCount((prev) => prev + 9)}
      />
    </div>
  );
}
