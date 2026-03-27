import { Badge } from "@/components/ui/badge";
import craftsmenData from "@/data/craftsmen.json";
import {
  containerClass,
  sectionClass,
  SectionHeading,
  ImageFrame,
} from "../(home)/components/shared";

type Craftsman = {
  name: string;
  image_url?: string;
  bio?: string;
  craft_categories?: { value: string }[];
};

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

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {craftsmen.map((craftsman) => (
              <article
                key={craftsman.name}
                className="overflow-hidden border border-foreground/10 bg-card/30"
              >
                <ImageFrame
                  src={craftsman.image_url}
                  alt={craftsman.name}
                  className="aspect-3/4"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                />

                <div className="space-y-4 p-5">
                  <h2 className="text-xl font-medium tracking-tight text-foreground">
                    {craftsman.name}
                  </h2>

                  <div className="flex flex-wrap gap-2">
                    {(craftsman.craft_categories ?? []).map((item) => (
                      <Badge
                        key={`${craftsman.name}-${item.value}-category`}
                        variant="outline"
                        className="rounded-none tracking-[0.14em]"
                      >
                        {item.value}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
