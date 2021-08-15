import React from "react";
import SMData from "FakeData/HomePage/RéseauxSociaux.json";
import NBData from "FakeData/navBar.json";
import PartnersData from "FakeData/HomePage/NosPartenaires.json";
import router from "next/router";
import BlackButton from "@components/buttons/BlackButton";

function Footer(): JSX.Element {
    return (
        <div
            className="h-screen font-titilumWeb flex flex-col w-screen pt-12 relative bg-white"
            style={{
                scrollSnapAlign: "start",
            }}
        >
            <div className="h-screen p-5 bg-customYellow">
                <div className="flex w-full justify-around">
                    <ul className="flex justify-center text-xs">
                        <li className="w-20 flex flex-col mx-5">
                            <p className="text-sm font-bold">Nos Réseaux</p>
                            {SMData.iconRéseaux.map((item, index) => {
                                return (
                                    <a
                                        className="my-1 underline"
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                    >
                                        {item.name}
                                    </a>
                                );
                            })}
                        </li>
                        <li className="w-20 flex flex-col mx-5">
                            <p className="text-sm font-bold">Nos liens</p>
                            {NBData.map((item, index) => {
                                return (
                                    <a
                                        className="my-1 underline"
                                        key={index}
                                        onClick={() =>
                                            router.push(`${item.link}`)
                                        }
                                    >
                                        {" "}
                                        {item.li}
                                    </a>
                                );
                            })}
                        </li>
                        <li className="w-20 flex flex-col mx-5">
                            <p className="text-sm font-bold">
                                {PartnersData.nosPartenaires.title}
                            </p>
                            {PartnersData.partenaire.map((item, index) => {
                                return (
                                    <a
                                        className="my-1 underline"
                                        key={index}
                                        onClick={() =>
                                            router.push(`${item.link}`)
                                        }
                                    >
                                        {" "}
                                        {item.name}
                                    </a>
                                );
                            })}
                        </li>
                    </ul>
                </div>
                <form className="w-full flex mt-5 flex-col" action="">
                    <h2 className="font-bold text-xl mb-2">Nous Contacté</h2>
                    <label htmlFor="">Email</label>
                    <input
                        className="mt-1 bg-customYellow border border-black rouded-md"
                        type="text"
                    />
                    <label className="mt-2" htmlFor="">
                        Message
                    </label>
                    <textarea className="mt-1" />
                    <button
                        className={`w-52 lg:w-52 p-1 my-4 text-sm lg:my-0 animate-fade shadow-buttonShadow bg-black rounded-md text-customYellow transform hover:scale-105 `}
                    >
                        Envoyer
                    </button>
                </form>
                <p className="text-xs mt-5 text-center">
                    Design by ThomasBarrial / Develop by Thomas Barrial and
                    Julien Abbadie / Produce by @DigitialCopilote
                </p>
            </div>
        </div>
    );
}

export default Footer;
