import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_POST_QUERY, GET_POSTS_QUERY } from '../../graphql/queries';
import { UPDATE_POST_MUTATION, DELETE_POST_MUTATION, CREATE_COMMENT_MUTATION } from '../../graphql/mutations';
import { Post, Comment as CommentType } from '../../types/types';
import './ArticleDetaiPage.css';

const ArticleDetailPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const { loading, error, data, refetch } = useQuery(GET_POST_QUERY, { variables: { postId } });
  const [updatePost] = useMutation(UPDATE_POST_MUTATION);
  const [deletePost] = useMutation(DELETE_POST_MUTATION);
  const [createComment] = useMutation(CREATE_COMMENT_MUTATION);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [comment, setComment] = useState('');

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updatePost({ variables: { postId, title, body }, refetchQueries: [{ query: GET_POST_QUERY, variables: { postId } }] });
  };

  const handleDelete = () => {
    deletePost({ variables: { postId }, refetchQueries: [{ query: GET_POSTS_QUERY }] });
    navigate('/articles');
  };

  const handleCreateComment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createComment({
        variables: { postId, comment },
        refetchQueries: [{ query: GET_POST_QUERY, variables: { postId } }],
      });
      setComment(''); // Clear the input after adding comment
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };

  const handleBack = () => {
    navigate('/articles');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.getPostById) {
    return <p>Post not found</p>;
  }

  const post: Post = data.getPostById;

  return (
    <div className="article-detail">
      <div className="article-box">
        <h1 className="article-title">{post.title}</h1>
        <p className="article-body">{post.body}</p>
        <form onSubmit={handleUpdate}>
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
          <button type="submit">Update Post</button>
        </form>
        <div className="button-group">
          <button onClick={handleDelete}>Delete Post</button>
        </div>
        <form onSubmit={handleCreateComment}>
          <div className="form-group">
            <textarea
              placeholder="Add a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button type="submit">Add Comment</button>
        </form>
        <div className="comments-section">
          <h3>Comments:</h3>
          {post.comments.map((comment: CommentType) => (
            <div key={comment.id} className="comment">
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
        <button onClick={handleBack}>Back to Articles</button>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
