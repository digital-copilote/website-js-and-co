import { createSlice } from "@reduxjs/toolkit";
import { allContent_content_footer } from "__generated__/allContent";

const initialState: allContent_content_footer = {
    __typename: "ComponentContentFooter",
    newMember: {
        __typename: "ComponentContentNewMember",
        title_1: "",
        text: "",
    },
    linkSocialMedia: [],
    link_partners: [],
};

const footerSlice = createSlice({
    name: "footer",
    initialState,
    reducers: {
        setFooter: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setFooter } = footerSlice.actions;

export default footerSlice.reducer;
