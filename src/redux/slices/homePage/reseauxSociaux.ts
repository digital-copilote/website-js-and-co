import { createSlice } from "@reduxjs/toolkit";
import { allContent_content_socialMedia } from "__generated__/allContent";

const initialState: allContent_content_socialMedia = {
    __typename: "ComponentContentSocialMedia",
    title_1: "Ou sommes nous ?",
    title_2:
        "Toulouse est notre coeur, La Cantine notre QG, Le web notre repaire.",
    text: "Entrée en contact avec notre communauté a travers nos réseaux. Devenez membre pour avoir les différents accès à nos pateformes de communication.",
    icons: [],
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
