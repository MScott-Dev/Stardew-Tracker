import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $bundles: [BundleInput!]
    $donatedItems: [ID]
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      bundles: $bundles
      donatedItems: $donatedItems
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem($_id: ID, $donatedItems: ID) {
    addItem(_id: $_id, donatedItems: $donatedItems) {
      _id
    }
  }
`;