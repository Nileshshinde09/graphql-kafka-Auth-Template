import { ApolloServer } from "@apollo/server";
import { UserGraphQLResolvers, UserGraphQLSchema } from "./user";
import { ApiError } from "../../lib";
const createApolloGraphqlServer = async () => {
  const typeDefs = `
  #User
  ${UserGraphQLSchema.typeDefs}
  ${UserGraphQLSchema.mutations}
  ${UserGraphQLSchema.queries}
  `;
  const resolvers = {
    Query: { ...UserGraphQLResolvers.queries },
    Mutation: { ...UserGraphQLResolvers.mutations },
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
    return ApiError.GraphQLError(
      500,
      "Failed to start the Apollo GraphQL server"
    );
  }
};

export default createApolloGraphqlServer;
