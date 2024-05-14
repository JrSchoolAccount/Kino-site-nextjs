import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography, Link } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/de';
import { Screening } from '../lib/definitions';

export default function ScreeningsTableStartpage() {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(
    dayjs(new Date())
  );

  const [screenings, setScreenings] = useState<Screening[]>([]);

  const fetchScreenings = async (URL: string) => {
    const res = await fetch(URL);
    const screenings = await res.json();
    console.log('screenings' + screenings);
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
        width: 8 / 10,
        borderRadius: 2,
        boxShadow: 1,
        marginLeft: 10,
        marginTop: 5,
        padding: 4,
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
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='sv'>
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

      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableBody>
          {screenings.map((screening, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row' sx={{ fontSize: 17 }}>
                {screening.date.slice(11, 16)}
              </TableCell>
              <TableCell align='left' sx={{ fontSize: 17, maxWidth: 200 }}>
                {screening.movie}
              </TableCell>
              <TableCell align='left'>{screening.saloon}</TableCell>
              <TableCell align='left'>{screening.runtime} min</TableCell>
              <TableCell align='left'>
                <Link
                  href={`/boka-film/page?screeningId=${encodeURIComponent(
                    screening._id
                  )}&movieTitle=${encodeURIComponent(
                    screening.movie
                  )}&movieTime=${encodeURIComponent(screening.date)}`}
                >
                  <Button size='small' variant='outlined'>
                    boka
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
