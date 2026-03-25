import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { upcomingEvents } from "./data";
import { containerClass, ctaClass, eyebrowClass, sectionClass } from "./shared";

export function EventsSupportSection() {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <article className="border border-foreground/10 bg-muted/30 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <p className={eyebrowClass}>Upcoming events & workshops</p>
            </div>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground">
              Make the craft active
            </h2>
            <ul className="mt-6 space-y-4">
              {upcomingEvents.map((event) => (
                <li
                  key={event}
                  className="flex items-start gap-3 border-b border-foreground/10 pb-4 text-foreground/80 last:border-0 last:pb-0"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50" />
                  <span>{event}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/events"
              className="mt-8 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground"
            >
              View all events
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </article>

          <article className="border border-foreground/10 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <p className={eyebrowClass}>Support the craft</p>
            </div>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground">
              Collect, gift, and sustain
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-foreground/80">
              The support area can stay calm and practical: premium pieces for
              collectors and corporate buyers, accessible gifts for first-time
              visitors, and a clear donation pathway for long-term care.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/shop" className={ctaClass}>
                <span>Shop</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/support" className={ctaClass}>
                <span>Donate</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border border-foreground/10 p-4">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  Premium pieces
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground/70">
                  For collectors and corporate buyers.
                </p>
              </div>
              <div className="border border-foreground/10 p-4">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  Accessible pieces
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground/70">
                  Small gifts, accessories, and craft kits.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
