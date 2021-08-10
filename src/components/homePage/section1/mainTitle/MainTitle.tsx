import React, { useEffect, useState } from "react";
import JSandCo from "./JsandCo";
import Vulgarisation from "./Vulgarisation";
import Diffusion from "./Diffusion";
import Formation from "./Formation";
import Button from "./ButtonsSec1";

function MainTitle({ textShadow }: { textShadow: string }): JSX.Element {
    const [animation, setAnimation] = useState("");
    const [animation2, setAnimation2] = useState("");
    const [animation3, setAnimation3] = useState("");
    useEffect(() => {
        setAnimation(
            "transform -translate-y-24 transition-transform duration-2000",
        );
        setAnimation2(
            "transform -translate-y-24 transition-transform duration-1000",
        );
        setAnimation3(
            "transform -translate-y-24 transition-transform duration-1500",
        );
    }, []);
    return (
        <div>
            <JSandCo textShadow={textShadow} />
            <Vulgarisation
                textShadow={textShadow}
                animation={animation}
                animation2={animation2}
                animation3={animation3}
            />
            <Diffusion
                textShadow={textShadow}
                animation={animation}
                animation2={animation2}
                animation3={animation3}
            />
            <Formation
                textShadow={textShadow}
                animation={animation}
                animation2={animation2}
                animation3={animation3}
            />
            <Button animation={animation} />
        </div>
    );
}

export default MainTitle;
