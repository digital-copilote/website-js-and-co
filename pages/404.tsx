import BlackButton from "@components/buttons/BlackButton";
import React from "react";

function custom404(): JSX.Element {
    return (
        <div className="h-screen w-screen bg-customYellow flex justify-center items-center">
            <div className="flex flex-col items-center text-center font-titilumWeb">
                <p className="text-8xl font-bold animate-fadeTop">404</p>
                <p className="animate-fadeMid text-xl my-5">
                    Sorry the page you were looking for doesn't seem to exist
                    anymore
                </p>
                <BlackButton link={"/"}>{"back to JS&Co"}</BlackButton>
            </div>
        </div>
    );
}

export default custom404;
