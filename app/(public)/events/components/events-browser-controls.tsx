"use client";

import { FieldGroup } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import {
  ArchiveMultiSelect,
  type ArchiveOption,
} from "../../exhibitions/components/archive-multi-select";

export function EventsBrowserControls({
  query,
  onQueryChange,
  yearOptions,
  categoryOptions,
  selectedYears,
  activeCategories,
  onToggleYear,
  onToggleCategory,
  onClearYears,
  onClearCategories,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  yearOptions: ArchiveOption[];
  categoryOptions: ArchiveOption[];
  selectedYears: string[];
  activeCategories: string[];
  onToggleYear: (value: string) => void;
  onToggleCategory: (value: string) => void;
  onClearYears: () => void;
  onClearCategories: () => void;
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
            placeholder="Search by event title, year, category, or location"
            className="h-12 px-4 text-sm placeholder:text-muted-foreground/70"
          />
        </InputGroup>
      </div>

      <FieldGroup className="grid gap-4 md:grid-cols-2 lg:flex-[1.4] lg:w-full lg:grid-cols-2">
        <ArchiveMultiSelect
          id="events-year"
          label="Year"
          values={selectedYears}
          options={yearOptions}
          onToggle={onToggleYear}
          onClear={onClearYears}
        />
        <ArchiveMultiSelect
          id="events-category"
          label="Category"
          values={activeCategories}
          options={categoryOptions}
          onToggle={onToggleCategory}
          onClear={onClearCategories}
        />
      </FieldGroup>
    </div>
  );
}
