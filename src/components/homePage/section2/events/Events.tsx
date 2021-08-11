import React from "react";
import OneEvent from "./OneEvent";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/reducer";

function Events(): JSX.Element {
    const { event } = useSelector((state: RootState) => state.content);
    console.log("events", event);
    return (
        <div className="md:mx-10 mx-5 h-96">
            <div>
                {event?.map((item) => {
                    return <OneEvent item={item} />;
                })}
            </div>
        </div>
    );
}

export default Events;
