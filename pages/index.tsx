import Section1 from "@components/homePage/section1/Section1";
import Section2 from "@components/homePage/section2/Section2";

import React from "react";

// import { } from "@components";

const Home: React.FC = () => {
    return (
        <div
            className="h-screen overflow-y-scroll"
            style={{ scrollSnapType: "y mandatory" }}
        >
            <Section1 />
            <Section2 />
        </div>
    );
};

export default Home;
