import Footer from "@components/footer/Footer";
import Members from "@components/membresPage/Members";
import { GetStaticPropsResult } from "next";
import React from "react";
import { useDispatch } from "react-redux";
import { setMembers } from "src/redux/action";
import { GET_MEMBERS } from "src/services/queries";
import { members } from "__generated__/members";
import { apolloClient } from "./_app";

function nosmembres(member: members): JSX.Element {
    const dispatch = useDispatch();

    dispatch(setMembers(member));
    return (
        <div>
            <Members />
            <Footer />
        </div>
    );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<members>> {
    try {
        const { data } = await apolloClient.query({
            query: GET_MEMBERS,
        });

        return {
            props: { ...data },
        };
    } catch (error) {
        return { notFound: true };
    }
}

export default nosmembres;
