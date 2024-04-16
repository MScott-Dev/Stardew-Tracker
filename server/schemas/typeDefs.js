const typeDefs = `

type Item {
    _id: ID
    name: String
    donated: Boolean
    imageName: String
  }

  input ItemInput {
    _id: ID
    name: String
    donated: Boolean
    imageName: String
  }

  type Bundle {
    _id: ID
    name: String
    items: [Item]
  }

  input BundleInput {
    _id: ID
    name: String
    items: [ItemInput] 
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    bundles: [Bundle]
    donatedItems: [ID]
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
    addUser(username: String!, email: String!, password: String!, bundles: [BundleInput], donatedItems: [ID]): Auth
    addBundles(_id: ID!, bundles: [BundleInput]): User
    seedUser(_id: ID!, bundles: [BundleInput]): User
    addItem(_id: ID, donatedItems: ID): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
