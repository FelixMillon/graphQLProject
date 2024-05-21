// components/ArticleListPage.jsx
import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_POSTS_QUERY } from '../../graphql/queries';
import { CREATE_POST_MUTATION, DELETE_LIKE_POST, CREATE_LIKE_POST } from '../../graphql/mutations';
import { Link } from 'react-router-dom';
import { Comment, Post } from '../../types/types';
import { getCookie } from '../../storage/cookies';
import './ArticleListPage.css';

const ArticleListPage = () => {
  const { loading, error, data, refetch } = useQuery(GET_POSTS_QUERY);
  const [createPost] = useMutation(CREATE_POST_MUTATION);
  const [createLikePost] = useMutation(CREATE_LIKE_POST);
  const [deleteLikePost] = useMutation(DELETE_LIKE_POST);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const userId = getCookie('gqlid');
  const token = getCookie('gqltoken');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPost({ variables: { title, body, token }, refetchQueries: [{ query: GET_POSTS_QUERY }] });
      setTitle('');
      setBody('');
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  const handleLike = async (postId: string) => {
    try {
      await createLikePost({ variables: { postId, token } });
      await refetch();
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleDislike = async (postId: string) => {
    try {
      await deleteLikePost({ variables: { postId, token } });
      await refetch();
    } catch (error) {
      console.error('Error disliking post:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="article-list">
      <h1>Articles</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
      {data.getPosts.length > 0 ? (
        data.getPosts.map((post: Post) => (
          <div className="article-box" key={post.id}>
            <h2 className="article-title">{post.title}</h2>
            <p className="article-body">{post.body}</p>
            {post.usersLikes.some(like => like.userId !== userId) ? (
              <button onClick={() => handleDislike(post.id)}>Dislike Post</button>
            ) : (
              <button onClick={() => handleLike(post.id)}>Like Post</button>
            )}
            <div className="article-comments">
              <h3>Comments:</h3>
              {post.comments.map((comment: Comment) => (
                <div className="comment" key={comment.id}>
                  <p>{comment.comment}</p>
                </div>
              ))}
              <h3>Likes:</h3>
              <p className="likes">{post.usersLikes.length} likes</p>
            </div>
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
