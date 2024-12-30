import { mutations } from "./mutation.ts";
import { queries } from "./queries.ts";
import { typeDefs } from "./typedef.ts";
import UserGraphQLResolvers from "./resolvers.ts";
const UserGraphQLSchema = {
  mutations,
  queries,
  typeDefs,
};

export { UserGraphQLSchema, UserGraphQLResolvers };
