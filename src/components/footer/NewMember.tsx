import React from "react";
import data from "FakeData/NouveauMembres.json";
import BlackButton from "@components/buttons/BlackButton";

function NewMembers({
    isVisibleSecFooter,
}: {
    isVisibleSecFooter: boolean;
}): JSX.Element {
    return (
        <div>
            {isVisibleSecFooter ? (
                <div
                    className=" lg:h-full bg-white font-titilumWeb flex flex-col justify-center items-center pt-20 pb-10 lg:pt-32  text-center mx-5 lg:mx-20  animate-fadeTop"
                    style={{
                        scrollSnapAlign: "start",
                    }}
                >
                    <h2 className="text-4xl tracking-wider font-bold lg:text-5xl border-b border-black pb-5">
                        {data.title}
                    </h2>
                    <p className="text-xl lg:text-xl mt-5 lg:mt-5">
                        {data.text}
                    </p>
                    <div className="mt-10">
                        <BlackButton link={data.link}>
                            {data.button}
                        </BlackButton>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default NewMembers;
