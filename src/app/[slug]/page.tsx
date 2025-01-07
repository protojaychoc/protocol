import { getPagesParams, getPageDatas } from "@/lib/pagesRequest";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/BlockRenderer/BlockRenderer";

export async function generateStaticParams() {
  const params = await getPagesParams();
  const uriParams = params.pages?.nodes
    .filter((page: { uri?: string }) => page.uri !== "/" && page.uri !== null)
    .map((page: { uri?: string }) => ({
      slug: String(page.uri?.substring(1, page.uri.length - 1).split("/")),
    }));

  console.log("Generated static params:", uriParams);

  return uriParams;
}

export default async function Page({ params }: { params: { slug: any } }) {
  const { slug } = await params;

  const slugArray = slug.split("/").filter((segment: string) => segment);

  if (!Array.isArray(slugArray)) {
    console.error("Expected slug to be an array, received:", typeof slug);
    notFound();
  }

  const uri = `/${slugArray.join("/")}/`;
  console.log("Page URL:", uri);

  const props = await getPageDatas(uri);

  console.log(props);

  if (props === null || props === undefined) {
    notFound();
  }

  return <BlockRenderer blocks={props} />;
}
