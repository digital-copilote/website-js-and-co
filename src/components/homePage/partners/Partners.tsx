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
            className="h-screen text-center font-titilumWeb w-screen flex flex-col justify-center pt-10 px-5 md:px-10  lg:px-52 items-center bg-customYellow"
            style={{ scrollSnapAlign: "start" }}
        >
            <div
                ref={
                    scrollRefSec5 as unknown as MutableRefObject<HTMLDivElement>
                }
                className={`${isVisibleSec5 && `animate-fadeTop`}`}
            >
                <h2 className="font-bold mb-2 lg:mb-5 text-4xl lg:text-5xl">
                    {data.nosPartenaires.title}
                </h2>
                <span className=" lg:text-2xl">{data.nosPartenaires.text}</span>
            </div>
            <div
                className={`flex flex-col lg:flex-row ${
                    isVisibleSec5 && `animate-fadeBottom`
                }`}
            >
                {data.partenaire.map((item, index) => {
                    return (
                        <div key={index}>
                            <OnePartner item={item} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Partners;
