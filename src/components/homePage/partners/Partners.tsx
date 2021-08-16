import React, { MutableRefObject, useRef } from "react";
import data from "FakeData/HomePage/NosPartenaires.json";
import { useOnScreen } from "hook/useOnScroll";
import OnePartner from "./OnePartner";

function Partners(): JSX.Element {
    const scrollRefSec5 = useRef();
    const isVisibleSec5 = useOnScreen(
        scrollRefSec5 as unknown as MutableRefObject<HTMLDivElement>,
    );
    return (
        <div
            className="h-screen text-center font-titilumWeb w-screen flex flex-col px-5 md:px-10 lg:px-52 items-center lg:bg-white bg-customYellow"
            style={{ scrollSnapAlign: "start" }}
        >
            <div
                ref={
                    scrollRefSec5 as unknown as MutableRefObject<HTMLDivElement>
                }
                className={`w-screen lg:h-96  lg:pt-32 pt-14 px-10 pb-2 lg:px-20 lg:pb-5 bg-customYellow ${
                    isVisibleSec5 ? `animate-fadeTop` : ""
                }`}
            >
                <h2 className="font-bold mb-2 lg:mb-5 text-4xl lg:text-5xl">
                    {data.nosPartenaires.title}
                </h2>
                <span className="lg:text-2xl">{data.nosPartenaires.text}</span>
            </div>
            <div
                className={`flex flex-col items-center justify-center lg:flex-row transform lg:-translate-y-20 ${
                    isVisibleSec5 ? `animate-fadetop` : ""
                }`}
            >
                {data.partenaire.map((item, index) => {
                    return (
                        <div className="lg:mx-10 lg:mt-5 mt-2" key={index}>
                            <OnePartner item={item} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Partners;
