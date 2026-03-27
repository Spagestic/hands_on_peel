"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export type ArchiveOption = {
  value: string;
  label: string;
};

export function ArchiveMultiSelect({
  id,
  label,
  values,
  options,
  onToggle,
  onClear,
}: {
  id: string;
  label: string;
  values: string[];
  options: ArchiveOption[];
  onToggle: (value: string) => void;
  onClear: () => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (rootRef.current?.contains(target)) {
        return;
      }

      setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        id={id}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-12 w-full items-center justify-between border border-foreground/10 bg-background px-4 text-xs font-mono uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-muted"
      >
        <span>{values.length > 0 ? `${label} (${values.length})` : label}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? (
        <div className="absolute right-0 z-20 mt-2 w-full min-w-55 border border-foreground/10 bg-background shadow-lg">
          <div className="max-h-64 overflow-y-auto p-2">
            {options.map((option) => {
              const checked = values.includes(option.value);

              return (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-center justify-between gap-3 px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                >
                  <span>{option.label}</span>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggle(option.value)}
                    className="h-4 w-4 accent-black"
                  />
                </label>
              );
            })}
          </div>

          {values.length > 0 ? (
            <div className="border-t border-foreground/10 p-2">
              <button
                type="button"
                onClick={() => {
                  onClear();
                  setOpen(false);
                }}
                className="w-full px-3 py-2 text-left text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Clear {label.toLowerCase()}s
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
