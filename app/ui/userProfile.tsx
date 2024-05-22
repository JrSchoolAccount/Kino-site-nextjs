'use client';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserProfile() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'GET',
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

  function createData(name: string, date: string, tickets: number) {
    return { name, date, tickets };
  }

  const rows = [
    createData('Bambi', '11:15, 28 Juni', 2),
    createData('Casino Royal', '21:00, 1 Juli', 1),
    createData('Snabba Cash', '18:00, 2 Juli', 4),
    createData('Warcraft', '20:00, 4 Juli', 1),
    createData('The Grudge', '23:00, 13 Juli', 3),
  ];

  return (
    <Box>
      <Typography component="p" sx={{ m: 2 }}>
        Inloggad som: jonas.svensson@placeholder.com
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Mina bokningar</TableCell>
              <TableCell align="right">Tid/Datum</TableCell>
              <TableCell align="right">Antal biljetter</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.tickets}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="center" sx={{ mt: 1 }}>
        <Button size="large" variant="contained" onClick={handleLogout}>
          Logga Ut
        </Button>
      </Box>
    </Box>
  );
}
