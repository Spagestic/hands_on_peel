"use client";

import { Search } from "lucide-react";
import { FieldGroup } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { ShopMultiSelect, type ShopOption } from "./shop-multi-select";

export function ShopBrowserControls({
  query,
  onQueryChange,
  categoryOptions,
  tierOptions,
  selectedCategories,
  selectedTiers,
  onToggleCategory,
  onToggleTier,
  onClearCategories,
  onClearTiers,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  categoryOptions: ShopOption[];
  tierOptions: ShopOption[];
  selectedCategories: string[];
  selectedTiers: string[];
  onToggleCategory: (value: string) => void;
  onToggleTier: (value: string) => void;
  onClearCategories: () => void;
  onClearTiers: () => void;
}) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end">
      <div className="w-full lg:max-w-xl lg:flex-1">
        <InputGroup className="h-12 rounded-none border-foreground/10 bg-background">
          <InputGroupAddon align="inline-start" className="pl-4">
            <InputGroupText>
              <Search />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search by product, artisan, material, or category"
            className="h-12 px-4 text-sm placeholder:text-muted-foreground/70"
          />
        </InputGroup>
      </div>

      <FieldGroup className="grid gap-4 md:grid-cols-2 lg:w-full lg:flex-[1.4] lg:grid-cols-2">
        <ShopMultiSelect
          id="shop-tier"
          label="Collection"
          values={selectedTiers}
          options={tierOptions}
          onToggle={onToggleTier}
          onClear={onClearTiers}
        />
        <ShopMultiSelect
          id="shop-category"
          label="Category"
          values={selectedCategories}
          options={categoryOptions}
          onToggle={onToggleCategory}
          onClear={onClearCategories}
        />
      </FieldGroup>
    </div>
  );
}
