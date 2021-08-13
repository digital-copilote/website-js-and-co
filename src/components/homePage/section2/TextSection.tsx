import BlackButton from "@components/buttons/BlackButton";
import { RootState } from "src/redux/reducer";
import { useSelector } from "react-redux";

function TextSection(): JSX.Element {
    const { actu } = useSelector((state: RootState) => state).content;
    return (
        <div className="pt-10 lg:h-event flex flex-col justify-between  font-titilumWeb tracking-widest lg:mx-10 mx-5">
            <div className="animate-fadeRight">
                <div className="border-b  border-black">
                    <h2 className={`lg:text-4xl text-4xl `}>{actu?.title_1}</h2>
                    <h3
                        className={`lg:text-lg text-ms font-bold lg:mt-5 mt-2  `}
                    >
                        {actu?.title_2}
                    </h3>
                </div>
                <p
                    className={`tracking-wide lg:text-base text-xs mt-2 lg:mt-5 leading-5 lg:leading-9`}
                >
                    {actu?.text}
                </p>
            </div>
            <div className="mt-8 lg:pb-7  animate-fadeRight border-b border-black">
                <BlackButton animation={null} link={""}>
                    Rejoindre le meetUp
                </BlackButton>
            </div>
        </div>
    );
}

export default TextSection;
