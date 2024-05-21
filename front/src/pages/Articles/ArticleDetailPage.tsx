import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_POST_QUERY, GET_POSTS_QUERY } from '../../graphql/queries';
import { UPDATE_POST_MUTATION, DELETE_POST_MUTATION } from '../../graphql/mutations';
import {getCookie} from '../../storage/cookies'
import { Post } from '../../types/types';

const ArticleDetailPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const { loading, error, data } = useQuery(GET_POST_QUERY, { variables: { postId } });
  const [updatePost] = useMutation(UPDATE_POST_MUTATION);
  const [deletePost] = useMutation(DELETE_POST_MUTATION);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const token = getCookie('gqltoken');
  const userId = getCookie('gqlid');

  const handleUpdate = (e: React.FormEvent) => {    
    e.preventDefault();
    updatePost({ variables: { postId, token, title, body }, refetchQueries: [{ query: GET_POST_QUERY, variables: { postId } }] });
  };

  const handleDelete = () => {
    deletePost({ variables: { postId, token }, refetchQueries: [{ query: GET_POSTS_QUERY }] });
    navigate('/articles');
  };



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.getPostById) {
    return <p>Post not found</p>;
  }

  const post: Post = data.getPostById;

  return (
    <div>
      <h1>{data.getPostById.title}</h1>
      <p>{data.getPostById.body}</p>
      {data.getPostById.authorId == userId && (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="submit">Update Post</button>
          <button onClick={handleDelete}>Delete Post</button>
        </form>
      )}
    </div>
  );
};

export default ArticleDetailPage;
