import { GraphQLClient } from "graphql-request";

interface GraphQLRequest {
  query: string;
  variables?: Record<string, any>;
}

export function performRequest({ query, variables }: GraphQLRequest) {
  const endpoint = process.env.NEXT_PUBLIC_BASE_BACKEND ?? "";

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}
