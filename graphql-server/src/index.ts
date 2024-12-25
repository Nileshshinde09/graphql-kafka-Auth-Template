import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = `
  type Query {
    hello(name: String): String
  }
`;

const resolvers = {
  Query: {
    hello: (_: any, args: { name: string }) => {
      return `Hello, ${args.name?args.name:"World " }!`;
    },
  },
};

async function startServer() {
  const app = express();
  const PORT = 8000;

  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const server = new ApolloServer({ schema });

  // Middleware order is important
  app.use(express.json()); // Parse JSON body before Apollo middleware

  await server.start();
  app.use(
    "/graphql",
    //@ts-ignore
    expressMiddleware(server, {
      context: async ({ req }) => {
        const token = req.headers["token"]; // Token processing
        return { user: token ? decodeToken(token) : null };
      },
    })
  );
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/graphql`);
  });
}

startServer();
