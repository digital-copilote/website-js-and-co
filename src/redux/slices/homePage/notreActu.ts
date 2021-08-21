import { createSlice } from "@reduxjs/toolkit";
import { allContent_content_actu } from "__generated__/allContent";

const initialState: allContent_content_actu = {
    __typename: "ComponentContentActus",
    id: "1",
    title_1: "Notre Actualité",
    title_2: "Suivez nos événements",
    text: "Suite à la réussite du CodeFest de 2017, nous avons pour projet d'organiser un autre hackathon dans les prochains mois et d'en faire une habitude. Lighting talk, retour d'expérience ou simple rencontre autour d'un verre, tenez vous au courant sur Facebook ou Meetup",

    events: [],
};

const contentSlice = createSlice({
    name: "actu",
    initialState,
    reducers: {
        setActu: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setActu } = contentSlice.actions;

export default contentSlice.reducer;
