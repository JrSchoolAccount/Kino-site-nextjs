import React from 'react';
import { Container, Box, Typography, Link, IconButton, ThemeProvider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    
    <Box bgcolor="black" py={4}>
      <Container maxWidth="xl">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" color="white">
            Biograf Regna
          </Typography>
          <Box>
            <nav>
              <Link href="#" color="white" variant="button" sx={{ mr: 2 }}>
                Om oss
              </Link>
              <Link href="#" color="white" variant="button" sx={{ mr: 2 }}>
                Filmer
              </Link>
              <Link href="#" color="white" variant="button" sx={{ mr: 2 }}>
                Evenemang
              </Link>
              <Link href="#" color="white" variant="button">
                Kontakt
              </Link>
            </nav>
          </Box>
        </Box>
        <Box mt={2}>
          <Typography variant="body2" color="white" align="center">
            Follow us:
          </Typography>
          <Box display="flex" justifyContent="center" mt={1}>
            <IconButton href="#">
              <GitHubIcon />
            </IconButton>
            <IconButton href="#">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
     );
    }