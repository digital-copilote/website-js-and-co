import { gql } from "@apollo/client";
export const GET_HOMEPAGE = gql`
    query allContent {
        content {
            actu {
                id
                title_1
                title_2
                text
                events {
                    id
                    name
                    place
                    adresse
                    date
                    description
                    image {
                        url
                    }
                    hour
                    link_register
                }
            }
            action {
                id
                title
                text
                action_cards {
                    id
                    title
                    text
                    icon {
                        url
                    }
                }
            }
            socialMedia {
                title_1
                title_2
                text
                icons {
                    name
                    link
                    icon {
                        url
                    }
                }
            }
            partners {
                title_1
                text
                partners {
                    name
                    description
                    link
                    logo {
                        url
                    }
                }
            }
            newMember {
                title_1
                text
            }
        }
    }
`;

export const GET_ABOUTUS = gql`
    query about {
        about {
            aboutUs {
                title_1
                text
                text2
                unReseau {
                    title
                    text
                    icon {
                        url
                    }
                }
                uneExpertise {
                    title
                    text
                    icon {
                        url
                    }
                }
                desEntrepreneurs {
                    title
                    text
                    icon {
                        url
                    }
                }
                desFormations {
                    title
                    text
                    icon {
                        url
                    }
                }
            }
        }
    }
`;

export const GET_MEMBERS = gql`
    query members {
        member {
            title
            members {
                firstName
                lastName
                function
                linkPortfolio
                description
                avatar {
                    url
                }
                socialMedia {
                    name
                    link
                    icon {
                        url
                    }
                }
            }
        }
    }
`;
