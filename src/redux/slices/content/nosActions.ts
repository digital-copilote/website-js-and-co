import { createSlice } from "@reduxjs/toolkit";
import { allContent_content_action } from "__generated__/allContent";

const initialState: allContent_content_action = {
    id: "",
    title: "",
    text: "",
    __typename: "ComponentContentActions",
    action_cards: [],
};

const actionSlice = createSlice({
    name: "action",
    initialState,
    reducers: {
        setAction: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setAction } = actionSlice.actions;

export default actionSlice.reducer;
