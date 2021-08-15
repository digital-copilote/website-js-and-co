import { useOnScreen } from "hook/useOnScroll";
import React, { MutableRefObject, useRef } from "react";
import data from "../../../../FakeData/HomePage/section4.json";
import SocialMedia from "./SocialMedia";

function Section4(): JSX.Element {
    const scrollRefSec4 = useRef();
    const isVisibleSec4 = useOnScreen(
        scrollRefSec4 as unknown as MutableRefObject<HTMLDivElement>,
    );
    return (
        <div
            className="h-screen w-screen flex pt-10 md:px-10  lg:px-10 items-center bg-white"
            style={{ scrollSnapAlign: "start" }}
        >
            {
                <div
                    ref={
                        scrollRefSec4 as unknown as MutableRefObject<HTMLDivElement>
                    }
                    className={`flex font-titilumWeb flex-col w-full items-center justify-center text-center mx-5 lg:mx-40 ${
                        isVisibleSec4 && `animate-fadeTop`
                    }`}
                >
                    <h2 className="text-4xl tracking-wider lg:text-6xl">
                        {data.nosRéseaux.title}
                    </h2>
                    <span className="text-xl lg:text-2xl mt-5 lg:mt-10 mx-5">
                        {data.nosRéseaux.text}
                    </span>
                    <div className="flex flex-wrap items-center pb-5 justify-center border-b-2 border-customYellow mt-10 lg:mt-16">
                        {data.iconRéseaux.map((item) => {
                            return (
                                <div className="lg:mx-5">
                                    <SocialMedia item={item} />
                                </div>
                            );
                        })}
                    </div>
                    <span className="mt-10 text-lg lg:text-2xl">
                        {data.nosRéseaux.text2}
                    </span>
                </div>
            }
        </div>
    );
}

export default Section4;
