import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from '../../graphql/mutations';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthContext';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const [signup] = useMutation(SIGNUP_MUTATION, {
    onCompleted: (data) => {
      navigate('/login');
    },
    onError: (error) => {
      console.error("Signup failed:", error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup({ variables: { email, name, password } });
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
