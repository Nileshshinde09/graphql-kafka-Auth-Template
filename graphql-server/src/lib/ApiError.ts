import { GraphQLError } from "graphql";  // For GraphQL integration

export class ApiError extends Error {
  public statusCode: number;
  public success: boolean;
  public errors: string[];
  public data: any;

  constructor(
    statusCode: number,
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
  static GraphQLError(statusCode: number, message: string, errors: string[] = []): GraphQLError {
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
  static SocketIOError(socket: any, statusCode: number, message: string, errors: string[] = []): void {
    const apiError = new ApiError(statusCode, message, errors);

    // Emit the error to the client via the socket
    socket.emit("error", {
      code: statusCode,
      message: apiError.message,
      errors: apiError.errors,
    });
  }
}


  