import { allContent_content_event } from "__generated__/allContent";

function OneEvent({
    item,
}: {
    item: allContent_content_event | null;
}): JSX.Element {
    console.log(item);
    return (
        <div className=" flex fong-titilumWeb rounded-lg mt-5 border animate-fade shadow-cardShadow border-black">
            <div
                className="w-4/12 rounded-lg  animate-fade shadow-cardShadow border border-black hidden md:flex"
                style={{
                    backgroundImage: `url(${item?.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
            <div className="w-8/12 p-2 flex-col" style={{ opacity: 1 }}>
                <h3 className="text-lg font-bold">{item?.title}</h3>
                <h4 className="text-sm mt-1">
                    {new Date(item?.date).toLocaleDateString()}
                </h4>
                <div className="h-8 mt-2 overflow-hidden overflow-ellipsis">
                    <p className="text-xs leading-4">{item?.text}</p>
                </div>

                <button className="mt-2 text-xs underline">Plus d'infos</button>
            </div>
        </div>
    );
}

export default OneEvent;
