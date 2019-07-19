import { ApolloServer } from "apollo-server-express";
import express from "express";
import schema from "./schema";
import resolvers from "./resolvers";

function gqlServer() {
  const app = express();

  /*app.use(async (req, res, next) => {
    const token = req.headers['authorization'];
    if(token !== "null"){
      try {
        const currentUser = await jwt.verify(token, process.env.SECRET)
        req.currentUser = currentUser
      } catch(e) {
        console.error(e);
      }
    }
    next();
  });*/

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    introspection: true,
    playground: true
    // context: ({ req }) => ({ Property, User, currentUser: req.currentUser })
  });

  server.applyMiddleware({ app, path: "/", cors: true });

  return app;
}

export default gqlServer;
