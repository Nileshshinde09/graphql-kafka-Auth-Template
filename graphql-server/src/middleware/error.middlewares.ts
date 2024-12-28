import mongoose from "mongoose";
import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../lib/ApiError.js";
import { logger } from "../logger";

/**
 * Error handling middleware for catching and formatting errors.
 *
 * @param {Error | ApiError} err - The error object to handle.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The Express next middleware function.
 * 
 * @description This middleware catches errors thrown by any request handler wrapped in the asyncHandler and ensures they are formatted consistently.
 */
const errorHandler = (
  err: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  let error: ApiError;

  // Check if the error is an instance of ApiError
  if (!(err instanceof ApiError)) {
    // Assign an appropriate status code
    const statusCode = 
      "statusCode" in err && typeof err.statusCode === "number"
        ? err.statusCode
        : err instanceof mongoose.Error
        ? 400
        : 500;

    // Set a message from the native Error instance or a default one
    const message = err.message || "Something went wrong";

    // Wrap the error in an ApiError instance for consistency
    error = new ApiError(statusCode, message, (err as any)?.errors || [], err.stack);
  } else {
    error = err;
  }

  // Create a consistent error response
  const response = {
    statusCode: error.statusCode,
    message: error.message,
    errors: error.errors || [],
    ...(process.env.NODE_ENV === "development" ? { stack: error.stack } : {}), // Include stack trace only in development
  };

  // Log the error message
  logger.winstonLogger.error(error.message);

  // Send the error response
  return res.status(error.statusCode).json(response);
};

export { errorHandler };
