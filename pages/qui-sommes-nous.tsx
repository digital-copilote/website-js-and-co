import AboutUs from "@components/aboutPage/AboutUs";
import DesEntrepreneurs from "@components/aboutPage/DesEntrepreneurs";
import DesFormation from "@components/aboutPage/DesFormation";
import UneExpertise from "@components/aboutPage/UneExpertise";
import UnRéseaux from "@components/aboutPage/UnRéseaux";
import Footer from "@components/footer/Footer";

import React from "react";

function quisommesnous(): JSX.Element {
    return (
        <div>
            <AboutUs />
            <UnRéseaux />
            <UneExpertise />
            <DesEntrepreneurs />
            <DesFormation />
            <Footer />
        </div>
    );
}

export default quisommesnous;
