import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema';

// server setup
const server = new ApolloServer({
  // typeDefs -- Defination of different types of data that can be queried
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000}
});

console.log('server started at port ',  server);