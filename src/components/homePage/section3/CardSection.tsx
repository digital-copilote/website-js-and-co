import React from "react";
import Image from "next/image";
import { allContent_content_action_action_cards } from "__generated__/allContent";

function CardSection({
    item,
    isVisibleSec3,
}: {
    item: (allContent_content_action_action_cards | null)[] | null | undefined;
    isVisibleSec3: boolean;
}): JSX.Element {
    return (
        <div className="flex flex-row justify-center lg:px-10 transform -translate-y-24 lg:-translate-y-32">
            {item?.map((item, index) => {
                return (
                    <div className="lg:mx-4 h-24" key={index}>
                        <div className=" relative h-24 w-24 ml-3">
                            <Image
                                className="z-40"
                                src={`${item?.image}`}
                                alt="cardIcon"
                                layout="fill"
                            />
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <span className="text-center font-bold">
                                {item?.title}
                            </span>
                        </div>
                        <div className="hidden bg-white font-titilumWeb lg:flex flex-col z-10 lg:p-10 border border-black rounded-lg transform -translate-y-14">
                            <span className="font-bold lg:text-2xl mt-5">
                                {item?.title}
                            </span>
                            <span className="text-xs lg:text-sm lg:leading-7 border-b border-black pt-2 pb-5">
                                {item?.text}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CardSection;
