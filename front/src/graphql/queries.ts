import { gql } from '@apollo/client';

export const GET_POSTS_QUERY = gql`
  query GetPosts {
    getPosts {
      id
      title
      body
      authorId
      comments {
        id
        comment
        authorId
      }
      usersLikes {
        id
        userId
      }
    }
  }
`;

export const GET_POST_QUERY = gql`
query getPostById($postId: String!) {
  getPostById(postId: $postId) {
      id
      title
      body
      authorId
      comments {
        id
        comment
        authorId
      }
      usersLikes {
        id
        userId
      }
    }
  }
`;
