import React from "react";

function Vulgarisation({
    textShadow,
    animation,
    animation2,
    animation3,
}: IKeyWords): JSX.Element {
    return (
        <div className="font-bold font-titilumWeb md:text-xl text-lg  flex justify-center mt-5 md:mt-10">
            <span
                className={`md:mx-4 mx-4 animate-fade  ${animation}`}
                style={{ textShadow: textShadow }}
            >
                v
            </span>
            <span
                className={`md:mx-4 mx-2 animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                u
            </span>
            <span
                className={`md:mx-4 mx-2 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                l
            </span>
            <span
                className={`md:mx-4 mx-2 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                g
            </span>
            <span
                className={`md:mx-4 mx-2 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                a
            </span>
            <span
                className={`md:mx-4 mx-2 animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                r
            </span>
            <span
                className={`md:mx-4 mx-2 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                i
            </span>
            <span
                className={`md:mx-4 mx-2 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                s
            </span>
            <span
                className={`md:mx-4 mx-2 animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                a
            </span>
            <span
                className={`md:mx-4 mx-2 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                t
            </span>
            <span
                className={`md:mx-4 mx-2 animate-fade ${animation}`}
                style={{ textShadow: textShadow }}
            >
                i
            </span>
            <span
                className={`md:mx-4 mx-2 animate-fade ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                o
            </span>
            <span
                className={`md:mx-4 mx-4 animate-fade ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                n
            </span>
        </div>
    );
}

export default Vulgarisation;
