/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: members
// ====================================================

export interface members_member_members_avatar {
  __typename: "UploadFile";
  url: string;
}

export interface members_member_members_socialMedia_icon {
  __typename: "UploadFile";
  url: string;
}

export interface members_member_members_socialMedia {
  __typename: "ComponentCardsMemberSocialMediaCard";
  name: string;
  link: string;
  icon: members_member_members_socialMedia_icon;
}

export interface members_member_members {
  __typename: "ComponentContentOurMembers";
  firstName: string | null;
  lastName: string | null;
  function: string | null;
  linkPortfolio: string;
  description: string | null;
  avatar: members_member_members_avatar;
  socialMedia: (members_member_members_socialMedia)[] | null;
}

export interface members_member {
  __typename: "Members";
  title: string | null;
  members: (members_member_members)[] | null;
}

export interface members {
  member: members_member | null;
}
