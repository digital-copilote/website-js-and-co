import BlackButton from "@components/buttons/BlackButton";
import React from "react";
import data from "../../../../../FakeData/HomePage/section1.json";

function Button(): JSX.Element {
    return (
        <div className="flex flex-col text-sm md:text-xs md:flex-row justify-center items-center w-full md:mt-20 mt-10">
            <BlackButton link={data.button1.link}>
                {data.button1.title}
            </BlackButton>
            <BlackButton link={data.button2.link}>
                {data.button2.title}
            </BlackButton>
        </div>
    );
}

export default Button;
