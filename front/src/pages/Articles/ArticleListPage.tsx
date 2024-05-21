import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_POSTS_QUERY } from '../../graphql/queries';
import { CREATE_POST_MUTATION } from '../../graphql/mutations';
import { DELETE_LIKE_POST } from '../../graphql/mutations';
import { CREATE_LIKE_POST } from '../../graphql/mutations';
import { Link } from 'react-router-dom';
import { Comment, Post } from '../../types/types'
import {getCookie} from '../../storage/cookies'
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

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div className="container">
      <h1>Articles</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-btn">Create Post</button>
      </form>
      {data.getPosts.length > 0 ? (
        data.getPosts.map((post: Post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {post.usersLikes.some(like => like.userId === userId) ? (
                <button onClick={() => handleDislike(post.id)} className="like-btn">Dislike Post</button> 
              ) : (
                <button onClick={() => handleLike(post.id)} className="like-btn">Like Post</button> 
              )}
            <h3>Comments:</h3>
            {post.comments.map((comment: Comment) => (
              <div key={comment.id}>
                <p>{comment.comment}</p>
              </div>
            ))}
            <h3 className="likes">Likes:</h3>
            <p>{post.usersLikes.length} likes</p>
            <Link to={`/article/${post.id}`} className="link">Read more</Link>
          </div>
        ))
      ) : (
        <p className="no-articles">No articles found.</p>
      )}
    </div>
  );
};

export default ArticleListPage;
