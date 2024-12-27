import type { GraphQLFieldResolver } from "graphql";
import type { Request, Response, NextFunction } from "express";

const asyncGraphQLHandler = (resolver: GraphQLFieldResolver<any, any>) => {
  return async (parent: any, args: any, context: any, info: any) => {
    try {
      return await resolver(parent, args, context, info);
    } catch (err) {
      throw err;
    }
  };
};

const asyncRestApiHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next); // Pass any errors to the error-handling middleware
  };
};


export { asyncGraphQLHandler, asyncRestApiHandler };
