import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $bundles: [BundleInput!]
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      bundles: $bundles
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_BUNDLES = gql`
  mutation addBundles(
    $_id: String!
  ) {
    addBundles(
      _id: $_id
    ) {
      user
    }
  }
`