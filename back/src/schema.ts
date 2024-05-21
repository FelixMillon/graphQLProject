import gql from "graphql-tag";

export const typeDefs = gql`

type User {
  id: ID!
  email: String!
  name: String
  posts: [Post]
  postsLikes: [UserPostLikes]
}

type Post {
  id: ID!
  title: String!
  body: String!
  authorId: String!
  comments: [Comment]
  usersLikes: [UserPostLikes]
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
  userId: String!
}

type Query {
  getPosts: [Post!]!
  getPostById(postId: String!): Post!
  getPostsByUser(userId: String!): [Post!]!
  getLikesByPost(postId: String!): [UserPostLikes!]
}

type Mutation {
  createUser(email: String!, name: String!, password: String!): CreateUserResponse
  signIn(email: String!, password: String!): SignInResponse
  createLikePost(postId: String!, token: String!): CreateLikeResponse
  deleteLikePost(postId: String!, token: String!): DeleteLikeResponse
  createPost(title: String!, body: String!, token: String!): CreatePostResponse
  deletePost(postId: String!, token: String!): DeletePostResponse
  updatePost(postId: String!, title: String, body: String, token: String!): UpdatePostResponse
  createComment(comment: String!, postId: String!, token: String!): CreateCommentResponse
  deleteComment(commentId: String!, token: String!): DeleteCommentResponse
  updateComment(commentId: String!, comment: String!, token: String!): UpdateCommentResponse
}

type SignInResponse {
  code: Int!
  success: Boolean!
  message: String!
  token: String
  id: String
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

type DeleteLikeResponse {
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