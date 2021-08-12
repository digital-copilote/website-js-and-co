import { useOnScreen } from "hook/useOnScroll";
import React, { MutableRefObject, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/reducer";
import CardSection from "./CardSection";
import TextSection from "./TextSection";

function Section3(): JSX.Element {
    const { action } = useSelector((state: RootState) => state.content);
    console.log("action", action);
    const scrollRefSec3 = useRef();
    const isVisibleSec3 = useOnScreen(
        scrollRefSec3 as unknown as MutableRefObject<HTMLDivElement>,
    );
    return (
        <div
            className="h-screen flex flex-col justify-center w-screen pt-12 bg-customYellow"
            style={{ scrollSnapAlign: "start" }}
        >
            <div
                ref={
                    scrollRefSec3 as unknown as MutableRefObject<HTMLDivElement>
                }
            >
                <div className="">
                    <TextSection item={action} isVisibleSec3={isVisibleSec3} />
                    <CardSection
                        item={action?.action_cards}
                        isVisibleSec3={isVisibleSec3}
                    />
                </div>
            </div>
        </div>
    );
}

export default Section3;
