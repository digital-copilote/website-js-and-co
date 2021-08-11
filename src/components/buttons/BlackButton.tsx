import React from "react";
import { useRouter } from "next/router";

function BlackButton({ children, link, animation }: IButton): JSX.Element {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push(link)}
            className={`w-52 lg:w-52 p-1 my-4 text-sm  lg:my-0 animate-fade shadow-buttonShadow bg-black rounded-md text-customYellow ${animation}`}
        >
            {/* data to fetch ref to section1.json files */}
            {children}
        </button>
    );
}

export default BlackButton;
