import React from "react";
import Image from "next/image";

function SocialMedia({ item }: { item: any }): JSX.Element {
    return (
        <div>
            <a href={item.link} target="_blank">
                <Image
                    src={item.image}
                    alt="NosRéseaux"
                    width={80}
                    height={80}
                />
            </a>
        </div>
    );
}

export default SocialMedia;
