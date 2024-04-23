import { GraphQLError } from "graphql";
import { getClosestColor } from "./colors.js";
import { Resolvers } from "./types.js";
import { createUser } from "./mutations/createUser.js";
import { signIn } from "./mutations/signIn.js";
import { createLikePost } from "./mutations/createLikePost.js";
import { deleteLikePost } from "./mutations/deleteLikePost.js";
import { getPosts } from "./query/getPosts.js";
import { getPostsByUser } from "./query/getPosts.js";
import { createPost } from "./mutations/createPost.js";
import { deletePost } from "./mutations/deletePost.js";
import { updatePost } from "./mutations/updatePost.js";
import { createComment } from "./mutations/createComment.js";
import { deleteComment } from "./mutations/deleteComment.js";
import { updateComment } from "./mutations/updateComment.js";

export const resolvers: Resolvers = {
  Query: {
    getPosts,
    getPostsByUser
  },
  Mutation: {
    createUser: createUser,
    signIn: signIn,
    createLikePost: createLikePost,
    deleteLikePost: deleteLikePost,
    createPost: createPost,
    deletePost: deletePost,
    updatePost: updatePost,
    createComment: createComment,
    deleteComment: deleteComment,
    updateComment: updateComment
  }
}


