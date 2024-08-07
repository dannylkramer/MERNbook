require('dotenv').config();
const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { getUserFromToken } = require('./utils/auth');
const { expressMiddleware } = require('@apollo/server/express4');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
// Set up Apollo Server
const startServer = async () => {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  } 

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      // Get the token from the headers
      const token = req.headers.authorization || '';
      // Try to retrieve a user with the token
      const user = getUserFromToken(token);
      // Add the user to the context
      return { user };
    },
  });

  await server.start();
  app.use('/graphql', expressMiddleware(server));

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startServer();

