import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import NavBar from "@components/navBar/NavBar";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <div
            className="h-screen overflow-y-scroll"
            style={{ scrollSnapType: "y mandatory" }}
        >
            <NavBar />
            <Component {...pageProps} />;
        </div>
    );
}

export default MyApp;
