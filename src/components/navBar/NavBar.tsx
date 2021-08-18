import React from "react";
import data from "FakeData/navBar.json";
import { useRouter } from "next/router";

function NavBar(): JSX.Element {
    const router = useRouter();

    return (
        <div
            className="bg-customYellow px-5 py-3 font-titilumWeb z-50 sticky top-0"
            style={{ textShadow: "5px 5px 10px rgba(0, 0, 0, 0.25)" }}
        >
            <div className="hidden lg:flex text-ms items-center justify-center lg:justify-start z-10 animate-fade">
                {data.map((item, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => router.push(item.link)}
                            className="lg:mx-4 mx-2"
                        >
                            {item.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default NavBar;
