import React, { useEffect, useState } from "react";

interface IProps {
    textShadow: string;
}

function JSandCo({ textShadow }: IProps): JSX.Element {
    const [animation, setAnimation] = useState("");
    const [animation2, setAnimation2] = useState("");
    const [animation3, setAnimation3] = useState("");
    const [animation4, setAnimation4] = useState("");
    useEffect(() => {
        setAnimation(
            "transform md:translate-x-16 translate-x-10 transition-transform duration-2000",
        );
        setAnimation2(
            "transform md:translate-x-16 translate-x-10 transition-transform duration-1000",
        );
        setAnimation3(
            "transform md:-translate-x-16 -translate-x-10 transition-transform duration-1000",
        );
        setAnimation4(
            "transform md:-translate-x-16 -translate-x-10 transition-transform duration-2000",
        );
    }, []);
    return (
        <div
            className={`font-bold font-titilumWeb text-7xl md:text-9xl flex justify-center`}
        >
            <span
                className={`mx-1  ${animation}`}
                style={{ textShadow: textShadow }}
            >
                J
            </span>
            <span
                className={`mx-1  ${animation2}`}
                style={{ textShadow: textShadow }}
            >
                S
            </span>
            <span
                className="md:mx-20 mx-12 animate-fade  text-white "
                style={{ textShadow: textShadow }}
            >
                &
            </span>
            <span
                className={`mx-1 ${animation3}`}
                style={{ textShadow: textShadow }}
            >
                C
            </span>
            <span
                className={`mx-1 ${animation4}`}
                style={{ textShadow: textShadow }}
            >
                o
            </span>
        </div>
    );
}

export default JSandCo;
