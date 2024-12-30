import { ApolloServer } from "@apollo/server";
import { UserGraphQLResolvers, UserGraphQLSchema } from "./user";

const createApolloGraphqlServer = async () => {
  const typeDefs = `
  ${UserGraphQLSchema.typeDefs}
  ${UserGraphQLSchema.mutations}
  ${UserGraphQLSchema.queries}
  `;

  const resolvers = {
    Query: { ...UserGraphQLResolvers.queries },
    Mutation: { ...UserGraphQLResolvers.mutations },
  };

  try {
    const gqlServer = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await gqlServer.start();
    return gqlServer;
  } catch (err) {
    console.error("Error starting Apollo Server:", err);
    throw new Error("Failed to start the Apollo GraphQL server.");
  }
};

export default createApolloGraphqlServer;
