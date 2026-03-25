"use client";

import { MapPin, Users } from "lucide-react";
import {
  bodyClass,
  containerClass,
  eyebrowClass,
  sectionClass,
} from "./shared";

export function NewsletterSection() {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <div className="grid gap-8 border border-foreground/10 bg-muted/20 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-4">
            <p className={eyebrowClass}>Newsletter / follow / visit</p>
            <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Stay close to what’s next
            </h2>
            <p className={bodyClass}>
              A compact sign-up strip keeps the homepage useful without adding
              visual noise. It can be reused later across the site as a soft
              conversion point.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                11 Peel Street, Central, Hong Kong
              </span>
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4" />
                Instagram, email, and visit updates
              </span>
            </div>
          </div>

          <form
            className="space-y-4"
            onSubmit={(event) => event.preventDefault()}
          >
            <label
              className="block text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground"
              htmlFor="newsletter-email"
            >
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                className="h-12 min-w-0 flex-1 border border-foreground/15 bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground/30"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center border border-foreground/15 px-5 text-xs font-mono uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm leading-7 text-foreground/60">
              By subscribing, visitors can hear about exhibitions, workshops,
              and new stories from the archive.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
