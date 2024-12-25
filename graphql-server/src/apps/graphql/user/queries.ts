export const queries = `#graphql
    getUserToken(email: String!, password: String!): String
    getUserByUsernameOrEmail(email: String!, password: String!):User
`;