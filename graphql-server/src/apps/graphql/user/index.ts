import { mutations } from "./mutation.ts";
import { queries } from "./queries";
import { typeDefs } from "./typedef";
import UserGraphQLResolvers from "./resolvers"
const UserGraphQLSchema = {
  mutations,
  queries,
  typeDefs,
};

export  {UserGraphQLSchema,UserGraphQLResolvers};

