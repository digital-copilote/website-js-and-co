import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    createHttpLink,
    from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
});
const errorLink = onError(({ graphQLErrors, networkError }) => {
    // if (networkError!.operationName === "IgnoreErrorsQuery") {
    //     graphQLErrors!.errors = null;
    // }
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );

    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext(() => {
    return {
        headers: {
            Authorization: process.env.NEXT_PUBLIC_API_TOKEN,
        },
    };
});

const createApolloClient = new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: from([authLink, errorLink, httpLink]),
    uri: process.env.ENV_API_URL,
    cache: new InMemoryCache(),
});

export const initializeApollo = (): ApolloClient<NormalizedCacheObject> => {
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === "undefined") {
        return createApolloClient;
    }

    // Create the Apollo Client once in the client
    if (!apolloClient) {
        apolloClient = createApolloClient;
    }

    return apolloClient;
};
