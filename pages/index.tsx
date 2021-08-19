import Section1 from "@components/homePage/mainSection/Section1";
import Section2 from "@components/homePage/actuSection/Section2";
import { apolloClient } from "./_app";
import { GET_CONTENT } from "src/services/queries";
import { useDispatch } from "react-redux";
import { setContent } from "src/redux/action";
import { allContent_content } from "../__generated__/allContent";
import { GetStaticPropsResult } from "next";
import Section3 from "@components/homePage/actionSection/Section3";
import Section4 from "@components/homePage/socialMedia/Section4";
import Partners from "@components/homePage/partners/Partners";
import Footer from "@components/footer/Footer";

export function Home(content: allContent_content): JSX.Element {
    const dispatch = useDispatch();

    dispatch(setContent(content));
    return (
        <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Partners />
            <Footer />
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
