import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import type { Request, Response, NextFunction } from "express";
import { rateLimit } from "express-rate-limit";
import type { Options as RateLimitOptions } from "express-rate-limit";
import session from "express-session";
import fs from "fs";
import { createServer } from "http";
import passport from "passport";
import path from "path";
import requestIp from "request-ip";
import { Server } from "socket.io";
import { fileURLToPath } from "url";
import YAML from "yaml";
import { initializeSocketIO } from "./apps/sockets/index.ts";
import { ApiError } from "./lib/ApiError.js";
import healthcheckRouter from "./apps/restApi/routes/healthcheck.routes.ts";
import userRouter from "./apps/restApi/routes/auth/user.routes.ts";
// TypeScript utilities for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Swagger setup
const file = fs.readFileSync(path.resolve(__dirname, "./swagger.yaml"), "utf8");
const swaggerDocument = YAML.parse(
  file.replace(
    "- url: ${{server}}",
    `- url: ${process.env.FREEAPI_HOST_URL || "http://localhost:8080"}/api/v1`
  )
);

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  },
});

app.set("io", io); // using set method to mount the `io` instance on the app to avoid usage of `global`

// Global middlewares
app.use(
  cors({
    origin:
      process.env.CORS_ORIGIN === "*"
        ? "*" // This might give CORS error for some origins due to credentials set to true
        : process.env.CORS_ORIGIN?.split(","), // For multiple cors origins in production.
    credentials: true,
  })
);

app.use(requestIp.mw());

// Rate limiter middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5000, // Limit each IP to 500 requests per `window`
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  keyGenerator: (req: Request) => req.clientIp || "",
  handler: (
    req: Request,
    res: Response,
    next: NextFunction,
    options: RateLimitOptions
  ) => {
    next(
      new ApiError(
        options.statusCode || 429,
        `Too many requests. You are only allowed ${options.max} requests per ${
          options.windowMs / 60000
        } minutes`
      )
    );
  },
});

app.use(limiter);
app.use(express.json({limit:"16kb"}))
//GraphQL

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Session setup
app.use(
  session({
    secret: process.env.EXPRESS_SESSION_SECRET || "default_secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// app.use(morganMiddleware);

// * Healthcheck route
app.use("/api/v1/healthcheck", healthcheckRouter);

// * App APIs
app.use("/api/v1/users", userRouter);

initializeSocketIO(io);

// Apollo Server setup

// Common error handling middleware
import { errorHandler } from "./middleware";
import createApolloGraphqlServer from "./apps/graphql/index.ts";
app.use(errorHandler);
app.use(createApolloGraphqlServer
export { httpServer };
