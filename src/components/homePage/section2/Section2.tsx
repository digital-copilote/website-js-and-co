import React, { useState } from "react";

function Section2(): JSX.Element {
    const [animation, setAnimation] = useState("");

    return (
        <div
            className="h-screen w-screen bg-red-300 flex items-center justify-center"
            style={{ scrollSnapAlign: "start" }}
        >
            <div>
                {/* {isVisibleSec2 && ( */}
                <h1
                    className={`text-white text-5xl font-bold animate-fade ${animation}`}
                >
                    Section2
                </h1>
                {/* )} */}
            </div>
        </div>
    );
}

export default Section2;
