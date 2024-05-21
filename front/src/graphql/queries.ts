import { gql } from '@apollo/client';

export const GET_POSTS_QUERY = gql`
  query GetPosts {
    getPosts {
      id
      title
      body
    }
  }
`;

export const GET_POST_QUERY = gql`
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      body
      comments {
        id
        comment
      }
    }
  }
`;
