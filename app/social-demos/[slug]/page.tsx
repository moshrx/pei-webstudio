import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BadDemoSite } from "@/components/social-demos/BadDemoSite";
import { DemoSwitcher } from "@/components/social-demos/DemoSwitcher";
import { RedesignedDemoSite } from "@/components/social-demos/RedesignedDemoSite";
import { demoBusinesses, getDemoBusiness } from "@/components/social-demos/data";

type DemoPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ version?: string }>;
};

export function generateStaticParams() {
  return demoBusinesses.map((business) => ({ slug: business.slug }));
}

export async function generateMetadata({ params }: Pick<DemoPageProps, "params">): Promise<Metadata> {
  const { slug } = await params;
  const business = getDemoBusiness(slug);

  if (!business) {
    return {
      title: "Social Demo Not Found | PEI Web Studio"
    };
  }

  return {
    title: `${business.name} Before/After Demo | PEI Web Studio`,
    description: `A fictional ${business.businessType} website built for PEI Web Studio short-form before/after content.`,
    robots: { index: false, follow: false }
  };
}

export default async function SocialDemoPage({ params, searchParams }: DemoPageProps) {
  const { slug } = await params;
  const { version } = await searchParams;
  const business = getDemoBusiness(slug);

  if (!business) notFound();

  const showRedesign = version === "redesign";

  return (
    <>
      {showRedesign ? (
        <RedesignedDemoSite business={business} />
      ) : (
        <BadDemoSite business={business} />
      )}
      <DemoSwitcher slug={business.slug} />
    </>
  );
}
