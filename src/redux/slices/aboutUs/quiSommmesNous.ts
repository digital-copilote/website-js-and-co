import { createSlice } from "@reduxjs/toolkit";
import { about_about_aboutUs } from "__generated__/about";

const initialState: about_about_aboutUs = {
    __typename: "ComponentContentAboutUs",
    title_1: "",
    text: "",
    text2: "",
    unReseau: {
        __typename: "ComponentCardsUnReseauxCard",
        title: "",
        text: "",
        icon: {
            __typename: "UploadFile",
            url: "",
        },
    },
    uneExpertise: {
        __typename: "ComponentCardsUneExpertiseCard",
        title: "",
        text: "",
        icon: {
            __typename: "UploadFile",
            url: "",
        },
    },
    desEntrepreneurs: {
        __typename: "ComponentCardsDesEntrepreneursCard",
        title: "",
        text: "",
        icon: {
            __typename: "UploadFile",
            url: "",
        },
    },
    desFormations: {
        __typename: "ComponentCardsDesFormationsCard",
        title: "",
        text: "",
        icon: {
            __typename: "UploadFile",
            url: "",
        },
    },
};

const aboutSlice = createSlice({
    name: "aboutUs",
    initialState,
    reducers: {
        setAboutUs: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setAboutUs } = aboutSlice.actions;

export default aboutSlice.reducer;
