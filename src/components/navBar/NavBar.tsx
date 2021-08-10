import React from "react";
import data from "FakeData/navBar.json";

function NavBar(): JSX.Element {
    console.log(data);
    return (
        <div
            className="bg-customYellow px-5 py-3 font-titilumWeb z-50 sticky top-0"
            style={{ textShadow: "5px 5px 10px rgba(0, 0, 0, 0.25)" }}
        >
            <ul className="flex text-ms items-center justify-center md:justify-start z-10 animate-fade">
                {data.map((item) => {
                    return <li className="md:mx-4 mx-2">{item.li}</li>;
                })}
            </ul>
        </div>
    );
}

export default NavBar;
