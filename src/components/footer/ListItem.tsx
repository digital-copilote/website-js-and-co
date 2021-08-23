import React from "react";
import {
    allContent_content_partners_partners,
    allContent_content_socialMedia_icons,
} from "__generated__/allContent";

interface IProps {
    data:
        | allContent_content_socialMedia_icons[]
        | allContent_content_partners_partners[]
        | INavBar_items[];
    title: string | null;
}

function ListItem({ data, title }: IProps): JSX.Element {
    return (
        <li className="w-32 lg:w-36 flex flex-col lg:mx-5">
            <p className="text-sm lg:text-base font-bold">{title}</p>
            {data?.map((item, index) => {
                return (
                    <a
                        className="my-1 underline lg:text-sm"
                        key={index}
                        href={item.link}
                        target="_blank"
                    >
                        {item.name}
                    </a>
                );
            })}
        </li>
    );
}

export default ListItem;
