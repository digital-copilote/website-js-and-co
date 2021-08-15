import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import NavBar from "@components/navBar/NavBar";
import { initializeApollo } from "src/services";
export const apolloClient = initializeApollo();
import { Provider } from "react-redux";
import store from "src/redux/store";
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider store={store}>
            <div
                className="h-screen w-screen overflow-y-scroll"
                style={{ scrollSnapType: "y mandatory" }}
            >
                <NavBar />
                <Component {...pageProps} />;
            </div>
        </Provider>
    );
}

export default MyApp;
