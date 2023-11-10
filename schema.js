export const typeDefs = `#graphql
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  },
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    author: Author!
    game: Game!
  }
  type Query {
    authors: [Author]
    author(id: ID!): Author
    games: [Game]
    game(id: ID!): Game
    reviews: [Review]
    review(id: ID!): Review
  }
`;
