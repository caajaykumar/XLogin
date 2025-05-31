import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      setMessage('Both fields are required');
      return;
    }

    
    if (username === 'user' && password === 'password') {
      setMessage('Welcome, user!');
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f8f8f8',
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          padding: 30,
          background: 'white',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          borderRadius: 8,
          width: 300
        }}
      >
        <h2 style={{ textAlign: 'center' }}>XLogin</h2>

        {message && (
          <p style={{ color: message === 'Welcome, user!' ? 'green' : 'red', textAlign: 'center' }}>
            {message}
          </p>
        )}

        <div style={{ marginBottom: 15 }}>
          <label>Username</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: 8 }}
            placeholder="Enter username"
          />
        </div>

        <div style={{ marginBottom: 15 }}>
          <label>Password</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: 8 }}
            placeholder="Enter password"
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: 10, cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
