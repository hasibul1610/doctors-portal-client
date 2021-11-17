import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import MuiButton from '../../../StyledComponent/MuiButton';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const Banner = () => {

    const style = {
        minHeight: "500px",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        background: `url(${bg})`
    }

    return (
        <div style={style}>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: "center" }}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h4" sx={{ fontWeight: 600 }}>
                            Your New Smile <br /> Start Here
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 2, my: 3 }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe velit vel quidem, cumque nisi alias ducimus minima officia praesentium error! Assumenda eveniet ratione quia blanditiis voluptas, laboriosam adipisci explicabo aliquam?
                        </Typography>
                        <MuiButton>Get Appointment</MuiButton>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img src={chair} alt="" width="100%" />
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default Banner;