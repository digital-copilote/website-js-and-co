import { gql } from "@apollo/client";
export const GET_CONTENT = gql`
    query allContent {
        content {
            id
            created_at
            updated_at
            primary_color
            secondary_color
            font_primary_color
            font_secondary_color
            published_at
            __typename
            actu {
                id
                title_1
                title_2
                text
                __typename
            }
            events {
                id
                title
                image
                date
                text
                register
                __typename
            }
            action {
                id
                title
                text
                __typename
                action_cards {
                    id
                    image
                    title
                    text
                    __typename
                }
            }
        }
    }
`;
