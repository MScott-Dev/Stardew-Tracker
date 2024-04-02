const typeDefs = `
  type Item {
    _id: ID
    name: String
    donated: Boolean
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    communityCenter: [Item]
  }

  type Query {
    
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
