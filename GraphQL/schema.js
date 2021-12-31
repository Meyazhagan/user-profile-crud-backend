const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type User {
        id: ID
        avatar: String!
        location: String!
        name: String!
        phone: String!
        email: String!
        profile: Profile
    }

    type Profile {
        skill: [String!]!
        role: [String!]!
    }

    
    type Query {
        allUsers: UserResponse
        getUser(id: ID): UserResponse
    }
    
    input UserInput {
        id: ID
        avatar: String!
        location: String!
        name: String!
        phone: String!
        email: String!
        profile: ProfileInput
    }

    input ProfileInput {
        skill: [String!]!
        role: [String!]!
    }

    input UserUpdateInput {
        id: ID
        avatar: String
        location: String
        name: String
        phone: String
        email: String
        profile: ProfileInput
    }

    input ProfileUpdateInput {
        skill: [String]
        role: [String]
    }

    type UserResponse {
        ok: Boolean!
        users: [User]
        user: User
        errors: [Error!]
        success: String!
    }

    type Error {
        path: String
        message: String!
    }

    type Mutation {
        createUser(input: UserInput): UserResponse
        updateUser(id: ID, input: UserUpdateInput): UserResponse
        deleteUser(id: ID): UserResponse
        createProfile(userId: ID, input:ProfileInput): UserResponse
        updateProfile(userId: ID, input: ProfileUpdateInput): UserResponse
        deleteProfile(userId: ID): UserResponse
    }

`);

module.exports = schema;
