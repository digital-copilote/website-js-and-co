import React from "react";
import { allContent_content_action } from "__generated__/allContent";

function TextSection({
    item,
    isVisibleSec3,
}: {
    item: allContent_content_action | null;
    isVisibleSec3: boolean;
}): JSX.Element {
    return (
        <div className="lg:h-80 xl:h-96 pt-10 xl:pt-20 font-titilumWeb px-7 md:px-40 text-center bg-customYellow">
            <div className={isVisibleSec3 ? "animate-fadeTop" : ""}>
                <h2 className="text-5xl font-bold">{item?.title}</h2>
                <p className="mt-5 leading-7">{item?.text}</p>
            </div>
        </div>
    );
}

export default TextSection;
