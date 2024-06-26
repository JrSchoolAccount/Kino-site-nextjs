'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import Link from '@mui/material/Link';
import { TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { useState } from 'react';
import { Movie } from '../lib/definitions';

const links = [
  { name: 'Om oss', href: '/om-oss' },
  { name: 'Bli medlem', href: '/registrera' },
  { name: 'Min profil', href: '/profil' },
  { name: 'Filmer', href: '/filmer' },
];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearchInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    const trimmedValue = value.trim();
    if (trimmedValue === '') {
      setFilteredMovies([]);
      return;
    }

    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredMovies(filtered);
    if (value.trim() !== '') {
      try {
        const response = await fetch('/api/movies');
        const data = await response.json();
        if (Array.isArray(data.movies)) {
          const movieData = data.movies.map((movie: any) => ({
            title: movie.title,
            id: movie._id,
          }));
          setMovies(movieData);
        } else {
          console.error(
            'Data received from API does not contain an array of movies:',
            data,
          );
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
  };

  const handleSearchSelect = (value: Movie | string | null) => {
    if (value && typeof value !== 'string') {
      return `/filmer/${value.id}`;
    }
    return '';
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="small"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {links.map((link) => (
                <MenuItem
                  key={`${link.name}-${link.href}`}
                  onClick={handleCloseNavMenu}
                >
                  <Link
                    underline="none"
                    color="inherit"
                    key={link.name}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              flexGrow: 1,
            }}
          >
            <Image
              priority={true}
              width="140"
              height="50"
              src="/logo.png"
              alt="Biograf Regna"
              style={{
                maxWidth: '100%',
                height: 'auto',
                width: 'auto',
              }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {links.map((link) => (
              <Button
                href={link.href}
                key={link.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {link.name}
              </Button>
            ))}
          </Box>
          <Stack spacing={5} sx={{ width: 300, marginRight: 5 }}>
            <Autocomplete
              key="movieSearchAutocomplete"
              freeSolo
              id="movieSearch"
              disableClearable
              options={isFocused ? filteredMovies : []}
              getOptionLabel={(option) => {
                if (typeof option === 'string') {
                  return option;
                }
                return option.title;
              }}
              onInputChange={(event, newInputValue) => {
                if (newInputValue === '') {
                  setFilteredMovies([]);
                } else {
                  const filtered = movies.filter((movie) =>
                    movie.title
                      .toLowerCase()
                      .includes(newInputValue.toLowerCase()),
                  );
                  setFilteredMovies(filtered);
                }
              }}
              onFocus={() => setIsFocused(true)}
              onChange={(event, value) => {
                const movieUrl = handleSearchSelect(value);
                if (movieUrl) {
                  window.location.href = movieUrl;
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Sök film.."
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                    onChange: handleSearchInputChange,
                  }}
                />
              )}
            />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
