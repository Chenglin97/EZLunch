import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import NavBar from '../components/Navbar';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password || !email) {
      setError('Please fill in all fields');
      return;
    }

    // Placeholder for registration logic
    console.log('Registering with:', username, password, email);
  };

  return (
    <>
    <NavBar></NavBar>
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh">
      <Typography variant="h4" gutterBottom>
        Register for EZLunch
      </Typography>
      <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="email"
          label="Email"
          type="email"
          id="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
      </Box>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Already have an account? <Link href="/login" color="primary">Login</Link>
      </Typography>
    </Box>
    </>
  );
};

export default RegisterPage;