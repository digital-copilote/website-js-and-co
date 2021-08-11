import React from "react";
import OneEvent from "./OneEvent";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/reducer";

function Events(): JSX.Element {
    const { events } = useSelector((state: RootState) => state.content);

    console.log("events", events);
    if (events?.length === 0) {
        return (
            <div className="lg:mx-10 mx-5 h-96">
                <p className="font-titilumWeb text-4xl">No events found</p>
            </div>
        );
    }
    return (
        <div className="lg:mx-10 mx-5 h-96">
            <div>
                {events?.map((item) => {
                    return <OneEvent item={item} />;
                })}
            </div>
        </div>
    );
}

export default Events;
