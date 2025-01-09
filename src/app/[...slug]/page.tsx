import { getPagesParams, getPageDatas } from "@/lib/pagesRequest";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/BlockRenderer/BlockRenderer";

export async function generateStaticParams() {
  const params = await getPagesParams();
  return params;
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = await params;

  const props = await getPageDatas(slug);

  console.log(props);

  if (props === null || props === undefined) {
    notFound();
  }

  return <BlockRenderer blocks={props} />;
}
