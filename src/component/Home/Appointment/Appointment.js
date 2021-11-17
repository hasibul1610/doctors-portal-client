import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import doctorImg from '../../../images/doctor.png';
import MuiButton from '../../../StyledComponent/MuiButton';
import bg from '../../../images/appointment-bg.png';

const Appointment = () => {
    const useStyle = makeStyles({
        root: {
            background: `url(${bg}),linear-gradient(#3A4256,#3A4256)`,
            backgroundBlendMode: 'overlay',
            backgroundPosition: 'center',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            marginTop: 200,
            marginBottom: 200
        }
    })
    const { root } = useStyle();
    return (
        <div className={root}>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <img src={doctorImg} style={{ marginTop: -120 }} width="100%" alt="" />
                    </Grid>

                    <Grid item xs={12} sm={12} md={5} lg={7} >
                        <Typography variant="h5" color="aquamarine">APPOINTMENT</Typography>
                        <Typography variant="h3" color="white">Make an Appointment Today</Typography>
                        <Typography variant="body1" sx={{ my: 3, color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe velit vel quidem, cumque nisi alias ducimus minima officia praesentium error! Assumenda eveniet ratione quia blanditiis voluptas, laboriosam adipisci explicabo aliquam?
                        </Typography>
                        <MuiButton>Learn More</MuiButton>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default Appointment;