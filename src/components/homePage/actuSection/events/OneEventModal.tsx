import React, { Dispatch, SetStateAction } from "react";
import { allContent_content_events } from "__generated__/allContent";
import BlackButton from "../../../buttons/BlackButton";
import { motion, AnimatePresence } from "framer-motion";

interface Iprops {
    item: allContent_content_events | null;
    date: string;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function OneEventModal({ date, item, setIsOpen }: Iprops): JSX.Element {
    return (
        <div>
            <div
                onClick={() => setIsOpen(false)}
                className={`flex font-titilumWeb bg-white z-50 bg-opacity-80 justify-center items-center fixed inset-0 transition duration-500 `}
            >
                <AnimatePresence>
                    <motion.div
                        onClick={() => setIsOpen(false)}
                        key="modal"
                        animate={{ height: 600, opacity: 1 }}
                        initial={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        exit={{ height: 0 }}
                        className="w-10/12 h-10/12 cursor-pointer lg:9/12 px-5 lg:p-8 lg:mx-12 shadow-buttonShadow flex flex-col  border border-black justify-start z-50 text-black dark:text-white bg-customYellow dark:bg-component rounded-lg overflow-y-auto"
                    >
                        <div className="flex justify-between">
                            <div className="flex-col">
                                <h2 className="w-full text-3xl font-bold mt-2 lg:pr-20">
                                    {item?.title}
                                </h2>
                                <h3 className="text-xl mt-3">
                                    {`Rendez-vous le ${date}`}{" "}
                                </h3>
                                {/* Ajouter le lieux au data envoyer par strapi URGENT !!!! */}
                                <p className="text-xl mt-20 font-bold">
                                    Lieu du rendez-vous :
                                </p>
                                <p className="text-xl mt-3 font-bold">
                                    {"NovaMêlée 27 rue  d'Aubisson - Toulouse"}
                                </p>
                            </div>
                            <div
                                className="h-60 w-6/12 rounded-lg  flex-col items-end p-5  shadow-cardShadow border border-black hidden lg:flex"
                                style={{
                                    backgroundImage: `url(${item?.image})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                }}
                            ></div>
                        </div>
                        <p className="text-lg mt-10 mb-10">{item?.text}</p>

                        <BlackButton link={`${item?.register}`}>
                            Je m'inscrit
                        </BlackButton>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default OneEventModal;
