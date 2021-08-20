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

export interface allContent_content_socialMedia_icon_icon {
  __typename: "UploadFile";
  url: string;
}

export interface allContent_content_socialMedia_icon {
  __typename: "ComponentCardsSocialMedia";
  name: string | null;
  link: string;
  icon: allContent_content_socialMedia_icon_icon;
}

export interface allContent_content_socialMedia {
  __typename: "ComponentContentSocialMedia";
  title_1: string | null;
  title_2: string | null;
  text: string | null;
  icon: allContent_content_socialMedia_icon[];
}

export interface allContent_content {
  __typename: "Content";
  actu: allContent_content_actu | null;
  action: allContent_content_action | null;
  socialMedia: allContent_content_socialMedia | null;
}

export interface allContent {
  content: allContent_content | null;
}
