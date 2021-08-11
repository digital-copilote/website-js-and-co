import React, { Dispatch, SetStateAction, useState } from "react";
import { allContent_content_event } from "__generated__/allContent";
import BlackButton from "../../../buttons/BlackButton";
import Image from "next/image";

interface Iprops {
    isOpen: boolean;
    item: allContent_content_event | null;
    date: string;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function OneEventModal({ date, isOpen, item, setIsOpen }: Iprops): JSX.Element {
    const [animation, setAniamtion] = useState("");
    return (
        <div>
            {isOpen && (
                <div
                    className={`flex font-titilumWeb bg-white animate-fadeFast  z-50 bg-opacity-80 justify-center items-center fixed inset-0 transition duration-500  ${animation}`}
                >
                    <div className="fixed inset-0 z-50 " />

                    <div className=" w-9/12 shadow-buttonShadow animate-fadeFast  flex flex-col  border border-black justify-start z-50 text-black dark:text-white bg-customYellow dark:bg-component rounded-lg">
                        <div className="mb-6 text-xs sm:text-xs">
                            <div>
                                <div
                                    className="h-52 w-full rounded-t-lg  flex-col items-end p-5  shadow-cardShadow border border-black hidden lg:flex"
                                    style={{
                                        backgroundImage: `url(${item?.image})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                >
                                    <button
                                        className="transition duration-500 transform hover:scale-125 hover:opacity-95"
                                        onClick={() => {
                                            setIsOpen(false);
                                            setAniamtion(
                                                "transition duration-1000 scale-50 animation-fade",
                                            );
                                        }}
                                    >
                                        <Image
                                            className="shadow-buttonShadow"
                                            src="/icons/CloseButton.svg"
                                            alt="close Button"
                                            height="25x"
                                            width="25px"
                                        />
                                    </button>
                                </div>
                                <div className="text-center mx-8 lg:mx-24 lg:my-14">
                                    <h2 className="w-full text-center text-3xl font-bold mt-5">
                                        {item?.title}
                                    </h2>
                                    <h3 className="text-xl mt-3">
                                        {`Rendez-vous le ${date}`}{" "}
                                    </h3>
                                    {/* Ajouter le lieux au data envoyer par strapi URGENT !!!! */}
                                    <p className="text-xl mt-3 font-bold">
                                        {
                                            "Lieu du rendez-vous : La cantine Toulouse"
                                        }
                                    </p>
                                    <p className="text-lg mt-3 mb-10">
                                        {item?.text}
                                    </p>

                                    <BlackButton
                                        link={`${item?.register}`}
                                        animation={
                                            "transition duration-500 transform hover:scale-105 hover:opacity-90"
                                        }
                                    >
                                        Je m'inscrit
                                    </BlackButton>
                                </div>
                            </div>
                        </div>

                        <div className="flex"></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OneEventModal;
