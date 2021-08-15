import React from "react";
import { motion } from "framer-motion";

function OnePartner({ item }: { item: any }): JSX.Element {
    return (
        <div className="my-10 flex flex-col items-center px-5 lg:px-14">
            <a
                href={item.link}
                target="_blank"
                className="w-40 h-20 lg:w-56 lg:h-44"
                style={{
                    backgroundImage: `url(${item.logo})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                }}
            />
            <h3 className="font-bold text-xl lg:text-3xl mt-5">{item.name}</h3>
            <span className="text-xs lg:text-lg mt-5">{item.text}</span>
            <motion.a
                target="_blank"
                whileTap={{ scale: 0.9 }}
                className="mt-10 bg-black text-customYellow py-1 px-12 shadow-buttonShadow rounded-md transform hover:scale-105"
                href={item.link}
            >
                En Savoir Plus
            </motion.a>
        </div>
    );
}

export default OnePartner;
