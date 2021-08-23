import React from "react";

function TextSection({
    title,
    text,
    isVisibleSec3,
}: {
    title: string;
    text: string;
    isVisibleSec3: boolean;
}): JSX.Element {
    return (
        <div className="w-screen lg:h-80 xl:h-96 pt-10 xl:pt-20 font-titilumWeb px-7 md:px-40 text-center bg-customYellow">
            <div className={isVisibleSec3 ? "animate-fadeTop" : ""}>
                <h2 className="text-5xl font-bold">{title}</h2>
                <p className="mt-5 leading-7">{text}</p>
            </div>
        </div>
    );
}

export default TextSection;
