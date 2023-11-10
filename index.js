import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema.js';
import db from './_db.js';

const resolvers = {
  Query: {
    authors() {
      return db.authors
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id)
    },

    games() {
      return db.games
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id)
    },

    reviews() {
      return db.reviews
    },

    review(_, args) {
      return db.reviews.find((review) => review.id === args.id)
    }
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((review) => review.game_id === parent.id)
    }
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => review.author_id === parent.id)
    }
  },
  Review: {
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id)
    },
    game(parent) {
      return db.games.find((game) => game.id === parent.game_id)
    }
  },
  Mutation: {
    addGame(_, args) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 1000).toString(),
      }
      db.games.push(game)
      return game
    },
  
    updateGame(_, args) {
      db.games = db.games.map((game) => {
        if (game.id === args.id) {
          return {...game, ...args.editGame}
        }
        return game
      })

      return db.games.find((game) => game.id === args.id)
    },

    deleteGame(_, args) {
      db.games = db.games.filter((game) => game.id !== args.id)
      return db.games
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

console.log('server started at port ',  url);