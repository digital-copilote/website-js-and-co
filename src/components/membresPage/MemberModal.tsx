import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";

function MemberModal({
    setIsModal,
    item,
}: {
    setIsModal: Dispatch<SetStateAction<boolean>>;
    item: any;
}): JSX.Element {
    // console.log(item);
    return (
        <div
            onClick={() => setIsModal(false)}
            className={`flex font-titilumWeb bg-white bg-opacity-80 z-50 justify-center items-center fixed inset-0 transition duration-500 `}
        >
            <AnimatePresence>
                <motion.div
                    onClick={() => setIsModal(false)}
                    key="modal"
                    animate={{ height: 600, opacity: 1 }}
                    initial={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    exit={{ height: 0 }}
                    className="w-10/12 h-10/12 shadow-buttonShadow cursor-pointer lg:9/12  lg:p-0 lg:mx-12 flex flex-col items-center  border border-black justify-start z-50 text-black dark:text-white  bg-white rounded-lg overflow-y-auto"
                >
                    <div className="lg:h-36 h-28 w-full bg-customYellow"></div>
                    <div className="lg:w-full lg:px-10 transform -translate-y-20 flex flex-col items-center lg:items-start">
                        <div
                            className="h-40 w-40 rounded-full border-4 border-white "
                            style={{
                                backgroundImage: `url(${item.picture})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                        <div className="flex font-bold text-2xl lg:text-4xl mt-5">
                            <h2 className="mr-2">{item.firstName}</h2>
                            <h2>{item.LastName}</h2>
                        </div>

                        <h3 className="text-xl lg:text-3xl">{item.post}</h3>
                        <a
                            className="text-sm lg:text-lg mt-2 lg:mt-5"
                            href={item.portfolio}
                            target="_blank"
                        >
                            {" "}
                            portfolio : {item.portfolio}
                        </a>
                        <p className="text-center lg:text-xl lg:text-left mt-5">
                            {item.description}
                        </p>
                        <div className="flex w-full justify-around lg:justify-start mt-10">
                            {item.link.map(
                                (
                                    link: {
                                        name: string;
                                        link: string;
                                    },
                                    index: React.Key | null | undefined,
                                ) => {
                                    return (
                                        <div
                                            className="text-center text-sm lg:text-base lg:mr-5 underline"
                                            key={index}
                                        >
                                            <a href={link.link} target="_blank">
                                                {link.name}
                                            </a>
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default MemberModal;
