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
