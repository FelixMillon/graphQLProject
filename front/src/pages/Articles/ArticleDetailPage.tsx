import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_POST_QUERY } from '../../graphql/queries';
import { CREATE_COMMENT_MUTATION, DELETE_COMMENT_MUTATION, UPDATE_COMMENT_MUTATION } from '../../graphql/mutations';
import { useAuth } from '../../components/AuthContext';
import { getCookie } from '../../storage/cookies';
import { Comment as CommentType } from '../../types/types';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_POST_QUERY, { variables: { id } });
  const [createComment] = useMutation(CREATE_COMMENT_MUTATION);
  const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION);
  const [updateComment] = useMutation(UPDATE_COMMENT_MUTATION);
  const { isAuthenticated } = useAuth();
  const [newComment, setNewComment] = useState('');
  const [editCommentId, setEditCommentId] = useState<string | null>(null);
  const [editComment, setEditComment] = useState('');
  const token = getCookie('gqltoken');

  const handleCreateComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      console.error('No token found, please login first');
      return;
    }

    try {
      await createComment({
        variables: { comment: newComment, postId: id, token },
        refetchQueries: [{ query: GET_POST_QUERY, variables: { id } }],
      });
      setNewComment('');
    } catch (err) {
      console.error("Error creating comment:", err);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    if (!token) {
      console.error('No token found, please login first');
      return;
    }

    try {
      await deleteComment({
        variables: { commentId, token },
        refetchQueries: [{ query: GET_POST_QUERY, variables: { id } }],
      });
    } catch (err) {
      console.error("Error deleting comment:", err);
    }
  };

  const handleEditComment = (commentId: string, comment: string) => {
    setEditCommentId(commentId);
    setEditComment(comment);
  };

  const handleUpdateComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      console.error('No token found, please login first');
      return;
    }

    try {
      await updateComment({
        variables: { commentId: editCommentId, comment: editComment, token },
        refetchQueries: [{ query: GET_POST_QUERY, variables: { id } }],
      });
      setEditCommentId(null);
      setEditComment('');
    } catch (err) {
      console.error("Error updating comment:", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.getPost.title}</h1>
      <p>{data.getPost.body}</p>

      {isAuthenticated ? (
        <form onSubmit={handleCreateComment}>
          <input
            type="text"
            placeholder="Ajouter un commentaire"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit">Ajouter</button>
        </form>
      ) : (
        <p>Veuillez vous connecter pour ajouter un commentaire.</p>
      )}

      <div>
        <h3>Commentaires</h3>
        {data.getPost.comments.map((comment: CommentType) => (
          <div key={comment.id}>
            {editCommentId === comment.id ? (
              <form onSubmit={handleUpdateComment}>
                <input
                  type="text"
                  value={editComment}
                  onChange={(e) => setEditComment(e.target.value)}
                />
                <button type="submit">Modifier</button>
                <button type="button" onClick={() => setEditCommentId(null)}>Annuler</button>
              </form>
            ) : (
              <>
                <p>{comment.comment}</p>
                <button onClick={() => handleEditComment(comment.id, comment.comment)}>Modifier</button>
                <button onClick={() => handleDeleteComment(comment.id)}>Supprimer</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleDetailPage;
