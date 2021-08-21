import { createSlice } from "@reduxjs/toolkit";
import { allContent_content_newMember } from "__generated__/allContent";

const initialState: allContent_content_newMember = {
    __typename: "ComponentContentNewMember",
    title_1: "",
    text: "",
};

const newMemberSlice = createSlice({
    name: "newMember",
    initialState,
    reducers: {
        setNewMember: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setNewMember } = newMemberSlice.actions;

export default newMemberSlice.reducer;
