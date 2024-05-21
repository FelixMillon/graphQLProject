import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const SIGN_IN_MUTATION = gql`
  mutation SignIn($username: String!, $password: String!) {
    signIn(email: $username, password: $password) {
      code
      success
      token
      message
    }
  }
`;

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [signIn, { data }] = useMutation(SIGN_IN_MUTATION);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await signIn({ variables: { username, password } });
      if (!data.signIn.success) {
        setErrorMessage(data.signIn.message);
      } else {
        console.log(data.signIn.token);
        // stocker le token dans storage
      }
    } catch (error) {
      console.error("Erreur lors de la connexion", error);
    }
  };

  return (
    <div>
  <h2 style={{ textAlign: 'center', color: '#333' }}>Page de connexion</h2>
  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
    <label style={{ marginBottom: '10px' }}>
      Nom d'utilisateur :
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginTop: '5px' }}
      />
    </label>
    <label style={{ marginBottom: '10px' }}>
      Mot de passe :
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginTop: '5px' }}
      />
    </label>
    <button type="submit" style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer' }}>
      Se connecter
    </button>
  </form>
</div>
  );
}

export default LoginPage;