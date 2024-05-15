'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SignUp() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;

      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        window.location.href = '/login';
      } else {
        const data = await response.json();
        console.error('Signup failed:', data.message);
      }
    } catch (error) {
      console.error('Error occurred during signup:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Ny medlem
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                value={name}
                required
                fullWidth
                id="name"
                label="Namn"
                placeholder="förnamn efternamn"
                autoFocus
                onChange={(e) => setName(e.target.value)}
                inputProps={{
                  pattern: '^[a-zA-Z]{2,}\\s+[a-zA-Z]{2,}$',
                  title:
                    'Ange för- & efternamn (minst 2 tecken för varje namn, separerade med ett mellanslag).',
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                value={email}
                label="E-post"
                name="email"
                placeholder="exempel@exempel.com"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                inputProps={{
                  pattern: '^[^@]+@[^@.]+\\.[^@.]+$',
                  title: 'Ange giltig e-postadress (exempel@exempel.com).',
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                value={password}
                label="Lösenord"
                placeholder="Minst 6 tecken"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
                inputProps={{
                  pattern: '^.{6,}$',
                  title: 'Minst 6 tecken krävs.',
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Registrera
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Redan medlem? Logga in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
