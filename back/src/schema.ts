import gql from "graphql-tag";

export const typeDefs = gql`

type User {
  id: ID!
  username: String!
  email: String
  name: String
  posts: [Post]
  postsLike: [UserPostLikes]
}

type Post {
  id: ID!
  slug: String!
  title: String!
  body: String!
  authorId: String!
  comments: [Comment]
}

type Comment {
  id: ID!
  comment: String!
  postId: String!
  authorId: String!
}

type UserPostLikes {
  id: ID!
  postId: String!
  authorId: String!
}


type Query {
  getPosts: [Post!]!
  getPostsByUser(userId: String!): [Post!]!
}

type Mutation {
  createUser(email: String!, name: String!, password: String!): CreateUserResponse
  signIn(email: String!, password: String!): SignInResponse
  createLikePost(postId: String!, token: String!): CreateLikeResponse
  createPost(title: String!, body: String!, token: String!): CreatePostResponse
  deletePost(postId: String!, token: String!): DeletePostResponse
  updatePost(title: String, body: String, token: String!): UpdatePostResponse
  createComment(comment: String!, postId: String!, token: String!): CreateCommentResponse
  deleteComment(commentId: String!, token: String!): DeleteCommentResponse
  updateComment(commentId: String!, comment: String!, token: String!): UpdateCommentResponse
}

type SignInResponse {
  code: Int!
  success: Boolean!
  message: String!
  token: String
}

type CreateUserResponse {
  code: Int!
  success: Boolean!
  message: String!
  user: User
}

type CreatePostResponse {
  code: Int!
  success: Boolean!
  message: String!
}

type CreateLikeResponse {
  code: Int!
  success: Boolean!
  message: String!
}

type DeletePostResponse {
  code: Int!
  success: Boolean!
  message: String!
}

type UpdatePostResponse {
  code: Int!
  success: Boolean!
  message: String!
}

type CreateCommentResponse {
  code: Int!
  success: Boolean!
  message: String!
}

type DeleteCommentResponse {
  code: Int!
  success: Boolean!
  message: String!
}

type UpdateCommentResponse {
  code: Int!
  success: Boolean!
  message: String!
}

`