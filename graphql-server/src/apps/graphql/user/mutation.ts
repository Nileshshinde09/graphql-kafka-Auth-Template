export const mutations = `#graphql
    # createUser(firstName: String!,
    # lastName: String,
    # email: String!,
    # password: String!): String
    # deleteUser
    # updateUser
    # changePassword
    # resetPassword
    # verifyEmail
    type Mutation {
        setMessage(message: String!): String
    }

`;
