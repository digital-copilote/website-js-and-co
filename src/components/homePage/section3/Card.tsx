import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import CardContent from "./CardContent";
import { allContent_content_action_action_cards } from "__generated__/allContent";

function Card({
    item,
}: {
    item: allContent_content_action_action_cards | null;
}): JSX.Element {
    const [isModal, setIsModal] = useState(false);
    return (
        <div>
            {isModal && (
                <div className="bg-white bg-opacity-50 h-screen w-screen justify-center items-center">
                    <CardContent item={item} />
                </div>
            )}
            <motion.button
                onClick={() => {
                    setIsModal(true);
                }}
                className=" relative h-24 w-24 ml-3"
                whileTap={{ scale: 0.9 }}
            >
                <Image
                    className="z-40"
                    src={`${item?.image}`}
                    alt="cardIcon"
                    layout="fill"
                />
            </motion.button>
            <CardContent item={item} />
        </div>
    );
}

export default Card;
