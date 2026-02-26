import { Environment, Network, RecordSource, Store } from "relay-runtime";
import type { FetchFunction } from "relay-runtime";

const HTTP_ENDPOINT = "http://localhost:4000/graphql/";

const fetchGraphQL: FetchFunction = async (request, variables) => {
  const response = await fetch(HTTP_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: request.text, variables }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.status}`);
  }

  return await response.json();
};

const network = Network.create(fetchGraphQL);
const recordSource = new RecordSource();
const store = new Store(recordSource);

export const environment = new Environment({
  network,
  store,
});

export default environment;
