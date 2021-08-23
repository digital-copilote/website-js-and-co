import React, { MutableRefObject, useRef } from "react";
import NBData from "FakeData/navBar.json";
// import SMData from "FakeData/HomePage/RéseauxSociaux.json";
// import PartnersData from "FakeData/HomePage/NosPartenaires.json";
import ListItem from "./ListItem";
import ContactForm from "./ContactForm";
import NewMembers from "./NewMember";
import { useOnScreen } from "hook/useOnScroll";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/reducer";

function Footer(): JSX.Element {
    const scrollRefSecFooter = useRef();
    const isVisibleSecFooter = useOnScreen(
        scrollRefSecFooter as unknown as MutableRefObject<HTMLDivElement>,
    );
    const SMData = useSelector((state: RootState) => state.socialMedia);
    const PartnersData = useSelector((state: RootState) => state.partners);

    return (
        <div
            className="lg:h-screen font-titilumWeb flex flex-col justify-between"
            style={{
                scrollSnapAlign: "start",
            }}
            ref={
                scrollRefSecFooter as unknown as MutableRefObject<HTMLDivElement>
            }
        >
            {isVisibleSecFooter && <NewMembers />}
            {isVisibleSecFooter ? (
                <div className="lg:h-80 flex flex-col justify-between bg-customYellow pt-16 lg:pt-0 px-5 border border-black animate-fadeMid">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
                        <div className="flex w-full justify-around lg:justify-start">
                            <ul className="flex w-full lg:justify-start text-xs">
                                <ListItem
                                    data={SMData.icons}
                                    title={"Nos Réseaux"}
                                />
                                <ListItem data={NBData} title={"Nos Liens"} />
                                <ListItem
                                    data={PartnersData.partners}
                                    title={PartnersData.title_1}
                                />
                            </ul>
                        </div>

                        <ContactForm />
                    </div>
                    <p className="text-xs text-center lg:text-left mb-5 lg:ml-5 w-full">
                        Produce by @DigitialCopilote / Develop by Thomas Barrial
                        and Julien Abbadie / Design by ThomasBarrial
                    </p>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default Footer;
/* 
     .--.
    |o_o |
    |:_/ |
   //   \ \
  (|     | )
 /'\_   _/`\
 \___)=(___/

*/
