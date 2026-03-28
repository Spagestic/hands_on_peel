import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  bodyClass,
  containerClass,
  ctaClass,
  sectionClass,
  SectionHeading,
} from "@/components/shared";

export function WhyCraftSection() {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-12">
          <SectionHeading
            eyebrow="Why craft still matters"
            title="Preserving more than technique"
            description="Craft carries memory, social life, and the everyday rhythms of place. The page should read like a quiet editorial spread: human-scale, image-led, and easy to linger on."
          />

          <div className="space-y-6 border-l border-foreground/10 pl-0 lg:pl-10">
            <p className={bodyClass}>
              When a craft survives, it is not only a process that persists. A
              gesture, a tool, a family story, and the feel of a material all
              remain in circulation.
            </p>
            <p className={bodyClass}>
              That is why the site should avoid feeling like a catalogue dump.
              Each section should slow the reader down, highlight the maker, and
              connect objects to lived experience.
            </p>
            <Link href="/about" className={ctaClass}>
              <span>About Crafts on Peel</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
