import React from "react";

function Formation({
    textShadow,
    animation,
    animation2,
    animation3,
}: IKeyWords): JSX.Element {
    return (
        <div className="font-bold font-titilumWeb lg:text-3xl text-lg flex justify-center lg:mt-5 mt-2">
            <span
                className={`lg:mx-4 animate-fade  ${animation}`}
                style={{ textShadow: textShadow }}
            >
                F
            </span>
            <span
                className={`lg:mx-7 mx-4 animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                O
            </span>
            <span
                className={`lg:mx-7 mx-4 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                R
            </span>
            <span
                className={`lg:mx-7 mx-4 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                M
            </span>
            <span
                className={`lg:mx-7 mx-4 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                A
            </span>
            <span
                className={`lg:mx-7 mx-4 animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                T
            </span>
            <span
                className={`lg:mx-7 mx-4 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                I
            </span>
            <span
                className={`lg:mx-7 mx-4 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                O
            </span>
            <span
                className={`lg:mx-4  animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                N
            </span>
        </div>
    );
}

export default Formation;
