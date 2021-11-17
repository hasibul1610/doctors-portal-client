import { Container, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import MuiButton from '../../../StyledComponent/MuiButton';
import bg from '../../../images/bg.png';

const Contact = () => {
    const useStyle = makeStyles({
        root: {
            background: `url(${bg}),linear-gradient(#3A4256,#3A4256)`,
            height: 'auto',
            textAlign: 'center',
            padding: '30px'
        },
        textarea: {
            border: 0,
            outline: 0,
            width: "100%",
            marginTop: 20,
            marginBottom: 20,
            fontFamily: 'inherit',
            padding: 15
        }
    })
    const { root, textarea } = useStyle();
    return (
        <div className={root}>
            <div >
                <Container maxWidth='md' >
                    <Typography variant="h6" color="#fff">Connect</Typography>
                    <Typography variant="h4" color='#fff'>
                        Always Connect With Us
                    </Typography>
                    <form>
                        <TextField
                            fullWidth
                            placeholder="Email Address"
                            required
                            sx={{
                                backgroundColor: '#fff', borderRadius: '6px',
                                my: 3
                            }}>

                        </TextField>
                        <TextField
                            fullWidth
                            placeholder="Subject"
                            margin="normal"
                            sx={{
                                backgroundColor: '#fff', borderRadius: '6px',

                            }}>

                        </TextField>
                        <textarea
                            className={textarea}
                            placeholder="Your Message"
                            rows={10}
                        >

                        </textarea>
                        <MuiButton>Submit</MuiButton>
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default Contact;