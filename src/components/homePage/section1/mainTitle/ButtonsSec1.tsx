import React from "react";
import data from "../../../../../FakeData/HomePage/section1.json";

function Button({ animation }: { animation: string }): JSX.Element {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center w-full mt-24">
            <button
                className={`w-11/12 sm:w-60 p-2 my-4 sm:mx-4 sm:my-0 animate-fade shadow-buttonShadow bg-black rounded-md text-customYellow ${animation}`}
            >
                {/* data to fetch ref to section1.json files */}
                {data.button1.title}
            </button>
            <button
                className={`w-11/12 sm:w-60 p-2 my-4 sm:mx-4 sm:my-0  animate-fade shadow-buttonShadow bg-black rounded-md text-customYellow ${animation}`}
            >
                {/* data to fetch ref to section1.json files */}
                {data.button2.title}
            </button>
        </div>
    );
}

export default Button;
