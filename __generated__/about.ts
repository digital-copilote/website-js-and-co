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
  title: string;
  text: string;
  icon: about_about_aboutUs_unReseau_icon;
}

export interface about_about_aboutUs_uneExpertise_icon {
  __typename: "UploadFile";
  url: string;
}

export interface about_about_aboutUs_uneExpertise {
  __typename: "ComponentCardsUneExpertiseCard";
  title: string;
  text: string;
  icon: about_about_aboutUs_uneExpertise_icon;
}

export interface about_about_aboutUs_desEntrepreneurs_icon {
  __typename: "UploadFile";
  url: string;
}

export interface about_about_aboutUs_desEntrepreneurs {
  __typename: "ComponentCardsDesEntrepreneursCard";
  title: string;
  text: string;
  icon: about_about_aboutUs_desEntrepreneurs_icon ;
}

export interface about_about_aboutUs_desFormations_icon {
  __typename: "UploadFile";
  url: string;
}

export interface about_about_aboutUs_desFormations {
  __typename: "ComponentCardsDesFormationsCard";
  title: string;
  text: string;
  icon: about_about_aboutUs_desFormations_icon ;
}

export interface about_about_aboutUs {
  __typename: "ComponentContentAboutUs";
  title_1: string;
  text: string;
  text2: string;
  unReseau: about_about_aboutUs_unReseau ;
  uneExpertise: about_about_aboutUs_uneExpertise ;
  desEntrepreneurs: about_about_aboutUs_desEntrepreneurs ;
  desFormations: about_about_aboutUs_desFormations ;
}

export interface about_about_footer_newMember {
  __typename: "ComponentContentNewMember";
  title_1: string;
  text: string;
}

export interface about_about_footer_linkSocialMedia {
  __typename: "ComponentCardsSocialMediaFooter";
  name: string;
  link: string;
}

export interface about_about_footer_link_partners {
  __typename: "ComponentCardsPartnerFooter";
  name: string;
  link: string;
}

export interface about_about_footer {
  __typename: "ComponentContentFooter";
  newMember: about_about_footer_newMember ;
  linkSocialMedia: (about_about_footer_linkSocialMedia )[] ;
  link_partners: (about_about_footer_link_partners)[] ;
}

export interface about_about {
  __typename: "About";
  aboutUs: about_about_aboutUs ;
  footer: about_about_footer ;
}

export interface about {
  about: about_about ;
}
