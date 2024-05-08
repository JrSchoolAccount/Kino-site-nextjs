import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';
import DatePickerStartpage from './datePickerStartpage';
import { fetchUpcomingScreeningsOnStartpage } from '../lib/data';
import * as React from 'react';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/de';

function createData(
  name: string,
  saloon: string,
  time: string,
  duration: string
) {
  return { name, saloon, time, duration };
}

const rows = [
  createData('Inception', 'Stora dasket', '17:00', '120 min'),
  createData('Titanic', 'Lilla grå', '17:00', '92 min'),
  createData('Lord of the Rings', 'Stora dasket', '19:30', '131 min'),
  createData('Beavis & Butthead', 'Lilla grå', '20:00', '94 min'),
  createData('Braveheart', 'Lilla grå', '21:00', '100 min'),
  createData('Mr. Bean Firar Jul', 'Stora dasket', '21:00', '22 min'),
];


export default async function ScreeningsTableStartpage() {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(
    dayjs(new Date())
  );
  console.log(selectedDate?.format().slice(0, 10));
  
  // const [todaysScreenings, setTodaysScreenings] = React.useState(
    //   selectedDate?.format().slice(0, 10)
    // );
    
    // const fetchedScreenings = await fetchUpcomingScreeningsOnStartpage(selectedDate!.format().slice(0, 10)); // Check this, should I avoid non-null assertion here?
    // console.log('fetched screenings: ', fetchedScreenings);
    
    const todaysScreenings: {
      name: string;
      saloon: string;
      time: string;
      duration: string;
    }[] = [];

    // 
  


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
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
          <DatePicker
            label={'Välj ett datum'}
            views={['year', 'month', 'day']}
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            sx={{ marginBottom: 2 }}
          />
        </LocalizationProvider>
      </Box>

      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row' sx={{ fontSize: 17 }}>
                {row.time}
              </TableCell>
              <TableCell align='left' sx={{ fontSize: 17 }}>
                {row.name}
              </TableCell>
              <TableCell align='left'>{row.saloon}</TableCell>
              <TableCell align='left'>{row.duration}</TableCell>
              <TableCell align='left'>
                {
                  <Button size='small' variant='outlined'>
                    boka
                  </Button>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
