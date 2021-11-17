import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const AppointmentTotal = () => {
    const [appointments, setAppointments] = useState([]);
    const { user } = useAuth();


    useEffect(() => {
        fetch(`http://localhost:5000/appointments?email=${user.email}`,
            {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('idToken')}`
                }
            })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <div>
            <h2>This is appointment total {appointments.length}</h2>
        </div>
    );
};

export default AppointmentTotal;