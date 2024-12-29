import mongoose from "mongoose";
import { logger } from "../logger";
import { DB_NAME } from "../constants";

let mongoDBInstance = undefined;

const connectMongoDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    mongoDBInstance = connectionInstance;
    logger.winstonLogger.info(
      `\n☘️  MongoDB Connected! Db host: ${connectionInstance.connection.host}\n`
    );
  } catch (error) {
    logger.winstonLogger.error("MongoDB connection error: ", error);
    process.exit(1);
  }
};

export { connectMongoDB, mongoDBInstance };
