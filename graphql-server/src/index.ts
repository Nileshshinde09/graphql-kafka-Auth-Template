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



import dotenv from "dotenv";
import { httpServer } from "./app.js";
import connectDB from "./db/index.js";
import logger from "./logger/winston.logger.js";

dotenv.config({
  path: "./.env",
});

/**
 * Starting from Node.js v14 top-level await is available and it is only available in ES modules.
 * This means you can not use it with common js modules or Node version < 14.
 */
const majorNodeVersion = +process.env.NODE_VERSION?.split(".")[0] || 0;

const startServer = () => {
  httpServer.listen(process.env.PORT || 8080, () => {
    logger.info(
      `📑 Visit the documentation at: http://localhost:${
        process.env.PORT || 8080
      }`
    );
    logger.info("⚙️  Server is running on port: " + process.env.PORT);
  });
};

if (majorNodeVersion >= 14) {
  try {
    await connectDB();
    startServer();
  } catch (err) {
    logger.error("Mongo db connect error: ", err);
  }
} else {
  connectDB()
    .then(() => {
      startServer();
    })
    .catch((err) => {
      logger.error("Mongo db connect error: ", err);
    });
}