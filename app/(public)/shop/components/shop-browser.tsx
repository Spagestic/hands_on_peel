"use client";

import { useMemo, useState } from "react";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import type { ShopProduct } from "../utils";
import { ShopBrowserControls } from "./shop-browser-controls";
import { ShopResults } from "./shop-results";

export function ShopBrowser({ items }: { items: ShopProduct[] }) {
  const [query, setQuery] = useQueryState("q", parseAsString.withDefault(""));
  const [selectedCategories, setSelectedCategories] = useQueryState(
    "category",
    parseAsArrayOf(parseAsString).withDefault([]),
  );
  const [selectedTiers, setSelectedTiers] = useQueryState(
    "collection",
    parseAsArrayOf(parseAsString).withDefault([]),
  );
  const [visibleCount, setVisibleCount] = useState(8);

  const categories = useMemo(
    () => [...new Set(items.map((item) => item.categoryLabel))].sort(),
    [items],
  );

  const tiers = useMemo(
    () => [...new Set(items.map((item) => item.tierLabel))],
    [items],
  );

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const next = items.filter((item) => {
      const searchable = [
        item.title,
        item.artisan,
        item.material,
        item.categoryLabel,
        item.tierLabel,
        item.priceLabel,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery.length === 0 || searchable.includes(normalizedQuery);

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.categoryLabel);

      const matchesTier =
        selectedTiers.length === 0 || selectedTiers.includes(item.tierLabel);

      return matchesQuery && matchesCategory && matchesTier;
    });

    next.sort((a, b) => {
      if (a.tier !== b.tier) {
        return a.tier === "premium" ? -1 : 1;
      }

      return b.priceHkd - a.priceHkd || a.sortIndex - b.sortIndex;
    });

    return next;
  }, [items, query, selectedCategories, selectedTiers]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));
  const tierOptions = tiers.map((tier) => ({ value: tier, label: tier }));

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((value) => value !== category)
        : [...prev, category],
    );
  };

  const toggleTier = (tier: string) => {
    setSelectedTiers((prev) =>
      prev.includes(tier)
        ? prev.filter((value) => value !== tier)
        : [...prev, tier],
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <ShopBrowserControls
        query={query}
        onQueryChange={(value) => {
          setVisibleCount(8);
          setQuery(value);
        }}
        categoryOptions={categoryOptions}
        tierOptions={tierOptions}
        selectedCategories={selectedCategories}
        selectedTiers={selectedTiers}
        onToggleCategory={(value) => {
          setVisibleCount(8);
          toggleCategory(value);
        }}
        onToggleTier={(value) => {
          setVisibleCount(8);
          toggleTier(value);
        }}
        onClearCategories={() => {
          setVisibleCount(8);
          setSelectedCategories([]);
        }}
        onClearTiers={() => {
          setVisibleCount(8);
          setSelectedTiers([]);
        }}
      />

      <ShopResults
        items={visibleItems}
        hasMore={visibleCount < filteredItems.length}
        onLoadMore={() => setVisibleCount((prev) => prev + 8)}
      />
    </div>
  );
}
