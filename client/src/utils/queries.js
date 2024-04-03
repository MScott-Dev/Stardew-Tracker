import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  {
    user {
      username
      email
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
