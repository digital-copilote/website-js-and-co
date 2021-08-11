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
            className="h-screen w-screen flex pt-10  md:px-10 justify-center items-center"
            style={{ scrollSnapAlign: "start" }}
        >
            <div ref={Myref2}>
                {isVisibleSec2 && (
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-6/12 w-full">
                            <TextSection />
                        </div>
                        <div className="md:w-8/12 w-full md:h-event overflow-y-scroll">
                            <Events />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Section2;
