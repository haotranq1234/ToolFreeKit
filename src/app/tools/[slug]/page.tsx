import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ToolLayout } from "@/components/ToolLayout";
import { getTool, tools } from "@/data/tools";
import { createMetadata } from "@/lib/metadata";
import { toolComponents } from "@/tools";

export const dynamicParams = false;

type ToolPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug
  }));
}

export async function generateMetadata({
  params
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    return createMetadata({
      title: "Tool not found",
      description: "The requested tool could not be found.",
      noIndex: true
    });
  }

  return createMetadata({
    title: tool.name,
    description: tool.description,
    path: `/tools/${tool.slug}/`,
    keywords: tool.keywords
  });
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    notFound();
  }

  const Tool = toolComponents[tool.slug];

  if (!Tool) {
    notFound();
  }

  return (
    <ToolLayout tool={tool}>
      <Tool />
    </ToolLayout>
  );
}
