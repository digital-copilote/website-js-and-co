import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function YellowButton({ children, link }: IButton): JSX.Element {
    const router = useRouter();
    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => router.push(link)}
            className={`w-52 lg:w-52 p-1 my-4 text-sm  lg:my-0 animate-fade shadow-buttonShadow bg-customYellow font-bold rounded-md text-black transform hover:scale-105 `}
        >
            {/* data to fetch ref to section1.json files */}
            {children}
        </motion.button>
    );
}

export default YellowButton;
