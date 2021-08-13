import React from "react";
import Image from "next/image";

function SocialMedia({ item }: { item: any }): JSX.Element {
    return (
        <div>
            <button>
                <Image
                    src={item.image}
                    alt="NosRéseaux"
                    width={80}
                    height={80}
                />
            </button>
        </div>
    );
}

export default SocialMedia;
