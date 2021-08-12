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
  title_1: string | null;
  title_2: string | null;
  text: string | null;
}

export interface allContent_content_event {
  __typename: "ComponentContentEvent";
  id: string;
  title: string | null;
  image: string | null;
  date: any | null;
  text: string | null;
  register: string | null;
}

export interface allContent_content {
  __typename: "Content";
  id: string;
  primary_color: string | null;
  secondary_color: string | null;
  font_primary_color: string | null;
  font_secondary_color: string | null;
  actu: allContent_content_actu | null;
  events: (allContent_content_event | null)[] | null;
  published_at: any | null;
  created_at: any;
  updated_at: any;
}

export interface allContent {
  content: allContent_content | null;
}
