import React from 'react';
import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import InfoCard from './InfoCard/InfoCard';
import Navigation from './Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Appointment></Appointment>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;