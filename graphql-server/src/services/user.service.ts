import { ApiError, asyncHandler, prismaClient } from "../lib";
import JWT from "jsonwebtoken"
interface CreateUserPayload {
  user_name: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar_url: string;
  password: string;
}
class UserService {
  public static createUser = asyncHandler(
    async (Payload: CreateUserPayload) => {
      const { user_name, first_name, last_name, email, avatar_url, password } =
        Payload;
      if (!user_name)
        return new ApiError(404, "Username not found!,It is required field.");
      if (!first_name)
        return new ApiError(404, "First Name not found!,It is required field.");
      if (!email)
        return new ApiError(404, "Email not found!,It is required field.");
      if (!password)
        return new ApiError(404, "Password not found!,It is required field.");
    }
  );
  private static getUserByUsernameOrEmail = asyncHandler(async () => {});
  public static deleteUser = asyncHandler(async () => {});
  public static updateUser = asyncHandler(async () => {});
  private static changePassword = asyncHandler(async () => {});
  private static resetPassword = asyncHandler(async () => {});
  private static verifyEmail = asyncHandler(async () => {});
}

export { UserService };
