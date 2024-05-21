import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_POST_QUERY } from '../../graphql/queries';
import { CREATE_COMMENT_MUTATION, UPDATE_COMMENT_MUTATION, DELETE_COMMENT_MUTATION } from '../../graphql/mutations';
import { getCookie } from '../../storage/cookies';
import { Comment } from '../../types/types';
import './ArticleCommentPage.css';

const ArticleCommentPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const { loading, error, data } = useQuery(GET_POST_QUERY, { variables: { postId } });
  const [createComment] = useMutation(CREATE_COMMENT_MUTATION);
  const [updateComment] = useMutation(UPDATE_COMMENT_MUTATION);
  const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION);
  const [comment, setComment] = useState('');
  const [commentInputs, setCommentInputs] = useState<{ [key: string]: string }>({});
  const token = getCookie('gqltoken');
  const userId = getCookie('gqlid');

  const handleCommentChange = (commentId: string, value: string) => {
    setCommentInputs(prev => ({ ...prev, [commentId]: value }));
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    createComment({ variables: { comment, postId, token }, refetchQueries: [{ query: GET_POST_QUERY, variables: { postId } }] });
  };

  const handleUpdate = (e: React.FormEvent, commentId: string) => {
    e.preventDefault();
    updateComment({ variables: { commentId, comment: commentInputs[commentId], token }, refetchQueries: [{ query: GET_POST_QUERY, variables: { postId } }] });
  };

  const handleDelete = (e: React.FormEvent, commentId: string) => {
    e.preventDefault();
    deleteComment({ variables: { commentId, token }, refetchQueries: [{ query: GET_POST_QUERY, variables: { postId } }] });
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div className="container">
      <form onSubmit={handleCreate}>
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Create Comment</button>
      </form>

      <h1>Commentaires</h1>
      {data.getPostById.comments.length > 0 ? (
        data.getPostById.comments.map((oneComment: Comment) => (
          <div className="comment" key={oneComment.id}>
            <h2>{oneComment.comment}</h2>
            {oneComment.authorId === userId && (
              <div className="comment-actions">
                <form onSubmit={(e) => handleUpdate(e, oneComment.id)} className="update-form">
                  <textarea
                    placeholder="Comment"
                    value={commentInputs[oneComment.id] || ''}
                    onChange={(e) => handleCommentChange(oneComment.id, e.target.value)}
                  />
                  <button type="submit">Update Comment</button>
                </form>
                <form onSubmit={(e) => handleDelete(e, oneComment.id)}>
                  <button type="submit" className="delete-btn">Delete Comment</button>
                </form>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="no-comments">No comments found.</p>
      )}
    </div>
  );
};

export default ArticleCommentPage;
