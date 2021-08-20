import { createSlice } from "@reduxjs/toolkit";
import { allContent_content_socialMedia } from "__generated__/allContent";

const initialState: allContent_content_socialMedia = {
    __typename: "ComponentContentSocialMedia",
    title_1: "",
    title_2: "",
    text: "",
    icon: [],
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
