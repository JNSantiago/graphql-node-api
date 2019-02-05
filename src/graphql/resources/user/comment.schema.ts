const commentTypes = `
    id: ID!
    comment: String!
    createdAt: String!
    updatedAt: String!
    user: User!
    post: Post!

    input CommentInput {
        comment: String!
        post: Int!
        user: Int!
    }
`;

const commentQueries = `
    commentsByPosts(post: ID!, first: Int, offset: Int): [comment!]!
`;

const commentMutations = `
    createComment(input: CommentInput!): Comment
    updateComment(id: ID!, input: CommentInput!): Comment
    deletComment(id: ID!): Boolean
`;

export {
    commentTypes,
    commentQueries,
    commentMutations
}