import type { GraphQLFieldResolver } from "graphql";

const asyncHandler = (resolver: GraphQLFieldResolver<any, any>) => {
  return async (parent: any, args: any, context: any, info: any) => {
    try {
      return await resolver(parent, args, context, info);
    } catch (err) {
      throw err;
    }
  };
};

export { asyncHandler };
