import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { containerClass, ImageFrame } from "@/components/shared";
import {
  getAllCraftsmen,
  getCraftsmanBySlug,
  getCraftsmanSlug,
} from "../utils";

type CraftsmanDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function metaDescription(bio?: string) {
  const text = bio?.trim();
  if (!text) {
    return "Craftsman profile from Crafts on Peel.";
  }
  return text.length > 160 ? `${text.slice(0, 157)}…` : text;
}

export function generateStaticParams() {
  return getAllCraftsmen()
    .map((item) => getCraftsmanSlug(item))
    .filter(Boolean)
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CraftsmanDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const craftsman = getCraftsmanBySlug(slug);

  if (!craftsman) {
    return {
      title: "Craftsman Not Found | Crafts on Peel",
      description: "The requested craftsman profile could not be found.",
    };
  }

  return {
    title: `${craftsman.name} | Crafts on Peel`,
    description: metaDescription(craftsman.bio),
  };
}

export default async function CraftsmanDetailPage({
  params,
}: CraftsmanDetailPageProps) {
  const { slug } = await params;
  const craftsman = getCraftsmanBySlug(slug);
  if (!craftsman) notFound();

  return (
    <div className="bg-background">
      <section>
        <div className={containerClass}>
          <Link
            href="/craftsmen"
            className="flex w-full items-center gap-3 py-4 text-xs font-mono uppercase tracking-[0.22em] text-foreground transition-colors hover:text-foreground/70"
          >
            <ArrowLeft className="size-4" />
            <span>Back to craftsmen</span>
          </Link>
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-background">
        <div className={containerClass}>
          <div className="grid gap-10 py-6 sm:py-8 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:items-start lg:gap-14 lg:py-10">
            <div className="shrink-0">
              <ImageFrame
                src={craftsman.image_url}
                alt={craftsman.name}
                className="aspect-5/4 w-full"
                sizes="(min-width: 1024px) 28rem, 100vw"
                priority
              />
            </div>

            <div className="flex min-w-0 flex-col gap-6">
              <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {craftsman.name}
              </h1>

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

              {craftsman.bio ? (
                <p className="text-sm leading-7 text-foreground/80">
                  {craftsman.bio}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
