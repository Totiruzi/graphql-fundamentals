import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema.js';
import db from './_db.js';

const resolvers = {
  Query: {
    authors() {
      return db.authors
    },

    games() {
      return db.games
    },

    reviews() {
      return db.reviews
    }
  }
}

// server setup
const server = new ApolloServer({
  // -- Defination of different types of data that can be queried
  typeDefs,

  // Handles data (queries) to be sent to the client side
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000}
});

console.log('server started at port ',  4000);