import React from "react";
import data from "FakeData/Members/Members.json";
import OneMembers from "./OneMember";

function Members(): JSX.Element {
    return (
        <div
            className="h-screen w-screen flex flex-col justify-center font-titilumWeb bg-customYellow px-5 pt-20"
            style={{ scrollSnapAlign: "start" }}
        >
            <div className="text-center pb-5 border-b border-black animate-fadeTop">
                <h2 className="text-5xl lg:text-6xl font-bold">
                    {data.Intro.title}
                </h2>
            </div>
            <div className="h-full w-full lg:w-full bg-customYellow flex flex-wrap lg:items-center lg:justify-center animate-fadeBottom  overflow-y-auto py-5">
                {data.Members.map((item, index) => {
                    return (
                        <div className="w-full lg:w-52" key={index}>
                            <OneMembers item={item} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Members;
