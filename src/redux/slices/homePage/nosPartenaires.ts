import { createSlice } from "@reduxjs/toolkit";
import { allContent_content_partners } from "__generated__/allContent";

const initialState: allContent_content_partners = {
    __typename: "ComponentContentPartners",
    title_1: "Nos Partenaires",
    text: "Un réseau de partenaires grandissant nous soutient dans nos actions et notre philosophie de simplifier l'accès au développement web.",
    partners: [
        {
            __typename: "ComponentCardsPartnerCard",
            logo: {
                __typename: "UploadFile",
                url: "https://zupimages.net/up/21/32/x0bm.png",
            },
            name: "La mêlée",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare justo eget pulvinar interdum.",
            link: "https://www.lamelee.com/",
        },
        {
            __typename: "ComponentCardsPartnerCard",
            logo: {
                __typename: "UploadFile",
                url: "https://zupimages.net/up/21/32/goxy.png",
            },
            name: "Digital Copilote",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare justo eget pulvinar interdum.",
            link: "https://digitalcopilote.io/",
        },
    ],
};

const partnersSlice = createSlice({
    name: "partners",
    initialState,
    reducers: {
        setPartners: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setPartners } = partnersSlice.actions;

export default partnersSlice.reducer;
