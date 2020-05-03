const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Post {
        id: ID!
        name: String!
        status: String!
    }
  
    type Query {
        getPost(id: ID!): Post
        getAllPosts: Post
    }
    
    input PostInput {
        name: String!
        status: String!
    }
    
    type Mutation {
        createPost(input: PostInput) : Post
        updatePost(id: ID!, input: PostInput): Post
        deletePost(id: ID!) : Post
    }

    schema {
        query: Query,
        mutation: Mutation
    }
`);