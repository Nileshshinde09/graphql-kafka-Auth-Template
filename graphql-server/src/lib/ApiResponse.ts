class RestApiResponse<T> {
  public statusCode: number;
  public data: T;
  public message: string;
  public success: boolean;

  constructor(statusCode: number, data: T, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}
class GraphQLResponse<T> {
  public data: T | null;
  public errors: string[] | null;
  public message: string;

  constructor(data: T | null, errors: string[] = [], message = "Success") {
    this.data = data;
    this.errors = errors.length > 0 ? errors : null;
    this.message = message;
  }
}
class SocketIOResponse<T> {
  public event: string;
  public data: T;
  public success: boolean;
  public message: string;

  constructor(event: string, data: T, success = true, message = "Success") {
    this.event = event;
    this.data = data;
    this.success = success;
    this.message = message;
  }
}

export const ApiResponse = { SocketIOResponse, GraphQLResponse, RestApiResponse };
