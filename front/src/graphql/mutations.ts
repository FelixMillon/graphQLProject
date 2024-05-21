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
