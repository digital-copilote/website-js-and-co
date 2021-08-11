import React from "react";
import data from "FakeData/HomePage/section2.json";
import OneEvent from "./OneEvent";

function Events(): JSX.Element {
    console.log(data.Events);
    return (
        <div className="md:mx-10 mx-5 h-96">
            <div>
                {data.Events.map((item) => {
                    return <OneEvent item={item} />;
                })}
            </div>
        </div>
    );
}

export default Events;
