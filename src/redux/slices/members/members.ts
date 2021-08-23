import { createSlice } from "@reduxjs/toolkit";
import { members } from "__generated__/members";

const initialState: members = {
    member: {
        __typename: "Members",
        title: "",
        members: [],
        footer: {
            __typename: "ComponentContentFooter",
            newMember: {
                __typename: "ComponentContentNewMember",
                title_1: "",
                text: "",
            },
            linkSocialMedia: [],
            link_partners: [],
        },
    },
};

const memberSlice = createSlice({
    name: "members",
    initialState,
    reducers: {
        setMembers: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setMembers } = memberSlice.actions;

export default memberSlice.reducer;
