import React, { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function SideBar({
    data,
    setIsSidebar,
}: {
    data: INavBar_items[];
    setIsSidebar: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
    const router = useRouter();

    return (
        <motion.div
            className={`bg-customYellow h-screen animate-fadeRight z-50 `}
        >
            <motion.div className="flex flex-col py-10 w-screen">
                {data.map((item, index) => {
                    return (
                        <a
                            href={item.link}
                            key={index}
                            onClick={(e) => {
                                e.preventDefault();
                                router.push(item.link);
                                setIsSidebar((c) => !c);
                            }}
                            className="lg:mx-4 mx-2 my-5 text-xl font-bold text-left"
                        >
                            {item.name}
                        </a>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}

export default SideBar;
