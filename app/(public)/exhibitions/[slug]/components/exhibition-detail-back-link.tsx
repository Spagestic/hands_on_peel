import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { containerClass } from "@/components/shared";

export function ExhibitionDetailBackLink() {
  return (
    <section className="">
      <div className={containerClass}>
        <Link
          href="/exhibitions"
          className="flex w-full items-center gap-3 border-y border-border py-4 text-xs font-mono uppercase tracking-[0.22em] text-foreground transition-colors hover:text-foreground/70"
        >
          <ArrowLeft className="size-4" />
          <span>Back to exhibitions</span>
        </Link>
      </div>
    </section>
  );
}
