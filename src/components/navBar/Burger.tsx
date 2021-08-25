import React from "react";

function Burger({ isSideBar }: { isSideBar: boolean }): JSX.Element {
    return (
        <div className="h-30 w-30">
            {!isSideBar && (
                <div className="w-8 h-1 bg-black my-1 rounded-lg"></div>
            )}
            <div
                className={`w-8 h-1 bg-black my-1 rounded-lg ${
                    isSideBar && `animate-rotateDown`
                }`}
            ></div>
            <div
                className={`w-8 h-1 bg-black my-1 rounded-lg ${
                    isSideBar && `animate-rotateUp`
                }`}
            ></div>
        </div>
    );
}

export default Burger;
