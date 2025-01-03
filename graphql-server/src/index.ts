import dotenv from "dotenv";
import { logger } from "./logger";
import { connectMongoDB, prismaClient } from "./db";
import { httpServer } from "./app";

// Load environment variables
dotenv.config({ path: "../.env" });

/**
 * Ensure essential environment variables are defined
 */
const requiredEnvVariables: string[] = ["NODE_VERSION", "PORT"];
const missingEnv: string[] = requiredEnvVariables.filter((key) => !process.env[key]);

if (missingEnv.length > 0) {
  logger.winstonLogger.error(
    `❌ Missing required environment variables: ${missingEnv.join(", ")} `
  );
  process.exit(1); // Exit process due to critical error
}

const majorNodeVersion: number = Number(process.env.NODE_VERSION?.split(".")[0] || 0);

/**
 * Starts the server on the specified port
 */
const startServer = (): void => {
  const port: number = parseInt(process.env.PORT || "8000", 10);

  httpServer.listen(port, () => {
    logger.winstonLogger.info(`📑 Visit the documentation at: http://localhost:${port}`);
    logger.winstonLogger.info(`🩺 healthcheck at: http://localhost:${port}/api/v1/healthcheck`);
    logger.winstonLogger.info(`⚙️  Server is running on port: ${port}`);
  });
};

/**
 * Graceful shutdown handling
 */
const handleExit = async (signal: string): Promise<void> => {
  logger.winstonLogger.info(`📴 Received ${signal}. Closing server gracefully...`);
  try {
    if (prismaClient) {
      await prismaClient.$disconnect();
      logger.winstonLogger.info("✅ Prisma Client disconnected.");
    }
    process.exit(0);
  } catch (err) {
    logger.winstonLogger.error("❌ Error during shutdown: ", err);
    process.exit(1);
  }
};

/**
 * Main execution flow
 */
const initializeApp = async (): Promise<void> => {
  if (majorNodeVersion < 14) {
    logger.winstonLogger.error("❌ Node.js v14 or higher is required.");
    process.exit(1);
  }

  try {
    await connectMongoDB();
    logger.winstonLogger.info("✅ Connected to MongoDB successfully.");
    startServer();
  } catch (err) {
    logger.winstonLogger.error("❌ MongoDB connection failed: ", (err as Error).stack || err);
    process.exit(1); // Exit process on critical failure
  }
};

// Start the application
initializeApp().catch((err) =>
  logger.winstonLogger.error("❌ Initialization failed: ", (err as Error).stack || err)
);

// Handle termination signals
["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal as NodeJS.Signals, () => handleExit(signal));
});
