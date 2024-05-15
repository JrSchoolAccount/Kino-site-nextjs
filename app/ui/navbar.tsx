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
import { Login, Logout } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';

const links = [
  { name: 'Om oss', href: '/om-oss' },
  { name: 'Aktuella visningar', href: '/aktuella-vinsningar' },
  { name: 'Filmer', href: '/filmer' },
  { name: 'Biljetter', href: '/biljetter' },
  { name: 'Mina bokningar', href: '/profil' },
];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const router = useRouter();
  const pathname: string = usePathname();
  const isProfilePage = pathname === '/profil';

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
      });

      if (response.ok) {
        await router.push('/');
      } else {
        console.error('Failed to logout:', response.statusText);
      }
    } catch (error) {
      console.error('Error occurred during logout:', error);
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
              width="140"
              height="50"
              src="/logo.png"
              alt="Biograf Regna"
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

          <Box sx={{ flexGrow: 0 }}>
            {!isProfilePage ? (
              <Tooltip title="Logga in">
                <Button
                  color="secondary"
                  variant="outlined"
                  href="/login"
                  startIcon={<Login />}
                >
                  Logga in
                </Button>
              </Tooltip>
            ) : (
              <Tooltip title="Logga ut">
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={handleLogout}
                  startIcon={<Logout />}
                >
                  Logga ut
                </Button>
              </Tooltip>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
