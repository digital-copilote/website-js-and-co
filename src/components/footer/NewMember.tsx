import React from "react";
import data from "FakeData/NouveauMembres.json";
import BlackButton from "@components/buttons/BlackButton";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/reducer";

function NewMembers(): JSX.Element {
    const { title_1, text } = useSelector(
        (state: RootState) => state.newMember,
    );
    return (
        <div
            style={{
                scrollSnapAlign: "start",
            }}
        >
            <div className=" lg:h-full bg-white font-titilumWeb flex flex-col justify-center items-center pt-20 pb-10 lg:pt-32  text-center mx-5 lg:mx-20 animate-fadeBottom">
                <h2 className="text-4xl tracking-wider font-bold lg:text-5xl border-b border-black pb-5">
                    {title_1}
                </h2>
                <p className="text-xl lg:text-xl lg:leading-10 mt-5 lg:mt-5">
                    {text}
                </p>
                <div className="mt-10">
                    <BlackButton link={data.link}>{data.button}</BlackButton>
                </div>
            </div>
        </div>
    );
}

export default NewMembers;
