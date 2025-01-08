import graphqlRequest from "@/lib/graphqlRequest";
import { cleanAndTransformBlocks } from "@/lib/cleanAndTransformBlocks";
import { notFound } from "next/navigation";

export async function getHomePage() {
  const query = {
    query: `query MyQuery2 {
                nodeByUri(uri: "/") {
                    ... on Page {
                    id
                    blocks {
                        name
                        attributesJSON
                        order
                        innerBlocks {
                        name
                        attributesJSON
                        }
                        dynamicContent
                    }
                    }
                }
            }
        `,
  };

  try {
    const resJson = await graphqlRequest(query);
    const data = resJson.data.nodeByUri.blocks;

    const getHomePage = cleanAndTransformBlocks(data);

    return getHomePage;
  } catch (error) {
    console.error(error);
  }
}

export async function getPagesParams() {
  const query = {
    query: `query allPages {
              pages {
                nodes {
                  uri
                }
              }
            }
        `,
  };

  try {
    const resJson = await graphqlRequest(query);
    const data = resJson.data;

    const params = data.pages?.nodes
      .filter((page: { uri?: string }) => page.uri !== "/" && page.uri !== null)
      .map((page: { uri?: string }) => ({
        slug: page.uri?.substring(1, page.uri.length - 1).split("/"),
      }));

    return params;
  } catch (error) {
    console.error(error);
  }
}

export async function getPageDatas(slug: string[]) {
  if (!Array.isArray(slug)) {
    console.error("Expected slug to be an array, received:", typeof slug);
    notFound();
  }

  const uri = `/${slug.join("/")}/`;
  console.log("Page URL:", uri);

  const query = {
    query: `query allPages($uri: String!) {
            nodeByUri(uri: $uri) {
              ... on Page {
                id
                blocks {
                  ... on BlocksPluginBannerBlock {
                    attributesJSON
                    name
                    order
                  }
                }
              }
            }
          }`,
    variables: {
      uri,
    },
  };

  try {
    const resJson = await graphqlRequest(query);
    const data = resJson.data.nodeByUri.blocks;

    const getPageDatas = cleanAndTransformBlocks(data);

    if (!data) {
      throw new Error(`Page not found for URI, OR no DATA`);
    }

    return getPageDatas;
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
}
