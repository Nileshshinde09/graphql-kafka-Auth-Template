import type { Request, Response } from "express";
import { REQ_TYPES, STATUSCODE } from "../../constants/Enums";
import { ApiError } from "../../lib";
import { verifyJWT } from "../auth";
export const middlewareRootFC = async ({req,res,}: {
  req: Request;
  res: Response;
}):Promise<any> => {
  try {
    const customRequestType = REQ_TYPES.GRAPHQL;
    req = verifyJWT(req,customRequestType);
    return { req, res, customRequestType };
  } catch (err: any) {
    throw ApiError.GraphQLError(STATUSCODE.UNAUTHORIZED, "");
  }
};
