import { createSlice } from "@reduxjs/toolkit";
import * as T from "../../../../__generated__/allContent";

const initialState: T.allContent_content = {
    id: "",
    primary_color: null,
    secondary_color: null,
    font_primary_color: null,
    font_secondary_color: null,
    actu: {
        __typename: "ComponentContentActus",
        id: "1",
        title_1: "Notre Actualité",
        title_2: "Suivez nos événements",
        text: "Suite à la réussite du CodeFest de 2017, nous avons pour projet d'organiser un autre hackathon dans les prochains mois et d'en faire une habitude. Lighting talk, retour d'expérience ou simple rencontre autour d'un verre, tenez vous au courant sur Facebook ou Meetup",
    },
    __typename: "Content",
    event: [
        {
            __typename: "ComponentContentEvent",
            id: "1",
            title: "JS & Co techLab",
            image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            date: new Date().toLocaleDateString(),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare justo eget pulvinar interdum. Aenean pellentesque sed est at ultrices. Proin sit amet facilisis sapien. In pretium maximus sollicitudin.",
            register: "fauxlien.com",
        },
        {
            __typename: "ComponentContentEvent",
            id: "2",
            title: "Hackathon Août 2021",
            image: "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            date: new Date().toLocaleDateString(),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare justo eget pulvinar interdum. Aenean pellentesque sed est at ultrices. Proin sit amet facilisis sapien. In pretium maximus sollicitudin.",
            register: "fauxlien.com",
        },
    ],
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
