import Vue from "vue";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";

//let token = localStorage.getItem("token") || null;

const httpLink = new HttpLink({
  uri: process.env.VUE_APP_SOURCELINK_API_URL
});

// Error Handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(err => console.error("Err: ", err.message));
  }
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});
