import React from "react";

function ListItem({ data, title }: { data: any; title: string }): JSX.Element {
    return (
        <li className="w-32 lg:w-36 flex flex-col lg:mx-5">
            <p className="text-sm lg:text-base font-bold">{title}</p>
            {data?.map(
                (
                    item: {
                        link: string | undefined;
                        name:
                            | boolean
                            | React.ReactChild
                            | React.ReactFragment
                            | React.ReactPortal
                            | null
                            | undefined;
                    },
                    index: React.Key | null | undefined,
                ) => {
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
                },
            )}
        </li>
    );
}

export default ListItem;
