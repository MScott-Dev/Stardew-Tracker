const typeDefs = `
  type Item {
    _id: ID
    name: String
    bundle: String
    donated: Boolean
    imageName: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    communityCenter: [Item]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    users: [User]
    items: [Item]
    item(bundle: String): [Item]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
