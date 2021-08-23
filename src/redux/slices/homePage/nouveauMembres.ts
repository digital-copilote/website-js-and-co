import { createSlice } from "@reduxjs/toolkit";
import { allContent_content_newMember } from "__generated__/allContent";

const initialState: allContent_content_newMember = {
    __typename: "ComponentContentNewMember",
    title_1: "Rejoignez la communauté JavaScript",
    text: "Nous essayons d'apprendre constamment les dernières technologies JavaScript afin de pouvoir conseiller et former correctement nos membres. Nous appliquons également nos connaissances dans des cas de production afin de tester les technologies et leurs limites",
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
