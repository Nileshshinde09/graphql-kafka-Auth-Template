import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { makeExecutableSchema } from "@graphql-tools/schema";
import dotenv from "dotenv";
import { middlewareRootFC } from "./middleware/app/graphql";
dotenv.config({ path: "../.env" });
interface MyContext {
  req: Request;
  res: Response;
  customRequestType: string;
}
const typeDefs = `
  type Query {
    hello(name: String): String
  }
`;

const resolvers = {
  Query: {
    hello: (_: any, args: { name: string }) => {
      return `Hello, ${args.name ? args.name : "World "}!`;
    },
  },
};

async function startServer() {
  const app = express();
  const PORT = 8000;

  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const server = new ApolloServer({ schema });

  // Middleware order is important
  app.use(express.json());

  await server.start();
  app.use(
    "/graphql",
    //@ts-ignore
    expressMiddleware<MyContext>(server, {
      context: middlewareRootFC,
    })
  );
  app.listen(PORT, () => {
    console.log(`GrapghQL Server running on http://localhost:${PORT}/graphql`);
  });
}

startServer();
