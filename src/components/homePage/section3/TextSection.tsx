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
        <div className="pt-20 pb-40 font-titilumWeb px-7 md:px-28 text-center bg-customYellow">
            <div className={isVisibleSec3 ? "animate-fadeTop" : ""}>
                <h2 className="text-5xl font-bold">{item?.title}</h2>
                <p className="mt-5 text-lg leading-7">{item?.text}</p>
            </div>
        </div>
    );
}

export default TextSection;
