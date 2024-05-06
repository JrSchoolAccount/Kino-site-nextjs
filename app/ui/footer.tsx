'use client';

import React from 'react';
import {
  Container,
  Box,
  Typography,
  Link,
  IconButton,
  Divider,
  Grid,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box
      bgcolor='background.default'
      py={4}
      px={2}
      position='fixed'
      bottom='0'
      width='100%'
    >
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant='h6' color='primary' gutterBottom>
                  Öppettider
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Måndag - Fredag: xx - xx
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lördag: xx - xx
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Söndag: xx - xx
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant='h6' color='primary' gutterBottom>
                  Adress
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Regnagården 47
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography variant='h6' color='primary' gutterBottom>
                  Kontakt
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Email:{' '}
                  <Link href='mailto:regna@folketsbio.se'>
                    regna@folketsbio.se
                  </Link>
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Tel: 0101010
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Box mb={2}>
                <IconButton
                  href='https://github.com/JrSchoolAccount/Kino-site-nextjs'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GitHubIcon sx={{ color: 'text.primary' }} />
                </IconButton>
                <IconButton href='#' target='_blank' rel='noopener noreferrer'>
                  <FacebookIcon sx={{ color: 'text.primary' }} />
                </IconButton>
                <IconButton href='#' target='_blank' rel='noopener noreferrer'>
                  <InstagramIcon sx={{ color: 'text.primary' }} />
                </IconButton>
              </Box>
              <Box textAlign='center'>
                <Typography variant='body2' color='text.secondary'>
                  © {new Date().getFullYear()} Biograf Regna AB.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
