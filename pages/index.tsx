import Section1 from "@components/homePage/section1/Section1";
import Section2 from "@components/homePage/section2/Section2";
import { apolloClient } from "./_app";
import { GET_CONTENT } from "src/services/queries";
import { useDispatch } from "react-redux";
import { setContent } from "src/redux/action";
import { allContent_content } from "../__generated__/allContent";
import { GetStaticPropsResult } from "next";

// import { } from "@components";

export function Home(content: allContent_content): JSX.Element {
    const dispatch = useDispatch();

    dispatch(setContent(content));
    return (
        <div>
            <Section1 />
            <Section2 />
        </div>
    );
}

export async function getStaticProps(): Promise<
    GetStaticPropsResult<allContent_content>
> {
    try {
        const { data } = await apolloClient.query({
            query: GET_CONTENT,
        });

        return {
            props: { ...data?.content } || null,
        };
    } catch (error) {
        return { notFound: true };
    }
}

export default Home;
