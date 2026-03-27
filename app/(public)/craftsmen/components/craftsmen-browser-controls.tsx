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
  CraftsmenMultiSelect,
  type CraftsmenOption,
} from "./craftsmen-multi-select";

export function CraftsmenBrowserControls({
  query,
  onQueryChange,
  categoryOptions,
  selectedCategories,
  onToggleCategory,
  onClearCategories,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  categoryOptions: CraftsmenOption[];
  selectedCategories: string[];
  onToggleCategory: (value: string) => void;
  onClearCategories: () => void;
}) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end">
      <div className="w-full lg:flex-2">
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
            placeholder="Search by craftsman name, category, or biography"
            className="h-12 px-4 text-sm placeholder:text-muted-foreground/70"
          />
        </InputGroup>
      </div>

      <FieldGroup className="grid gap-4 lg:flex-1 lg:w-full">
        <CraftsmenMultiSelect
          id="craftsmen-category"
          label="Category"
          values={selectedCategories}
          options={categoryOptions}
          clearLabel="Clear categories"
          onToggle={onToggleCategory}
          onClear={onClearCategories}
        />
      </FieldGroup>
    </div>
  );
}
