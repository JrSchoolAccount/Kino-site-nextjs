'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { Screening } from '@/app/lib/definitions';

export default function ScreeningsTableSpecificMovie({
  movie_id,
}: {
  movie_id: string;
}) {
  const [screenings, setScreenings] = useState<Screening[]>([]);

  const fetchScreenings = async (URL: string) => {
    const res = await fetch(URL);
    const screenings = await res.json();
    return screenings;
  };

  React.useEffect(() => {
    fetchScreenings(
      `/api/screenings?date=${new Date().toISOString().slice(0, 11)}${new Date().toLocaleTimeString().slice(0, 5)}&movie_id=${movie_id}`,
    ).then((screenings) => {
      setScreenings(screenings);
    });
  }, [movie_id]);

  return (
    <TableContainer
      sx={{
        width: { xs: 10 / 10, sm: 9.1 / 10, md: 8 / 10 },
        maxWidth: 800,
        borderRadius: 2,
        boxShadow: 1,
        margin: 'auto',
        marginTop: 5,
        paddingX: { xs: 1, sm: 4 },
        paddingTop: 4,
      }}
      component={Paper}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: 25,
          marginRight: 10,
          marginBottom: 2,
          textAlign: 'center',
        }}
      >
        Kommande visningar av filmen
      </Typography>
      <Table sx={{ minWidth: 50 }} aria-label="simple table">
        <TableBody>
          {screenings[0] ? (
            screenings.map((screening, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx={{ maxWidth: { xs: 5, sm: 200 } }}>
                  {new Date(screening.date.slice(0, 10)).toLocaleDateString(
                    'sv-SE',
                    {
                      weekday: 'long',
                      year: undefined,
                      month: 'short',
                      day: 'numeric',
                    },
                  )}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontSize: 17, maxWidth: { xs: 13, sm: 200 } }}
                >
                  {screening.date.slice(11, 16)}
                </TableCell>
                <TableCell align="left" sx={{ maxWidth: { xs: 14, sm: 200 } }}>
                  {screening.saloon}
                </TableCell>
                <TableCell align="left">
                  {
                    <Button size="small" variant="outlined">
                      boka
                    </Button>
                  }
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <Typography align="center" sx={{ my: 4 }}>
                  Inga visningar finns av denna film just nu, var god välj en
                  annan film!
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
