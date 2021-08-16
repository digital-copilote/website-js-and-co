import React from "react";

function Vulgarisation({
    textShadow,
    animation,
    animation2,
    animation3,
}: IKeyWords): JSX.Element {
    return (
        <div className="font-bold font-titilumWeb lg:text-3xl text-lg  flex justify-center mt-5 lg:mt-10">
            <span
                className={`mx-2 animate-fade  ${animation}`}
                style={{ textShadow: textShadow }}
            >
                V
            </span>
            <span
                className={`lg:mx-4 mx-2 animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                U
            </span>
            <span
                className={`lg:mx-4 mx-2 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                L
            </span>
            <span
                className={`lg:mx-4 mx-2 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                G
            </span>
            <span
                className={`lg:mx-4 mx-2 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                A
            </span>
            <span
                className={`lg:mx-4 mx-2 animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                R
            </span>
            <span
                className={`lg:mx-4 mx-2 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                I
            </span>
            <span
                className={`lg:mx-4 mx-2 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                S
            </span>
            <span
                className={`lg:mx-4 mx-2 animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                A
            </span>
            <span
                className={`lg:mx-4 mx-2 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                T
            </span>
            <span
                className={`lg:mx-4 mx-2 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                I
            </span>
            <span
                className={`lg:mx-4 mx-2 animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                O
            </span>
            <span
                className={`mx-2 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                N
            </span>
        </div>
    );
}

export default Vulgarisation;
