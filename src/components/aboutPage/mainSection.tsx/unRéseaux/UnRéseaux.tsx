import React from "react";
import Image from "next/image";
import data from "FakeData/AboutPage/UnRéseaux.json";

function UnRéseaux(): JSX.Element {
    return (
        <div
            className="h-screen w-screen flex flex-col justify-center pt-10 px-5 lg:px-10 items-center bg-white"
            style={{ scrollSnapAlign: "start" }}
        >
            <div className="font-titilumWeb text-center">
                <h1 className="text-5xl font-bold z-30  transform translate-y-20">
                    {data.title}
                </h1>
                <h1 className="text-7xl z-10 font-bold opacity-20 text-customYellow">
                    {data.title}
                </h1>
                <p className="text-xl leading-8 my-5 border-b border-black pb-10">
                    {data.text}
                </p>
            </div>
            <Image src={data.image} alt="Un Réseaux" height={250} width={250} />
        </div>
    );
}

export default UnRéseaux;
