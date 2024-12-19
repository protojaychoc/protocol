import graphqlRequest from "./graphqlRequest";

export async function getAllPosts() {
  const query = {
    query: `query NewQuery {
                posts {
                    nodes {
                    date
                    slug
                    title
                    excerpt
                    featuredImage {
                        node {
                        mediaDetails {
                            file
                            sizes {
                            width
                            sourceUrl
                            height
                            }
                        }
                        link
                        }
                    }
                    categories {
                        nodes {
                        name
                        slug
                        }
                    }
                    }
                    pageInfo {
                    hasNextPage
                    hasPreviousPage
                    endCursor
                    startCursor
                    }
                }
            }
        `,
  };

  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.posts.nodes;

  return allPosts;
}
