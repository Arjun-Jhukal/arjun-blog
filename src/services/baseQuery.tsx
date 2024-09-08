import { executeQuery } from "@datocms/cda-client";

interface GraphQLRequest {
  query: string;
  options?: Record<string, any>;
}

export const performRequest = ({ query, options }: GraphQLRequest) => {
  return executeQuery(query, {
    ...options,
    token: process.env.NEXT_DATOCMS_API_TOKEN as string,
    environment: process.env.NEXT_DATOCMS_ENVIRONMENT || "main",
  });
};
