import React from "react";

function Diffusion({
    textShadow,
    animation,
    animation2,
    animation3,
}: IKeyWords): JSX.Element {
    return (
        <div className="font-bold sm:text-3xl text-xl mt-7 flex justify-center">
            <span
                className={`sm:mx-6 mx-1 animate-fade  ${animation}`}
                style={{ textShadow: textShadow }}
            >
                D
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
                f
            </span>
            <span
                className={`sm:mx-7 mx-4 animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                f
            </span>
            <span
                className={`sm:mx-7 mx-4 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                u
            </span>
            <span
                className={`sm:mx-7 mx-4 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                s
            </span>
            <span
                className={`sm:mx-7 mx-4 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                i
            </span>
            <span
                className={`sm:mx-7 mx-4 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                o
            </span>
            <span
                className={`sm:mx-6 mx-1 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                n
            </span>
        </div>
    );
}

export default Diffusion;
