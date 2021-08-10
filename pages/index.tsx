import Section1 from "@components/homePage/section1/Section1";
import Section2 from "@components/homePage/section2/Section2";
import { useOnScreen } from "hook/useOnScroll";

import React, { useRef } from "react";

// import { } from "@components";

const Home: React.FC = () => {
    const scrollRefSec1 = useRef();
    const scrollRefSec2 = useRef();

    const isVisibleSec1 = useOnScreen(scrollRefSec1);
    const isVisibleSec2 = useOnScreen(scrollRefSec2);

    return (
        <div>
            <Section1 Myref1={scrollRefSec1} />
            <Section2 Myref2={scrollRefSec2} isVisibleSec2={isVisibleSec2} />
        </div>
    );
};

export default Home;
