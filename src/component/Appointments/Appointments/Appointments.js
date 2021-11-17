import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Navigation from '../../Home/Navigation/Navigation';
import AppointsmentsBanner from '../AppointmentsBanner/AppointsmentsBanner';
import Booking from '../Booking/Booking';

const Appointments = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointsmentsBanner date={date} setDate={setDate}></AppointsmentsBanner>
            <Booking date={date}></Booking>
            <Footer></Footer>
        </div>
    );
};

export default Appointments;