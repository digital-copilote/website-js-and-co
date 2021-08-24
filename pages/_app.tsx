import React from "react";
import { AppProps } from "next/app";
import { initializeApollo } from "src/services";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import store from "src/redux/store";

export const apolloClient = initializeApollo();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider store={store}>
            <div
                className="h-screen w-screen overflow-y-scroll"
                style={{ scrollSnapType: "y mandatory" }}
            >
                <Component {...pageProps} />
            </div>
        </Provider>
    );
}

export default MyApp;
