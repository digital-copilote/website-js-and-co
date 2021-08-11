import React from "react";
import Events from "./events/Events";
import TextSection from "./TextSection";
interface IProps {
    Myref2: any;
    isVisibleSec2: boolean;
}

function Section2({ Myref2, isVisibleSec2 }: IProps): JSX.Element {
    return (
        <div
            className="h-screen w-screen flex pt-10 md:px-10  lg:px-10 items-center"
            style={{ scrollSnapAlign: "start" }}
        >
            <div ref={Myref2}>
                {isVisibleSec2 && (
                    <div className="flex flex-col lg:flex-row  justify-start">
                        <div className="lg:w-6/12 w-full">
                            <TextSection />
                        </div>
                        <div className="lg:w-8/12 w-full lg:h-event overflow-y-scroll">
                            <Events />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Section2;
