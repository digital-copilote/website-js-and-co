import React from "react";

function Formation({
    textShadow,
    animation,
    animation2,
    animation3,
}: IKeyWords): JSX.Element {
    return (
        <div className="font-bold sml:text-3xl text-xl mt-7 flex justify-center">
            <span
                className={`sm:mx-1 animate-fade  ${animation}`}
                style={{ textShadow: textShadow }}
            >
                F
            </span>
            <span
                className={`sm:mx-7 mx-4 animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                o
            </span>
            <span
                className={`sm:mx-7 mx-4 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                r
            </span>
            <span
                className={`sm:mx-7 mx-4 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                m
            </span>
            <span
                className={`sm:mx-7 mx-4 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                a
            </span>
            <span
                className={`sm:mx-7 mx-4 animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                t
            </span>
            <span
                className={`sm:mx-7 mx-4 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                i
            </span>
            <span
                className={`sm:mx-7 mx-4 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                o
            </span>
            <span
                className={`sm:mx-4  animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                n
            </span>
        </div>
    );
}

export default Formation;
