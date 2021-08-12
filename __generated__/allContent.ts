/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allContent
// ====================================================

export interface allContent_content_actu {
  __typename: "ComponentContentActus";
  id: string;
  title_1: string;
  title_2: string;
  text: string;
}

export interface allContent_content_events {
  __typename: "ComponentContentEvent";
  id: string;
  title: string;
  image: string;
  date: any;
  text: string;
  register: string;
}

export interface allContent_content_action_action_cards {
  __typename: "ComponentCardsActionCard";
  id: string;
  image: string;
  title: string;
  text: string;
}

export interface allContent_content_action {
  __typename: "ComponentContentActions";
  id: string;
  title: string | null;
  text: string | null;
  action_cards: (allContent_content_action_action_cards | null)[] | null;
}

export interface allContent_content {
  __typename: "Content";
  id: string;
  created_at: any;
  updated_at: any;
  primary_color: string | null;
  secondary_color: string | null;
  font_primary_color: string | null;
  font_secondary_color: string | null;
  published_at: any | null;
  actu: allContent_content_actu | null;
  events: (allContent_content_events | null)[] | null;
  action: allContent_content_action | null;
}

export interface allContent {
  content: allContent_content | null;
}
