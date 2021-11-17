import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, authError, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your password did not match")
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
        // alert("button CLicked")
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: 1, m: 1 }}
                            id="standard-basic"
                            name="name"
                            onBlur={handleOnBlur}
                            label="Name"
                            variant="standard"
                        />
                        <br />
                        <TextField
                            sx={{ width: 1, m: 1 }}
                            id="standard-basic"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            label="Email"
                            variant="standard"
                        />
                        <br />
                        <TextField
                            sx={{ width: 1, m: 1 }}
                            id="standard-basic"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            label="Password"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: 1, m: 1 }}
                            id="standard-basic"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            label="Retype Password"
                            variant="standard"
                        />

                        <br />
                        <Button
                            type="submit"
                            variant="contained">
                            Register
                        </Button>
                        <br />
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/login">
                            <Button variant="text">Already Registered? please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Registered SUccessfully!</Alert>
                    }
                    {authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: '100%' }} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;