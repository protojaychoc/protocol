import graphqlRequest from "@/lib/graphqlRequest";
import { cleanAndTransformBlocks } from "@/lib/cleanAndTransformBlocks";

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

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPageDatas(uri: string) {
  console.log(uri);

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
