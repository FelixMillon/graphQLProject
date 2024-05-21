import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_POST_QUERY, GET_POSTS_QUERY } from '../../graphql/queries';
import { UPDATE_POST_MUTATION, DELETE_POST_MUTATION } from '../../graphql/mutations';

const ArticleDetailPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const { loading, error, data, refetch  } = useQuery(GET_POST_QUERY, { variables: { postId } });
  const [updatePost] = useMutation(UPDATE_POST_MUTATION);
  const [deletePost] = useMutation(DELETE_POST_MUTATION);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updatePost({ variables: { postId, title, body }, refetchQueries: [{ query: GET_POST_QUERY, variables: { postId } }] });
  };

  const handleDelete = () => {
    deletePost({ variables: { postId }, refetchQueries: [{ query: GET_POSTS_QUERY }] });
    navigate('/articles');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.getPostById.title}</h1>
      <p>{data.getPostById.body}</p>
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
      </form>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
};

export default ArticleDetailPage;