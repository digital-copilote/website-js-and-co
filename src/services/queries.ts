import { gql } from "@apollo/client";
export const GET_CONTENT = gql`
    query allContent {
        content {
            id
            primary_color
            secondary_color
            font_primary_color
            font_secondary_color
            actu {
                id
                title_1
                title_2
                text
            }
            event {
                id
                title
                image
                date
                text
                register
            }
            published_at
            created_at
            updated_at
        }
    }
`;
