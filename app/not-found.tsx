import Link from "next/link";
import { ArrowRight, HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-shell border-t-0">
      <div className="section-container">
        <div className="surface-card mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center gap-8 p-8 text-center sm:p-12">
          <p className="section-eyebrow">Error 404</p>
          <div className="space-y-4">
            <h1 className="section-title">Page not found</h1>
            <p className="section-body mx-auto max-w-2xl">
              The page you&apos;re looking for may have moved, been renamed, or no
              longer exists.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="/" className="section-cta">
              <HomeIcon className="h-4 w-4" />
              Go home
            </Link>
            <Link
              href="/exhibitions"
              className="inline-flex items-center gap-2 border border-foreground/15 px-5 py-3 text-xs font-mono uppercase tracking-[0.22em] text-foreground/70 transition-colors hover:text-foreground"
            >
              Browse exhibitions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
