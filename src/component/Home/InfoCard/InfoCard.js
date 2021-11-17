import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { infoData } from '../../../Data/Data';

const InfoCard = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                {
                    infoData.map(({ Icon, title, description, background }) => <Grid item sm={12} xs={12} md={4} lg={4}>
                        <Paper variant="outlined" sx={{ display: "flex", justifyContent: 'space-between', backgroundColor: background, color: 'white', p: 3 }}>
                            <Icon sx={{ fontSize: 60 }} />
                            <div>
                                <Typography variant="body">{title}</Typography>
                                <Typography variant="subtitle1">{description}</Typography>
                            </div>

                        </Paper>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default InfoCard;