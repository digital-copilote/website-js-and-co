import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function BlackButton({ children, link }: IButton): JSX.Element {
    const router = useRouter();

    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => router.push(link)}
            className={`w-52 lg:w-52 p-1 my-4 text-sm  lg:my-0 animate-fade shadow-buttonShadow bg-black rounded-md text-customYellow transform hover:scale-105 `}
        >
            {children}
        </motion.button>
    );
}

export default BlackButton;
