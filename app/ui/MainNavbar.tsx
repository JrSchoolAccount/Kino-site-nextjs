'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    'Om oss',
    'Filmer',
    'Aktuella Visningar',
    'Biljetter',
    'Min sida',
    'Log Out',
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link className='font-bold text-inherit' href='./'>
            <p>Biograf Regna</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='./Filmer'>
            Filmer
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='./Om_oss'>
            Om oss
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='./Aktuella_visningar' aria-current='page'>
            Aktuella visningar
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='./Biljetter'>
            Biljetter
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Login/Registrera
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              className='w-full'
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
