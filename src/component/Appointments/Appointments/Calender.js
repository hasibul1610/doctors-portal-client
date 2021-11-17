import { CalendarPicker, LocalizationProvider } from '@mui/lab';
import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';


const Calender = ({ date, setDate }) => {


    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>

            <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />

        </LocalizationProvider>
    );
};

export default Calender;
