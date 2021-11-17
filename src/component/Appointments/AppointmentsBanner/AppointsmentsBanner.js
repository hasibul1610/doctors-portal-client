import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calender from '../Appointments/Calender';

const AppointsmentsBanner = ({ date, setDate }) => {
    const style = {
        display: 'flex',
        alignItems: 'center',
        minHeight: 500,

    }
    return (
        <div style={style}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant='h4'>
                            APPOINTMENT
                        </Typography>
                        <Calender date={date} setDate={setDate}></Calender>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img src={chair} width='100%' alt="" />

                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppointsmentsBanner;