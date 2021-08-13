import React from "react";
import { allContent_content_action_action_cards } from "__generated__/allContent";

import Card from "./Card";

function CardSection({
    item,
}: {
    item: (allContent_content_action_action_cards | null)[] | null | undefined;
    isVisibleSec3: boolean;
}): JSX.Element {
    return (
        <div className="flex flex-row justify-center lg:px-2 transform -translate-y-24 lg:-translate-y-32">
            {item?.map((item, index) => {
                return (
                    <div className="lg:mx-10 w-96 h-24" key={index}>
                        <Card item={item} />
                    </div>
                );
            })}
        </div>
    );
}

export default CardSection;
