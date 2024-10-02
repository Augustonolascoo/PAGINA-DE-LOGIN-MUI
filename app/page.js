"use client"; 

import { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        bgcolor: '#000000', 
        padding: 0, 
      }}
    >
      <Paper 
        elevation={6} 
        sx={{ 
          padding: 4, 
          borderRadius: 3, 
          bgcolor: '#ffffff'
        }}
      >
        <Typography variant="h4" align="center" sx={{ mb: 2 }}>
          Bem-vindo de volta!
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          Faça login para continuar.
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <Box mb={2}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
              variant="outlined"
              sx={{ bgcolor: '#e3f2fd' }} 
            />
          </Box>
          <Box mb={2}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              variant="outlined"
              sx={{ bgcolor: '#e3f2fd' }}
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              marginTop: 2,
              padding: 1.5,
            }}
          >
            Entrar
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
