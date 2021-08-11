import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function BlackButton({ children, link }: IButton): JSX.Element {
    const [animation, setAnimation] = useState("");
    const router = useRouter();
    useEffect(() => {
        setAnimation(
            "transform -translate-y-24 transition-transform duration-2000",
        );
    }, []);
    return (
        <button
            onClick={() => router.push(link)}
            className={`w-11/12 md:w-52 p-2 my-4 md:mx-4 md:my-0 animate-fade shadow-buttonShadow bg-black rounded-md text-customYellow ${animation}`}
        >
            {/* data to fetch ref to section1.json files */}
            {children}
        </button>
    );
}

export default BlackButton;
