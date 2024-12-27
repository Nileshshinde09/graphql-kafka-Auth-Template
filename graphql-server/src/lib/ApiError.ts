import { GraphQLError } from "graphql";  // For GraphQL integration
import { STATUSCODE } from "../constants/Enums";
export class ApiError extends Error {
  public statusCode: STATUSCODE;
  public success: boolean;
  public errors: string[];
  public data: any;

  constructor(
    statusCode: STATUSCODE,
    message: string = "Something went wrong",
    errors: string[] = [],
    data: any = null
  ) {
    super(message);
    this.statusCode = statusCode;
    this.success = false;
    this.errors = errors;
    this.data = data;

    // Ensure the correct stack trace is captured
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }

  // Static method to handle GraphQL errors
  static GraphQLError(statusCode: STATUSCODE, message: string, errors: string[] = []): GraphQLError {
    const apiError = new ApiError(statusCode, message, errors);
    return new GraphQLError(message, {
      extensions: {
        code: statusCode,
        message: apiError.message,
        errors: apiError.errors,
      },
    });
  }

  // Static method to handle Socket.IO errors
  static SocketIOError(socket: any, statusCode: STATUSCODE, message: string, errors: string[] = []): void {
    const apiError = new ApiError(statusCode, message, errors);

    // Emit the error to the client via the socket
    socket.emit("error", {
      code: statusCode,
      message: apiError.message,
      errors: apiError.errors,
    });
  }
}


  