import React, { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { UrlObject } from "url";
import { motion } from "framer-motion";

function SideBar({
    data,
    setIsSidebar,
}: {
    data: any;
    setIsSidebar: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
    const router = useRouter();

    return (
        <motion.div
            className={`bg-customYellow h-screen animate-fadeRight z-50 `}
        >
            <motion.div className="flex flex-col py-10 w-screen">
                {data.map(
                    (
                        item: {
                            link: string | UrlObject;
                            name:
                                | boolean
                                | React.ReactChild
                                | React.ReactFragment
                                | React.ReactPortal
                                | null
                                | undefined;
                        },
                        index: React.Key | null | undefined,
                    ) => {
                        return (
                            <button
                                key={index}
                                onClick={() => {
                                    router.push(item.link);
                                    setIsSidebar((c) => !c);
                                }}
                                className="lg:mx-4 mx-2 my-5 text-xl font-bold text-left"
                            >
                                {item.name}
                            </button>
                        );
                    },
                )}
            </motion.div>
        </motion.div>
    );
}

export default SideBar;
