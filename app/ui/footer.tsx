import React from 'react';
import { Link, Image } from '@nextui-org/react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <footer className='bg-white rounded-lg shadow dark:bg-black m-4'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a
            href='#'
            className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
          >
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Biograf Regna
            </span>
          </a>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white'>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                Om oss
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                Filmer
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                Evenemang
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          <ul className='flex gap-6 justify-center'>
            <li>
              <a href=''>
                <GitHubIcon className='size-8'></GitHubIcon>
              </a>
            </li>
            <li>
              <a href=''>
                <FacebookIcon className='size-8'></FacebookIcon>
              </a>
            </li>
            <li>
              <a href=''>
                <InstagramIcon className='size-8'></InstagramIcon>
              </a>
            </li>
          </ul>
        </span>
      </div>
    </footer>
  );
}
