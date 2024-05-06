import * as React from 'react';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

import 'dayjs/locale/de';

export default function DatePickerStartpage() {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(
    dayjs(new Date())
  );
  console.log(selectedDate?.format().slice(0, 10));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
      <DatePicker
        label={'Välj ett datum'}
        views={['year', 'month', 'day']}
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        sx={{marginBottom: 2}}
      />
    </LocalizationProvider>
  );
}
