import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';
import DatePickerStartpage from './datePickerStartpage';

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

export default function ScreeningsTableStartpage() {
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
      <Box sx={{display:'flex'}}>
        <Typography variant='h3' sx={{fontSize:25, marginRight:10, marginTop:3}}>Kommande visningar</Typography>
        <DatePickerStartpage />
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row' sx={{fontSize:17}}>
                {row.time}
              </TableCell>
              <TableCell align='left' sx={{fontSize:17}}>{row.name}</TableCell>
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
