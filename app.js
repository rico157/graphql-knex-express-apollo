require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { importSchema } = require('graphql-import');
const { resolvers } = require('./graphql');
const typeDefs = importSchema('./graphql/schema.graphql');

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.use('/', express.static('public'));

app.listen(8080, () => console.log('Server started on port 8080'));
