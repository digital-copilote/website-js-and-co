import React, { SetStateAction, Dispatch } from "react";
import Image from "next/image";

interface IProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    setAnimation: Dispatch<SetStateAction<string>>;
}

function CloseButton({ setIsOpen, setAnimation }: IProps): JSX.Element {
    return (
        <div>
            <button
                className="transition duration-500 transform hover:scale-125 hover:opacity-95"
                onClick={() => {
                    setIsOpen(false);
                    setAnimation(
                        "transition duration-1000 scale-50 animation-fade",
                    );
                }}
            >
                <Image
                    className="shadow-buttonShadow"
                    src="/icons/CloseButton.svg"
                    alt="close Button"
                    height="25px"
                    width="25px"
                />
            </button>
        </div>
    );
}

export default CloseButton;
