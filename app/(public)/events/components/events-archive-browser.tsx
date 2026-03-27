"use client";

import { useMemo, useState } from "react";
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";
import { EventsBrowserControls } from "./events-browser-controls";
import { EventsResults } from "./events-results";

export type ArchiveEvent = {
  id: string;
  title: string;
  dateLabel: string;
  timeLabel: string;
  locationLabel: string;
  categoryLabel: string;
  description: string;
  year: number;
  sortIndex: number;
};

export function EventsArchiveBrowser({ items }: { items: ArchiveEvent[] }) {
  const [query, setQuery] = useQueryState("q", parseAsString.withDefault(""));
  const [activeCategories, setActiveCategories] = useQueryState(
    "category",
    parseAsArrayOf(parseAsString).withDefault([]),
  );
  const [selectedYears, setSelectedYears] = useQueryState(
    "year",
    parseAsArrayOf(parseAsInteger).withDefault([]),
  );
  const [visibleCount, setVisibleCount] = useState(12);

  const categories = useMemo(
    () => [...new Set(items.map((item) => item.categoryLabel))].sort(),
    [items],
  );

  const years = useMemo(
    () => [...new Set(items.map((item) => item.year))].sort((a, b) => b - a),
    [items],
  );

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const next = items.filter((item) => {
      const searchable = [
        item.title,
        item.dateLabel,
        item.timeLabel,
        item.locationLabel,
        item.categoryLabel,
        item.description,
        String(item.year),
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery.length === 0 || searchable.includes(normalizedQuery);

      const matchesCategory =
        activeCategories.length === 0 ||
        activeCategories.includes(item.categoryLabel);

      const matchesYear =
        selectedYears.length === 0 || selectedYears.includes(item.year);

      return matchesQuery && matchesCategory && matchesYear;
    });

    next.sort((a, b) => b.year - a.year || a.sortIndex - b.sortIndex);

    return next;
  }, [items, query, activeCategories, selectedYears]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));
  const yearOptions = years.map((year) => ({
    value: String(year),
    label: String(year),
  }));

  const toggleYear = (year: number) => {
    setSelectedYears((prev) =>
      prev.includes(year)
        ? prev.filter((value) => value !== year)
        : [...prev, year],
    );
  };

  const toggleCategory = (category: string) => {
    setActiveCategories((prev) =>
      prev.includes(category)
        ? prev.filter((value) => value !== category)
        : [...prev, category],
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <EventsBrowserControls
        query={query}
        onQueryChange={(value) => {
          setVisibleCount(12);
          setQuery(value);
        }}
        yearOptions={yearOptions}
        categoryOptions={categoryOptions}
        selectedYears={selectedYears.map(String)}
        activeCategories={activeCategories}
        onToggleYear={(value) => {
          setVisibleCount(12);
          toggleYear(Number(value));
        }}
        onToggleCategory={(value) => {
          setVisibleCount(12);
          toggleCategory(value);
        }}
        onClearYears={() => {
          setVisibleCount(12);
          setSelectedYears([]);
        }}
        onClearCategories={() => {
          setVisibleCount(12);
          setActiveCategories([]);
        }}
      />

      <EventsResults
        items={visibleItems}
        hasMore={visibleCount < filteredItems.length}
        onLoadMore={() => setVisibleCount((prev) => prev + 12)}
      />
    </div>
  );
}
