export default async function graphqlRequest<T>(query: object): Promise<T> {
  const url = `${process.env.WP_GRAPHQL_URL}/graphql`;
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
  });

  if (!res.ok) {
    throw new Error(`GraphQL request failed with status: ${res.status}`);
  }

  const data = await res.json();
  return data;
}
