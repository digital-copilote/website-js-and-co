import Footer from "@components/footer/Footer";
import Members from "@components/membresPage/Members";
import React from "react";

function nosmembres(): JSX.Element {
    return (
        <div>
            <Members />
            <Footer />
        </div>
    );
}

export default nosmembres;
