import { gql } from "@apollo/client";

export const UPDATE_ENTRY = gql`
    mutation UpdateEntry($id: ID!, $input: ResumeEntryInput!) {
        updateEntry(id: $id, input: $input) {
            id
            section
            title
            subtitle
            description
            startDate
            endDate
            tags
            order
        }
    }
`;