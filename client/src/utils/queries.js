import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      bundles {
        name
        items {
          name
          donated
          imageName
        }
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user {
    user {
      _id
      username
      email
      bundles {
        name
        items {
          name
          donated
          imageName
        }
      }
    }
  }
`