import craftsmenData from "@/data/craftsmen.json";
import {
  containerClass,
  sectionClass,
  SectionHeading,
} from "@/components/shared";
import { Suspense } from "react";
import {
  CraftsmenBrowser,
  type Craftsman,
} from "./components/craftsmen-browser";

export default function Page() {
  const craftsmen = (craftsmenData.artisans ?? []) as Craftsman[];

  return (
    <div className="bg-background">
      <section className={sectionClass}>
        <div className={containerClass}>
          <SectionHeading
            eyebrow="Craftsmen Archive"
            title="Meet our craftsmen"
            description="Discover the makers and artisans who shape our programmes through traditional techniques, contemporary interpretation, and lived craft knowledge."
          />

          <Suspense
            fallback={
              <div className="mt-10 text-sm text-muted-foreground">
                Loading craftsmen archive...
              </div>
            }
          >
            <div className="mt-10">
              <CraftsmenBrowser items={craftsmen} />
            </div>
          </Suspense>
        </div>
      </section>
    </div>
  );
}
