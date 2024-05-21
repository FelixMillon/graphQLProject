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

export const UPDATE_POST_MUTATION = gql`
  mutation UpdatePost($id: ID!, $title: String, $body: String) {
    updatePost(postId: $id, title: $title, body: $body) {
      code
      success
      message
    }
  }
`;

export const DELETE_POST_MUTATION = gql`
  mutation DeletePost($id: ID!) {
    deletePost(postId: $id) {
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
