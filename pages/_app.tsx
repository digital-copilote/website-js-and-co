import React from "react";
import { AppProps } from "next/app";
import { initializeApollo } from "src/services";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import store from "src/redux/store";
import NavBar from "@components/navBar/NavBar";
import Footer from "@components/footer/Footer";

export const apolloClient = initializeApollo();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider store={store}>
            <div
                className="h-screen overflow-y-scroll"
                style={{ scrollSnapType: "y mandatory" }}
            >
                <NavBar />
                <Component {...pageProps} />;
                <Footer />
            </div>
        </Provider>
    );
}

export default MyApp;
