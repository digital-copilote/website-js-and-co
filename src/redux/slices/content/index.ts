import { createSlice } from "@reduxjs/toolkit";
import * as T from "../../../../__generated__/allContent";

const initialState: T.allContent_content = {
    id: "",
    primary_color: null,
    secondary_color: null,
    font_primary_color: null,
    font_secondary_color: null,
    actu: null,
    __typename: "Content",
    event: [],
    published_at: null,
    created_at: null,
    updated_at: null,
};

const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {
        setContent: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setContent } = contentSlice.actions;

export default contentSlice.reducer;
