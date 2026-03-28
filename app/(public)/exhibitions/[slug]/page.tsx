import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  buildExhibitionDetailModel,
  getAllExhibitions,
  getExhibitionBySlug,
  getExhibitionSlugFromHref,
} from "../utils";
import {
  ExhibitionDetailBackLink,
  ExhibitionDetailFacts,
  ExhibitionDetailHeader,
  ExhibitionDetailLeadImage,
  ExhibitionDetailRelatedExhibitions,
  ExhibitionDetailResources,
  ExhibitionDetailSelectedWorks,
  ExhibitionDetailTexts,
} from "./components/exhibition-detail-sections";

type ExhibitionDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllExhibitions()
    .map((item) => getExhibitionSlugFromHref(item.href))
    .filter(Boolean)
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ExhibitionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const exhibition = getExhibitionBySlug(slug);

  if (!exhibition) {
    return {
      title: "Exhibition Not Found | Crafts on Peel",
      description: "The requested exhibition could not be found.",
    };
  }

  return {
    title: `${exhibition.title} | Crafts on Peel`,
    description:
      exhibition.summary ??
      "Explore exhibition details, highlights, and featured works from Crafts on Peel.",
  };
}

export default async function ExhibitionDetailPage({
  params,
}: ExhibitionDetailPageProps) {
  const { slug } = await params;
  const exhibition = getExhibitionBySlug(slug);
  if (!exhibition) notFound();

  const detail = buildExhibitionDetailModel(exhibition);

  return (
    <div className="bg-background">
      <ExhibitionDetailBackLink />
      <ExhibitionDetailHeader detail={detail} />
      <ExhibitionDetailLeadImage detail={detail} />
      <ExhibitionDetailTexts detail={detail} />
      <ExhibitionDetailFacts detail={detail} />
      <ExhibitionDetailResources detail={detail} />
      <ExhibitionDetailSelectedWorks detail={detail} />
      <ExhibitionDetailRelatedExhibitions detail={detail} />
    </div>
  );
}
