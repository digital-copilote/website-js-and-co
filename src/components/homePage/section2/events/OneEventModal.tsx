import React, { Dispatch, SetStateAction } from "react";
import { allContent_content_events } from "__generated__/allContent";
import BlackButton from "../../../buttons/BlackButton";
import CloseButton from "../../../buttons/CloseButton";
import { motion, AnimatePresence } from "framer-motion";

interface Iprops {
    isOpen: boolean;
    item: allContent_content_events | null;
    date: string;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function OneEventModal({ date, isOpen, item, setIsOpen }: Iprops): JSX.Element {
    return (
        <div>
            {isOpen && (
                <div
                    className={`flex font-titilumWeb bg-white z-50 bg-opacity-80 justify-center items-center fixed inset-0 transition duration-500 `}
                >
                    <div className="fixed inset-0 z-50 " />

                    <AnimatePresence>
                        <motion.div
                            key="modal"
                            animate={{ height: 600 }}
                            initial={{ height: 0 }}
                            transition={{ duration: 0.5 }}
                            exit={{ height: 0 }}
                            className="w-10/12 lg:9/12 shadow-buttonShadow flex flex-col  border border-black justify-start z-50 text-black dark:text-white bg-customYellow dark:bg-component rounded-lg"
                        >
                            <div className="flex lg:hidden w-full justify-end mt-3 pr-3">
                                <CloseButton setIsOpen={setIsOpen} />
                            </div>
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
                                        <CloseButton setIsOpen={setIsOpen} />
                                    </div>
                                    <motion.div
                                        animate={{ opacity: 1 }}
                                        initial={{ opacity: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="text-center mx-8 lg:mx-24 lg:my-14"
                                    >
                                        <h2 className="w-full text-center text-3xl font-bold mt-2 md:mt-5">
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

                                        <BlackButton link={`${item?.register}`}>
                                            Je m'inscrit
                                        </BlackButton>
                                    </motion.div>
                                </div>
                            </div>

                            <div className="flex"></div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
}

export default OneEventModal;
