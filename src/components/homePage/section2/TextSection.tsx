import React from "react";
import data from "FakeData/HomePage/section2.json";
import BlackButton from "@components/buttons/BlackButton";

function TextSection(): JSX.Element {
    return (
        <div className="pt-10 md:h-event flex flex-col justify-between  font-titilumWeb tracking-widest md:mx-10 mx-5">
            <div className="animate-fadeRight">
                <div className="border-b  border-black">
                    <h2 className={`md:text-4xl text-4xl `}>
                        {data.textSection.title1}
                    </h2>
                    <h3
                        className={`md:text-lg text-ms font-bold md:mt-5 mt-2  `}
                    >
                        {data.textSection.title2}
                    </h3>
                </div>
                <p
                    className={`tracking-wide md:text-base text-xs mt-2 md:mt-5 leading-5 md:leading-9`}
                >
                    {data.textSection.text}
                </p>
            </div>
            <div className="mt-5  md:pb-7  animate-fadeRight border-b border-black">
                <div className="">
                    <BlackButton
                        animation={null}
                        link={data.textSection.lienMeetUp}
                    >
                        Rejoindre le meetUp
                    </BlackButton>
                </div>
            </div>
        </div>
    );
}

export default TextSection;
