import Section1 from "@components/homePage/section1/Section1";
import Section2 from "@components/homePage/section2/Section2";
import { useOnScreen } from "hook/useOnScroll";
import { apolloClient } from "./_app";
import { useRef } from "react";
import { GET_CONTENT } from "src/services/queries";
import { useDispatch } from "react-redux";
import { setContent } from "src/redux/action";
import { allContent_content } from "../__generated__/allContent";

// import { } from "@components";

export function Home(content: allContent_content): JSX.Element {
    const dispatch = useDispatch();
    const scrollRefSec1 = useRef();
    const scrollRefSec2 = useRef();
    console.log("Props:", content);
    const isVisibleSec1 = useOnScreen(scrollRefSec1);
    const isVisibleSec2 = useOnScreen(scrollRefSec2);
    dispatch(setContent(content));
    return (
        <div>
            <Section1 Myref1={scrollRefSec1} />
            <Section2 Myref2={scrollRefSec2} isVisibleSec2={isVisibleSec2} />
        </div>
    );
}

export async function getStaticProps() {
    const { data } = await apolloClient.query({
        query: GET_CONTENT,
    });
    console.log(data);
    return {
        props: data.content,
    };
}

export default Home;
