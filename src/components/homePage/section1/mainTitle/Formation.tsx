import React from "react";

function Formation({
    textShadow,
    animation,
    animation2,
    animation3,
}: IKeyWords): JSX.Element {
    return (
        <div className="font-bold font-titilumWeb lg:text-xl text-lg flex justify-center lg:mt-5 mt-2">
            <span
                className={`lg:mx-3 animate-fade  ${animation}`}
                style={{ textShadow: textShadow }}
            >
                F
            </span>
            <span
                className={`lg:mx-7 mx-4 animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                o
            </span>
            <span
                className={`lg:mx-7 mx-4 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                r
            </span>
            <span
                className={`lg:mx-7 mx-4 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                m
            </span>
            <span
                className={`lg:mx-7 mx-4 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                a
            </span>
            <span
                className={`lg:mx-7 mx-4 animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                t
            </span>
            <span
                className={`lg:mx-7 mx-4 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                i
            </span>
            <span
                className={`lg:mx-7 mx-4 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                o
            </span>
            <span
                className={`lg:mx-3  animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                n
            </span>
        </div>
    );
}

export default Formation;
