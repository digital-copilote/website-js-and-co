import React from "react";
import data from "FakeData/Members/Members.json";
import Image from "next/image";
import ListMembers from "./ListMembers";

function Members(): JSX.Element {
    return (
        <div
            className="h-screen w-screen flex flex-col justify-center items-center font-titilumWeb bg-customYellow px-5 lg:px-32 pt-24 lg:pt-52"
            style={{ scrollSnapAlign: "start" }}
        >
            <div className="text-center pb-5 border-b border-black">
                <h2 className="text-5xl lg:text-7xl font-bold">
                    {data.Intro.title}
                </h2>
            </div>
            <ListMembers />
        </div>
    );
}

export default Members;
