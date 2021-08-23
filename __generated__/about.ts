/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: about
// ====================================================

export interface about_about_aboutUs_unReseau_icon {
  __typename: "UploadFile";
  url: string;
}

export interface about_about_aboutUs_unReseau {
  __typename: "ComponentCardsUnReseauxCard";
  title: string | null;
  text: string | null;
  icon: about_about_aboutUs_unReseau_icon | null;
}

export interface about_about_aboutUs_uneExpertise_icon {
  __typename: "UploadFile";
  url: string;
}

export interface about_about_aboutUs_uneExpertise {
  __typename: "ComponentCardsUneExpertiseCard";
  title: string | null;
  text: string | null;
  icon: about_about_aboutUs_uneExpertise_icon | null;
}

export interface about_about_aboutUs_desEntrepreneurs_icon {
  __typename: "UploadFile";
  url: string;
}

export interface about_about_aboutUs_desEntrepreneurs {
  __typename: "ComponentCardsDesEntrepreneursCard";
  title: string | null;
  text: string | null;
  icon: about_about_aboutUs_desEntrepreneurs_icon | null;
}

export interface about_about_aboutUs_desFormations_icon {
  __typename: "UploadFile";
  url: string;
}

export interface about_about_aboutUs_desFormations {
  __typename: "ComponentCardsDesFormationsCard";
  title: string | null;
  text: string | null;
  icon: about_about_aboutUs_desFormations_icon | null;
}

export interface about_about_aboutUs {
  __typename: "ComponentContentAboutUs";
  title_1: string | null;
  text: string | null;
  text2: string | null;
  unReseau: about_about_aboutUs_unReseau | null;
  uneExpertise: about_about_aboutUs_uneExpertise | null;
  desEntrepreneurs: about_about_aboutUs_desEntrepreneurs | null;
  desFormations: about_about_aboutUs_desFormations | null;
}

export interface about_about {
  __typename: "About";
  aboutUs: about_about_aboutUs | null;
}

export interface about {
  about: about_about | null;
}
