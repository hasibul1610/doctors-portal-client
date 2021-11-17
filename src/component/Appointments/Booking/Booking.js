import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { bookings } from '../../../Data/Data';
import MuiButton from '../../../StyledComponent/MuiButton';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const Booking = ({ date }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ fontWeight: 600, color: '#19D3AE', textAlign: 'center' }}>
                Available Appointment on {new Date(date).toDateString()}
            </Typography>
            <Grid container spacing={3}>
                {
                    bookings.map(({ id, name, time, space }) => <Grid item sx={{ textAlign: 'center' }} xs={12} sm={6} md={4}>
                        <Paper sx={{ p: 2 }} variant="outlined">
                            <Typography
                                variant="h5"
                                color="#19D3AE"
                            >
                                {name}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ py: 2 }}
                            >
                                {time}
                            </Typography>
                            <Typography
                                variant="subtitle"

                            >
                                Spaces Available : {space}
                            </Typography> <br />
                            <MuiButton
                                onClick={handleOpen}
                                sx={{ my: 2 }}>
                                BOOK APPOINMENT
                            </MuiButton>
                        </Paper>
                        <AppointmentModal
                            time={time}
                            name={name}
                            date={date}
                            handleClose={handleClose}
                            open={open}>
                        </AppointmentModal>
                    </Grid>)
                }

            </Grid>

        </Container>
    );
};

export default Booking;