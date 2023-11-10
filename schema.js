export const typeDefs = `#graphql
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  },
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
  }
  type Review {
    id: ID!
    rating: Int!
    conteent: String!
  }
  type Query {
    autors: [Author]
    games: [Game]
    reviews: [Reviews]

  }
`