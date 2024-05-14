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
import { SigninFormSchema } from '@/app/lib/definitions';
import { useFormStatus } from 'react-dom';

export default function SignIn() {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailError(false);
    setPasswordError(false);

    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        window.location.href = '/';
      } else {
        const data = await response.json();

        if (response.status === 404) {
          setEmailError(true);
        } else if (response.status === 400) {
          setPasswordError(true);
        }

        console.error('login failed:', data.message);
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
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
          Logga in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-post"
            name="email"
            value={email}
            error={emailError}
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            helperText={
              emailError ? 'Ingen användare hittad, vänligen försök igen.' : ''
            }
            inputProps={{
              pattern: '^[^@]+@[^@.]+\\.[^@.]+$',
              title: 'Ange din e-postadress (exempel@exempel.com).',
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Lösenord"
            type="password"
            id="password"
            value={password}
            error={passwordError}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            helperText={
              passwordError ? 'Fel lösenord, vänligen försök igen.' : ''
            }
            inputProps={{
              pattern: '^.{6,}$',
              title: 'Minst 6 tecken krävs.',
            }}
          />
          <LoginButton />
          <Grid container>
            <Grid item>
              <Link href="/registrera" variant="body2">
                {'Inte medlem? Registrera dig!'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      aria-disabled={pending}
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Logga in
    </Button>
  );
}
