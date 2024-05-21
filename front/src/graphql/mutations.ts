import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      code
      success
      message
      id
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

export const CREATE_COMMENT_MUTATION = gql`
  mutation CreateComment($comment: String!, $postId: String!, $token: String!) {
    createComment(comment: $comment, postId: $postId, token: $token) {
      code
      message
      success
    }
  }
`;

export const UPDATE_COMMENT_MUTATION = gql`
  mutation UpdateComment($commentId: String!, $comment: String!, $token: String!) {
    updateComment(commentId: $commentId, comment: $comment, token: $token) {
      code
      message
      success
    }
  }
  
`;

export const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteComment($commentId: String!, $token: String!) {
    deleteComment(commentId: $commentId, token: $token) {
      code
      message
      success
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
  mutation UpdatePost($postId: String!, $token: String!, $title: String, $body: String) {
    updatePost(postId: $postId, token: $token, title: $title, body: $body) {
      code
      message
      success
    }
  }
`;

export const DELETE_POST_MUTATION = gql`
  mutation DeletePost($postId: String!, $token: String!) {
    deletePost(postId: $postId, token: $token) {
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
