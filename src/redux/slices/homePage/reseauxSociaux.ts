import { createSlice } from "@reduxjs/toolkit";
import { allContent_content_socialMedia } from "__generated__/allContent";

const initialState: allContent_content_socialMedia = {
    __typename: "ComponentContentSocialMedia",
    title_1: "Ou sommes nous ?",
    title_2:
        "Toulouse est notre coeur, La Cantine notre QG, Le web notre repaire.",
    text: "Entrée en contact avec notre communauté a travers nos réseaux. Devenez membre pour avoir les différents accès à nos pateformes de communication.",
    icons: [
        {
            __typename: "ComponentCardsSocialMedia",
            name: "LinkedIn",
            link: "https://fr.linkedin.com/company/association-js-co",
            icon: {
                __typename: "UploadFile",
                url: "https://zupimages.net/up/21/32/h938.png",
            },
        },
        {
            __typename: "ComponentCardsSocialMedia",
            name: "Twitter",
            link: "https://twitter.com/js_and_co?lang=fr",
            icon: {
                __typename: "UploadFile",
                url: "https://zupimages.net/up/21/32/tde2.png",
            },
        },
        {
            __typename: "ComponentCardsSocialMedia",
            name: "Github",
            link: "https://github.com",
            icon: {
                __typename: "UploadFile",
                url: "https://zupimages.net/up/21/32/tmyp.png",
            },
        },
        {
            __typename: "ComponentCardsSocialMedia",
            name: "Slack",
            link: "https://slack.com/intl/fr-fr/  ",
            icon: {
                __typename: "UploadFile",
                url: "https://zupimages.net/up/21/32/84pq.png",
            },
        },
        {
            __typename: "ComponentCardsSocialMedia",
            name: "Discord",
            link: "https://discord.com/",
            icon: {
                __typename: "UploadFile",
                url: "https://zupimages.net/up/21/32/81g4.png",
            },
        },
        {
            __typename: "ComponentCardsSocialMedia",
            name: "FaceBook",
            link: "https://fr-fr.facebook.com/js.and.co.association/",
            icon: {
                __typename: "UploadFile",
                url: "https://zupimages.net/up/21/32/vjvp.png",
            },
        },
        {
            __typename: "ComponentCardsSocialMedia",
            name: "MeettUp",
            link: "https://www.meetup.com/fr-FR/JavaScript-and-Co/",
            icon: {
                __typename: "UploadFile",
                url: "https://zupimages.net/up/21/32/31h0.png",
            },
        },
    ],
};

const socialMediaSlice = createSlice({
    name: "socialMedia",
    initialState,
    reducers: {
        setSocialMedia: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setSocialMedia } = socialMediaSlice.actions;

export default socialMediaSlice.reducer;
