import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import AppointmentTotal from './AppointmentTotal/AppointmentTotal';
import Patient from './Patient/Patient';
import Prescription from './Prescription/Prescription';


import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

const drawerWidth = 240;

export default function Dashboard() {
    let { path, url } = useRouteMatch();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Admin Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>

                    <ListItem button>
                        <Link
                            style={{
                                textDecoration: 'none',
                                fontSize: 20,
                                fontWeight: 600,
                                color: 'tomato'
                            }}
                            to={`${url}`}
                        >Appointment</Link>
                    </ListItem>

                </List>
                <Divider />
                <List>

                    <ListItem button>
                        <Link
                            style={{
                                textDecoration: 'none',
                                fontSize: 20,
                                fontWeight: 600,
                                color: 'tomato'
                            }}
                            to={`${url}/patient`}>Patient</Link>
                    </ListItem>

                </List>
                <Divider />
                <List>

                    <ListItem button>
                        <Link
                            style={{
                                textDecoration: 'none',
                                fontSize: 20,
                                fontWeight: 600,
                                color: 'tomato'
                            }}
                            to={`${url}/prescription`}>Prescription</Link>
                    </ListItem>

                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <AppointmentTotal></AppointmentTotal>
                    </Route>
                    <Route path={`${path}/patient`}>
                        <Patient></Patient>
                    </Route>
                    <Route path={`${path}/prescription`}>
                        <Prescription></Prescription>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}