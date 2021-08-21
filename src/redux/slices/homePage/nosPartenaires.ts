import { createSlice } from "@reduxjs/toolkit";
import { allContent_content_partners } from "__generated__/allContent";

const initialState: allContent_content_partners = {
    __typename: "ComponentContentPartners",
    title_1: "",
    text: "",
    partners: [],
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
