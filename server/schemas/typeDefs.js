const typeDefs = `

type Item {
    name: String
    donated: Boolean
    imageName: String
  }

  input ItemInput {
    name: String
    donated: Boolean
    imageName: String
  }

  type Bundle {
    name: String
    items: [Item]
  }

  input BundleInput {
      name: String
      items: [ItemInput]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    bundles: [Bundle]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    users: [User]
    items: [Item]
    bundles: [Bundle]
    user(_id: ID!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, bundles: [BundleInput]): Auth
    addBundles(_id: ID!, bundles: [BundleInput]): User
    seedUser(_id: ID!, bundles: [BundleInput]): User
  }
`;

module.exports = typeDefs;
