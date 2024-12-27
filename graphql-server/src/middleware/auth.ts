import type { Request } from "express";
import jwt from "jsonwebtoken";
import { REQ_TYPES, STATUSCODE } from "../constants/Enums";
import { JWT_SECRET } from "../constants/env";
import { ApiError } from "../lib";
const verifyJWT = (req: Request, customRequestType: REQ_TYPES): Request => {
  try {
    const token: string =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    const decodedToken = jwt.verify(token, JWT_SECRET);
    //TODO: add database code here 
    return req;

} catch (err:any) {
    if (customRequestType === REQ_TYPES.GRAPHQL) throw ApiError.GraphQLError(STATUSCODE.UNAUTHORIZED,"Invalid Token or Token Expired!") 
    else if(customRequestType ===REQ_TYPES.RESTAPI) throw new ApiError(STATUSCODE.UNAUTHORIZED,"Invalid Token or Token Expired!")
    else throw ApiError.SocketIOError(STATUSCODE.UNAUTHORIZED,"Invalid Token or Token Expired!")
  }
};

export { verifyJWT };
