import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <div>
            <Component {...pageProps} />;
        </div>
    );
}

export default MyApp;
