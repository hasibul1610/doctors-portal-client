import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import MuiButton from '../../../StyledComponent/MuiButton';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AppointmentModal({ open, handleClose, name, time, date }) {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const handleSubmit = e => {
        alert("Submitted")
        e.preventDefault();
    }


    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                size="small"
                                value={time}
                                margin='dense'
                            />
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="name"
                                margin='dense'
                            />
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="Phone Number"
                                margin='dense'
                            />
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="Email"
                                margin='dense'
                            />
                            <TextField
                                fullWidth
                                size="small"
                                margin='dense'
                                value={new Date(date).toDateString()}
                            />
                            <MuiButton type="submit">Submit</MuiButton>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}