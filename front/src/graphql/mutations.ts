import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      code
      success
      message
      token
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation CreateUser($email: String!, $name: String!, $password: String!) {
    createUser(email: $email, name: $name, password: $password) {
      code
      success
      message
      user {
        id
        email
        name
      }
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($title: String!, $body: String!, $token: String!) {
    createPost(title: $title, body: $body, token: $token) {
      code
      success
      message
    }
  }
`;

export const CREATE_COMMENT_MUTATION = gql`
  mutation CreateComment($comment: String!, $postId: String!, $token: String!) {
    createComment(comment: $comment, postId: $postId, token: $token) {
      code
      success
      message
      comment {
        id
        comment
        postId
        authorId
      }
    }
  }
`;

export const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteComment($commentId: ID!, $token: String!) {
    deleteComment(commentId: $commentId, token: $token) {
      code
      success
      message
    }
  }
`;

export const UPDATE_COMMENT_MUTATION = gql`
  mutation UpdateComment($commentId: ID!, $comment: String!, $token: String!) {
    updateComment(commentId: $commentId, comment: $comment, token: $token) {
      code
      success
      message
    }
  }
`;

export const CREATE_LIKE_POST = gql`
  mutation CreateLikePost($postId: String!, $token: String!) {
    createLikePost(postId: $postId, token: $token) {
      code
      success
      message
    }
  }
`;

export const DELETE_LIKE_POST = gql`
  mutation DeleteLikePost($postId: String!, $token: String!) {
    deleteLikePost(postId: $postId, token: $token) {
      code
      success
      message
    }
  }
`;
