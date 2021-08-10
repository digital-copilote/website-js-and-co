import React from "react";
import data from "../../../../../FakeData/HomePage/section1.json";

function Button({ animation }: { animation: string }): JSX.Element {
    return (
        <div className="flex flex-col text-sm md:text-xs md:flex-row justify-center items-center w-full md:mt-20 mt-10">
            <button
                className={`w-11/12 md:w-52 p-2 my-4 md:mx-4 md:my-0 animate-fade shadow-buttonShadow bg-black rounded-md text-customYellow ${animation}`}
            >
                {/* data to fetch ref to section1.json files */}
                {data.button1.title}
            </button>
            <button
                className={`w-11/12 md:w-52 p-2 my-4 md:mx-4 md:my-0  animate-fade shadow-buttonShadow bg-black rounded-md text-customYellow ${animation}`}
            >
                {/* data to fetch ref to section1.json files */}
                {data.button2.title}
            </button>
        </div>
    );
}

export default Button;
