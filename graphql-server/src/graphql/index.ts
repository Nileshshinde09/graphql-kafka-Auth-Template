import { ApolloServer } from "@apollo/server";
import user from "./user";
import { ApiError } from "../lib";
const createApolloGraphqlServer = async () => {
  const typeDefs = ``;
  const resolvers = {
    Query: {},
    Mutation: {},
  };
  try {
    try {
      const gqlServer = new ApolloServer({
        typeDefs,
        resolvers,
      });
      await gqlServer.start();
      return gqlServer;
    } catch (err) {
      const gqlServer = new ApolloServer({
        typeDefs,
        resolvers,
      });
      await gqlServer.start();
      return gqlServer;
    }
  } catch (err) {
    console.error("Error starting Apollo Server:", err);
    return new ApiError(500, "Failed to start the Apollo GraphQL server");
  }
};

export default createApolloGraphqlServer;
