import { RootState } from "src/redux/reducer";
import { useSelector } from "react-redux";
import YellowButton from "@components/buttons/YellowButton";

function TextSection(): JSX.Element {
    const { actu } = useSelector((state: RootState) => state).content;
    return (
        <div className="pt-2 lg:h-event flex flex-col justify-between  font-titilumWeb tracking-wider lg:mx-10 mx-5">
            <div className="animate-fadeRight">
                <div className="border-b  border-black">
                    <h2 className={`text-4xl lg:text-5xl font-bold`}>
                        {actu?.title_1}
                    </h2>
                    <h3 className={`lg:text-lg text-xl font-bold lg:mt-5 mt-2`}>
                        {actu?.title_2}
                    </h3>
                </div>
                <p
                    className={`tracking-wide lg:text-base text-xs mt-2 lg:mt-5 leading-5 lg:leading-9`}
                >
                    {actu?.text}
                </p>
            </div>
            <div className="mt-5 lg:pb-7  animate-fadeRight border-b border-black">
                <YellowButton
                    link={"https://www.meetup.com/fr-FR/JavaScript-and-Co/"}
                >
                    Rejoindre le meetUp
                </YellowButton>
            </div>
        </div>
    );
}

export default TextSection;
