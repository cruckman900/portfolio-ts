import { gql } from "@apollo/client";

export const GET_ENTRIES_BY_SECTION = gql`
    query GetEntries($section: String!) {
        resume(section: $section) {
            id
            title
            subtitle
            order
        }
    }
`;
