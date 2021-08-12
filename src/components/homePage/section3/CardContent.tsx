import React from "react";
import { allContent_content_action_action_cards } from "__generated__/allContent";

function CardContent({
    item,
}: {
    item: allContent_content_action_action_cards | null;
}): JSX.Element {
    return (
        <div>
            <div className="w-full flex items-center justify-center">
                <span className="text-center font-bold">{item?.title}</span>
            </div>
            <div className="hidden bg-white font-titilumWeb lg:flex flex-col z-10 lg:p-7 border border-black rounded-lg transform -translate-y-14">
                <span className="font-bold lg:text-2xl mt-5">
                    {item?.title}
                </span>
                <span className="text-xs lg:text-xs lg:leading-7 border-b border-black pt-2 pb-5">
                    {item?.text}
                </span>
            </div>
        </div>
    );
}

export default CardContent;
