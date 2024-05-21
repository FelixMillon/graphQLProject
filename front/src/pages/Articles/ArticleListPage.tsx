import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_POSTS_QUERY } from '../../graphql/queries';
import { CREATE_POST_MUTATION } from '../../graphql/mutations';
import { Link } from 'react-router-dom';

const ArticleListPage = () => {
  const { loading, error, data } = useQuery(GET_POSTS_QUERY);
  const [createPost] = useMutation(CREATE_POST_MUTATION);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Récupérer le token du localStorage
    if (!token) {
      console.error('No token found, please login first');
      return;
    }

    try {
      await createPost({ variables: { title, body, token }, refetchQueries: [{ query: GET_POSTS_QUERY }] });
      setTitle('');
      setBody('');
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Articles</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Create Post</button>
      </form>
      {data.getPosts.length > 0 ? (
        data.getPosts.map((post: any) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/article/${post.id}`}>Read more</Link>
          </div>
        ))
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
};

export default ArticleListPage;
