import Section1 from "@components/homePage/mainSection/Section1";
import Section2 from "@components/homePage/actuSection/Section2";
import { apolloClient } from "./_app";
import { GET_HOMEPAGE } from "src/services/queries";
import { useDispatch } from "react-redux";
import {
    setAction,
    setActu,
    setNewMember,
    setPartners,
    setSocialMedia,
} from "src/redux/action";
import { GetStaticPropsResult } from "next";
import Section3 from "@components/homePage/actionSection/Section3";
import Section4 from "@components/homePage/socialMedia/Section4";
import Partners from "@components/homePage/partners/Partners";
import Footer from "@components/footer/Footer";
import { allContent_content } from "__generated__/allContent";

export function Home(content: allContent_content): JSX.Element {
    const dispatch = useDispatch();

    dispatch(setActu(content.actu));
    dispatch(setAction(content.action));
    dispatch(setSocialMedia(content.socialMedia));
    dispatch(setPartners(content.partners));
    dispatch(setNewMember(content.newMember));
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
            query: GET_HOMEPAGE,
        });

        return {
            props: { ...data?.content } || null,
        };
    } catch (error) {
        return { notFound: true };
    }
}

export default Home;
