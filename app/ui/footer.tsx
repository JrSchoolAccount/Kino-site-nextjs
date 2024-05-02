'use client';

import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Container,
  Box,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#121212',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
    },
  },
});

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor='background.default' py={4}>
        <Container maxWidth='xl'>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='space-between'
            textAlign='center'
          >
            <Box mt={2} mb={2}>
              <nav>
                <Link
                  href='/om-oss'
                  color='text.primary'
                  variant='body1'
                  sx={{ mx: 2, '&:hover': { textDecoration: 'underline' } }}
                >
                  Om oss
                </Link>
                <Link
                  href='/Filmer'
                  color='text.primary'
                  variant='body1'
                  sx={{ mx: 2, '&:hover': { textDecoration: 'underline' } }}
                >
                  Filmer
                </Link>
                <Link
                  href='/evenemang'
                  color='text.primary'
                  variant='body1'
                  sx={{ mx: 2, '&:hover': { textDecoration: 'underline' } }}
                >
                  Evenemang
                </Link>
                <Link
                  href='/kontakt'
                  color='text.primary'
                  variant='body1'
                  sx={{ mx: 2, '&:hover': { textDecoration: 'underline' } }}
                >
                  Kontakt
                </Link>
              </nav>
            </Box>
            <Box display='flex' justifyContent='center'>
              <IconButton href='https://github.com/JrSchoolAccount/Kino-site-nextjs'>
                <GitHubIcon sx={{ color: 'text.primary' }} />
              </IconButton>
              <IconButton href='#'>
                <FacebookIcon sx={{ color: 'text.primary' }} />
              </IconButton>
              <IconButton href='#'>
                <InstagramIcon sx={{ color: 'text.primary' }} />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
