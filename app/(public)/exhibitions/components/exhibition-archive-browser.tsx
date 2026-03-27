"use client";

import { useMemo, useState } from "react";
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";
import { ArchiveBrowserControls } from "./archive-browser-controls";
import { ArchiveResults } from "./archive-results";

export type PastExhibition = {
  id: string;
  title: string;
  href: string;
  poster?: string;
  image?: string;
  year: number;
  locationLabel: string;
  dateLabel: string;
  sortIndex: number;
};

export function ExhibitionArchiveBrowser({
  items,
}: {
  items: PastExhibition[];
}) {
  const [query, setQuery] = useQueryState("q", parseAsString.withDefault(""));
  const [activeLocations, setActiveLocations] = useQueryState(
    "location",
    parseAsArrayOf(parseAsString).withDefault([]),
  );
  const [selectedYears, setSelectedYears] = useQueryState(
    "year",
    parseAsArrayOf(parseAsInteger).withDefault([]),
  );
  const [visibleCount, setVisibleCount] = useState(8);

  const locations = useMemo(
    () => [...new Set(items.map((item) => item.locationLabel))].sort(),
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
        item.locationLabel,
        item.dateLabel,
        String(item.year),
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery.length === 0 || searchable.includes(normalizedQuery);

      const matchesLocation =
        activeLocations.length === 0 ||
        activeLocations.includes(item.locationLabel);

      const matchesYear =
        selectedYears.length === 0 || selectedYears.includes(item.year);

      return matchesQuery && matchesLocation && matchesYear;
    });

    next.sort((a, b) => b.year - a.year || a.sortIndex - b.sortIndex);

    return next;
  }, [items, query, activeLocations, selectedYears]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const locationOptions = locations.map((location) => ({
    value: location,
    label: location,
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

  const toggleLocation = (location: string) => {
    setActiveLocations((prev) =>
      prev.includes(location)
        ? prev.filter((value) => value !== location)
        : [...prev, location],
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <ArchiveBrowserControls
        query={query}
        onQueryChange={(value) => {
          setVisibleCount(8);
          setQuery(value);
        }}
        yearOptions={yearOptions}
        locationOptions={locationOptions}
        selectedYears={selectedYears.map(String)}
        activeLocations={activeLocations}
        onToggleYear={(value) => {
          setVisibleCount(8);
          toggleYear(Number(value));
        }}
        onToggleLocation={(value) => {
          setVisibleCount(8);
          toggleLocation(value);
        }}
        onClearYears={() => {
          setVisibleCount(8);
          setSelectedYears([]);
        }}
        onClearLocations={() => {
          setVisibleCount(8);
          setActiveLocations([]);
        }}
      />

      <ArchiveResults
        items={visibleItems}
        hasMore={visibleCount < filteredItems.length}
        onLoadMore={() => setVisibleCount((prev) => prev + 8)}
      />
    </div>
  );
}
