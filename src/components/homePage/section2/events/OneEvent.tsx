import { allContent_content_events } from "__generated__/allContent";
import OneEventModal from "./OneEventModal";
import { useState } from "react";

function OneEvent({
    item,
}: {
    item: allContent_content_events | null;
}): JSX.Element {
    const date = new Date(item?.date).toLocaleDateString();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [ImgAnimation, setImgAnimation] = useState("");
    const [textAnimation, settextAnimation] = useState("");

    return (
        <div>
            {isOpen && (
                <OneEventModal
                    date={date}
                    item={item}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                ></OneEventModal>
            )}
            <button
                onMouseEnter={() => {
                    setImgAnimation(
                        "transform transition-transform duration-1000  -translate-y-2 -translate-x-2",
                    );
                    settextAnimation(
                        "transform transition-transform duration-1000  -translate-y-1 translate-x-1",
                    );
                }}
                onMouseLeave={() => {
                    setImgAnimation(
                        "transform transition-transform duration-1000  translate-y-0 translate-x-0",
                    );
                    settextAnimation(
                        "transform transition-transform duration-1000  translate-y-0 -translate-x-0",
                    );
                }}
                onClick={() => setIsOpen(true)}
                className=" text-left transition duration-500 flex justify-start fong-titilumWeb rounded-lg mt-8 border animate-fade shadow-cardShadow border-black transform hover:-translate-y-1 hover:scale-105"
            >
                <div
                    className={`w-4/12 rounded-lg  animate-fade shadow-cardShadow border border-black hidden lg:flex ${ImgAnimation}`}
                    style={{
                        backgroundImage: `url(${item?.image})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div
                    className={`md:w-8/12 mr-2  p-2 flex-col ${textAnimation} text-textShad`}
                    style={{ textShadow: "2px 2px 15px rgba(0, 0, 0, 0.3)" }}
                >
                    <h3 className="text-lg font-bold">{item?.title}</h3>
                    <h4 className="text-sm mt-1">{date}</h4>
                    <div className="h-8  pb-5 mt-2 overflow-hidden overflow-ellipsis">
                        <p className="text-xs leading-4">{item?.text}</p>
                    </div>

                    <a className="mt-2 text-xs underline">Plus d'infos</a>
                </div>
            </button>
        </div>
    );
}

export default OneEvent;
