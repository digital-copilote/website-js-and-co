import React, { useEffect, useState } from "react";
import MainTitle from "./mainTitle/MainTitle";
import Image from "next/image";

function Section1(): JSX.Element {
    // const scrollRefSec1 = useRef();
    // const isVisibleSec1 = useOnScreen(scrollRefSec1);
    const textShadow = "5px 5px 10px rgba(0, 0, 0, 0.25)";
    const [animation, setAnimation] = useState("");
    useEffect(() => {
        setAnimation(
            "transform -translate-y-24 transition-transform duration-2000",
        );
    }, []);
    return (
        <div
            className="flex flex-col justify-center items-center h-screen w-screen bg-customYellow "
            style={{ scrollSnapAlign: "start" }}
        >
            <div>
                <MainTitle textShadow={textShadow} />
            </div>
            <div
                // ref={scrollRefSec1}
                className={`animate-fade mt-20 ${animation}`}
            >
                <Image
                    src="/icons/DownArrow.svg"
                    alt="arrow"
                    width={40}
                    height={40}
                />
            </div>
        </div>
    );
}

export default Section1;
