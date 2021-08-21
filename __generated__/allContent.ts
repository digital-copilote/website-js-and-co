/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allContent
// ====================================================

export interface allContent_content_actu_events_image {
  __typename: "UploadFile";
  url: string;
}

export interface allContent_content_actu_events {
  __typename: "ComponentCardsEventCard";
  id: string;
  name: string | null;
  place: string | null;
  adresse: string | null;
  date: any | null;
  description: string | null;
  image: allContent_content_actu_events_image | null;
  hour: any | null;
  link_register: string | null;
}

export interface allContent_content_actu {
  __typename: "ComponentContentActus";
  id: string;
  title_1: string;
  title_2: string;
  text: string;
  events: (allContent_content_actu_events | null)[] | null;
}

export interface allContent_content_action_action_cards_icon {
  __typename: "UploadFile";
  url: string;
}

export interface allContent_content_action_action_cards {
  __typename: "ComponentCardsActionCard";
  id: string;
  title: string;
  text: string;
  icon: allContent_content_action_action_cards_icon | null;
}

export interface allContent_content_action {
  __typename: "ComponentContentActions";
  id: string;
  title: string | null;
  text: string | null;
  action_cards: (allContent_content_action_action_cards | null)[] | null;
}

export interface allContent_content_socialMedia_icons_icon {
  __typename: "UploadFile";
  url: string;
}

export interface allContent_content_socialMedia_icons {
  __typename: "ComponentCardsSocialMedia";
  name: string;
  link: string;
  icon: allContent_content_socialMedia_icons_icon;
}

export interface allContent_content_socialMedia {
  __typename: "ComponentContentSocialMedia";
  title_1: string | null;
  title_2: string | null;
  text: string | null;
  icons: (allContent_content_socialMedia_icons)[];
}

export interface allContent_content_partners_partners_logo {
  __typename: "UploadFile";
  url: string;
}

export interface allContent_content_partners_partners {
  __typename: "ComponentCardsPartnerCard";
  name: string;
  description: string;
  link: string;
  logo: allContent_content_partners_partners_logo;
}

export interface allContent_content_partners {
  __typename: "ComponentContentPartners";
  title_1: string;
  text: string;
  partners: allContent_content_partners_partners[];
}

export interface allContent_content_newMember {
  __typename: "ComponentContentNewMember";
  title_1: string | null;
  text: string | null;
}

export interface allContent_content {
  __typename: "Content";
  actu: allContent_content_actu | null;
  action: allContent_content_action | null;
  socialMedia: allContent_content_socialMedia | null;
  partners: allContent_content_partners | null;
  newMember: allContent_content_newMember | null;
}

export interface allContent {
  content: allContent_content | null;
}
