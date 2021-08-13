import React, { SetStateAction, Dispatch } from "react";
import Image from "next/image";

interface IProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function CloseButton({ setIsOpen }: IProps): JSX.Element {
    return (
        <div>
            <button
                className="transition duration-500 transform hover:scale-125 hover:opacity-95"
                onClick={() => {
                    setIsOpen(false);
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
