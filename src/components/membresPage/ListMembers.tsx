import React from "react";
import data from "FakeData/Members/Members.json";
import Image from "next/image";

function ListMembers(): JSX.Element {
    return (
        <div
            className="h-full w-screen bg-customYellow flex flex-wrap items-center justify-center overflow-y-auto"
            style={{ scrollSnapAlign: "start" }}
        >
            {data.Members.map((item, index) => {
                return (
                    <button
                        className="flex w-full items-center text-left mx-3 my-3"
                        key={index}
                    >
                        <div className="h-16 w-16 mr-5 rounded-full border shadow-buttonShadow border-black">
                            <Image
                                className="rounded-full"
                                src={item.picture}
                                alt="ProfilPicture"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="flex flex-col border-b border-black w-8/12 pb-2">
                            <div className="flex font-bold">
                                <p>{item.firstName}</p>
                                <p>{item.LastName}</p>
                            </div>
                            <p className="text-sm">{item.post}</p>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}

export default ListMembers;
