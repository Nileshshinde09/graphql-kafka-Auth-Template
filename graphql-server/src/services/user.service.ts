import { ApiError, asyncRestApiHandler, prismaClient } from "../lib";
import JWT from "jsonwebtoken";
interface CreateUserPayload {
  user_name: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar_url: string;
  password: string;
}
class UserService {
  public static createUser = asyncRestApiHandler(
    async (Payload: CreateUserPayload) => {
      const { user_name, first_name, last_name, email, avatar_url, password } =
        Payload;
      if (!user_name)
        return ApiError.GraphQLError(
          404,
          "Username not found!,It is required field."
        );
      if (!first_name)
        return ApiError.GraphQLError(
          404,
          "First Name not found!,It is required field."
        );
      if (!email)
        return ApiError.GraphQLError(
          404,
          "Email not found!,It is required field."
        );
      if (!password)
        return ApiError.GraphQLError(
          404,
          "Password not found!,It is required field."
        );
    }
  );
  private static getUserByUsernameOrEmail = asyncRestApiHandler(async () => {});
  public static deleteUser = asyncRestApiHandler(async () => {});
  public static updateUser = asyncRestApiHandler(async () => {});
  private static changePassword = asyncRestApiHandler(async () => {});
  private static resetPassword = asyncRestApiHandler(async () => {});
  private static verifyEmail = asyncRestApiHandler(async () => {});
}

export { UserService };
