import { Container, Typography } from '@mui/material';
import React from 'react';

const Booking = ({ date }) => {
    return (
        <Container>
            <Typography variant="h4" sx={{ fontWeight: 600, color: '#19D3AE', textAlign: 'center' }}>
                Available Appointment on {new Date(date).toDateString()}
            </Typography>
        </Container>
    );
};

export default Booking;