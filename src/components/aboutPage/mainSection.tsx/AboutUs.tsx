import React, { useEffect, useState } from "react";
import data from "FakeData/AboutPage/AboutUs.json";
import Image from "next/image";

function AboutUs(): JSX.Element {
    const [animation, setAnimation] = useState("");
    useEffect(() => {
        setAnimation(
            "transform -translate-y-24 transition-transform duration-2000",
        );
    }, []);
    return (
        <div
            className="h-screen w-screen flex flex-col justify-between lg:justify-between items-center font-titilumWeb bg-customYellow px-5 lg:px-32 pt-24 lg:pt-52"
            style={{ scrollSnapAlign: "start" }}
        >
            <div className="text-center">
                <h2 className="font-bold text-4xl lg:text-6xl tracking-wider animate-fadeTop">
                    {data.title}
                </h2>
                <p className="mt-10 text-xl lg:text-2xl tracking-wider border-b border-black pb-5 animate-fadeBottom">
                    {data.text}
                </p>
                <p className="text-lg lg:text-xl tracking-wider leading-9 lg:leading-10 mt-10 animate-fadeBottom">
                    {data.text2}
                </p>
            </div>
            <div className={`animate-fade mt-20 lg:pt-20 ${animation}`}>
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

export default AboutUs;
