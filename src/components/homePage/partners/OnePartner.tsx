import React from "react";
import { motion } from "framer-motion";

function OnePartner({ item }: { item: any }): JSX.Element {
    return (
        <div className="lg:my-1 w-full my-2 rounded-lg py-2 lg:w-96 lg:h-80 flex flex-col items-center justify-center bg-white  border border-black shadow-buttonShadow transition duration-500 transform hover:scale-105">
            <a
                href={item.link}
                target="_blank"
                className="w-40 h-20 lg:w-44 lg:h-32"
                style={{
                    backgroundImage: `url(${item.logo})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                }}
            />
            <h3 className="font-bold text-lg lg:text-2xl lg:mt-5">
                {item.name}
            </h3>
            <span className="text-xs px-10 lg:text-sm">{item.text}</span>
            <motion.a
                target="_blank"
                whileTap={{ scale: 0.9 }}
                className="bg-black mt-2 text-customYellow text-xs lg:mt-5 py-1 px-12 shadow-buttonShadow rounded-md transform hover:scale-105"
                href={item.link}
            >
                En Savoir Plus
            </motion.a>
        </div>
    );
}

export default OnePartner;
