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
  firstName: string;
  lastName: string;
  function: string;
  linkPortfolio: string;
  description: string;
  avatar: members_member_members_avatar;
  socialMedia: (members_member_members_socialMedia[]);
}

export interface members_member_footer_newMember {
  __typename: "ComponentContentNewMember";
  title_1: string;
  text: string;
}

export interface members_member_footer_linkSocialMedia {
  __typename: "ComponentCardsSocialMediaFooter";
  name: string;
  link: string;
}

export interface members_member_footer_link_partners {
  __typename: "ComponentCardsPartnerFooter";
  name: string;
  link: string;
}

export interface members_member_footer {
  __typename: "ComponentContentFooter";
  newMember: members_member_footer_newMember;
  linkSocialMedia: (members_member_footer_linkSocialMedia)[];
  link_partners: (members_member_footer_link_partners)[];
}

export interface members_member {
  __typename: "Members";
  title: string;
  members: (members_member_members)[];
  footer: members_member_footer;
}

export interface members {
  member: members_member;
}
