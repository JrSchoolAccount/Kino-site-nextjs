import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/sv';
import { Screening } from '../lib/definitions';
import Link from 'next/link';

export default function ScreeningsTableStartpage() {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(
    dayjs(new Date()),
  );

  const [screenings, setScreenings] = useState<Screening[]>([]);

  const fetchScreenings = async (URL: string) => {
    const res = await fetch(URL);
    const screenings = await res.json();
    return screenings;
  };
  React.useEffect(() => {
    fetchScreenings(
      `/api/screenings?date=${new Date().toISOString().slice(0, 11)}${new Date()
        .toLocaleTimeString()
        .slice(0, 5)}`
    ).then((screenings) => {
      setScreenings(screenings);
    });
  }, []);

  return (
    <TableContainer
      sx={{
        width: { xs: 10 / 10, sm: 9.1 / 10, md: 8 / 10 },
        maxWidth: 800,
        borderRadius: 2,
        boxShadow: 1,
        margin: 'auto',
        marginTop: 5,
        paddingX: { xs: 1, sm: 4},
        paddingTop: 4
      }}
      component={Paper}
    >
      <Box sx={{ display: 'flex' }}>
        <Typography
          variant='h3'
          sx={{ fontSize: 25, marginRight: 10, marginTop: 3 }}
        >
          Kommande visningar
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="sv">
          <DatePicker
            disablePast
            label={'Välj ett datum'}
            views={['year', 'month', 'day']}
            value={selectedDate}
            onChange={(newValue) => {
              if (newValue) {
                setSelectedDate(newValue);
                const newDate = newValue!.format().slice(0, 10);
                if (newDate == new Date().toISOString().slice(0, 10)) {
                  fetchScreenings(
                    `/api/screenings?date=${newValue.format().slice(0, 16)}`
                  ).then((screenings) => {
                    setScreenings(screenings);
                  });
                } else {
                  fetchScreenings(
                    `/api/screenings?date=${newValue.format().slice(0, 10)}`
                  ).then((screenings) => {
                    setScreenings(screenings);
                  });
                }
              }
            }}
            sx={{ marginBottom: 2 }}
          />
        </LocalizationProvider>
      </Box>

      <Table sx={{ minWidth: 50 }} aria-label="simple table">
        <TableBody>
          {screenings[0] ? (
            screenings.map((screening, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontSize: 17, maxWidth: { xs: 13, sm: 200 } }}
                >
                  {screening.date.slice(11, 16)}
                </TableCell>
                <TableCell align="left">
                  <Button
                    href={`/filmer/${screening.movie_id}`}
                    component={Link}
                    sx={{ fontSize: 16 }}
                  >
                    {screening.movie}
                  </Button>
                </TableCell>
                <TableCell align="left" sx={{ maxWidth: { xs: 14, sm: 200 } }}>
                  {screening.saloon}
                </TableCell>
                <TableCell align="left" sx={{ maxWidth: { xs: 5, sm: 200 } }}>
                  {screening.runtime} min
                </TableCell>
               <TableCell align='left'>
                <Link
                  href={{
                    pathname: '/boka-film/',
                    query: {
                      screeningId: screening._id,
                      movieTitle: screening.movie,
                      movieTime: new Date(screening.date).toISOString(),
                      poster: screening.poster,
                      saloon: screening.saloon,
                    },
                  }}
                >
                  <Button size='small' variant='outlined'>
                    boka
                  </Button>
                </Link>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <Typography align="center" sx={{ my: 4 }}>
                  Inga visningar finns inlagda för detta datum. Var god välj ett
                  annat datum!
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
