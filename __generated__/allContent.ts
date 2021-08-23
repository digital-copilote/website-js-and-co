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
  name: string;
  place: string;
  adresse: string;
  date: any;
  description: string;
  image: allContent_content_actu_events_image ;
  hour: any;
  link_register: string ;
}

export interface allContent_content_actu {
  __typename: "ComponentContentActus";
  id: string;
  title_1: string;
  title_2: string;
  text: string;
  events: (allContent_content_actu_events )[] ;
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
  icon: allContent_content_action_action_cards_icon ;
}

export interface allContent_content_action {
  __typename: "ComponentContentActions";
  id: string;
  title: string;
  text: string;
  action_cards: (allContent_content_action_action_cards )[] ;
}

export interface allContent_content_socialMedia_icons_icon {
  __typename: "UploadFile";
  url: string;
}

export interface allContent_content_socialMedia_icons {
  __typename: "ComponentCardsSocialMedia";
  name: string;
  link: string;
  icon: allContent_content_socialMedia_icons_icon ;
}

export interface allContent_content_socialMedia {
  __typename: "ComponentContentSocialMedia";
  title_1: string;
  title_2: string;
  text: string;
  icons: (allContent_content_socialMedia_icons )[] ;
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
  logo: allContent_content_partners_partners_logo ;
}

export interface allContent_content_partners {
  __typename: "ComponentContentPartners";
  title_1: string;
  text: string;
  partners: (allContent_content_partners_partners )[] ;
}

export interface allContent_content_footer_newMember {
  __typename: "ComponentContentNewMember";
  title_1: string;
  text: string;
}

export interface allContent_content_footer_linkSocialMedia {
  __typename: "ComponentCardsSocialMediaFooter";
  name: string;
  link: string;
}

export interface allContent_content_footer_link_partners {
  __typename: "ComponentCardsPartnerFooter";
  name: string;
  link: string;
}

export interface allContent_content_footer {
  __typename: "ComponentContentFooter";
  newMember: allContent_content_footer_newMember ;
  linkSocialMedia: (allContent_content_footer_linkSocialMedia )[] ;
  link_partners: (allContent_content_footer_link_partners )[] ;
}

export interface allContent_content {
  __typename: "Content";
  actu: allContent_content_actu ;
  action: allContent_content_action ;
  socialMedia: allContent_content_socialMedia ;
  partners: allContent_content_partners ;
  footer: allContent_content_footer ;
}

export interface allContent {
  content: allContent_content ;
}
