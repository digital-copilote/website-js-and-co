import React from "react";

function Section4(): JSX.Element {
    return (
        <div
            className="h-screen w-screen flex pt-10 md:px-10  lg:px-10 items-center bg-white"
            style={{ scrollSnapAlign: "start" }}
        >
            <div className="flex flex-col w-full items-center justify-center text-center">
                <h2>Qui Sommes Nous ?</h2>
                <span>
                    Toulouse est notre coeur, La Cantine notre QG, Le web notre
                    repaire.
                </span>
                <span>
                    Entrée en contact avec notre communeauté a travers nos
                    réseaux Devenez membre pour avoir les différents accès à nos
                    pateformes de communication.
                </span>
            </div>
        </div>
    );
}

export default Section4;
