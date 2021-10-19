import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer'
import AppointCovid from './AppointCovid/AppointCovid';
import Banner from './Banner/Banner';
import LoadServices from './LoadServices/LoadServices';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <AppointCovid></AppointCovid>
            <LoadServices></LoadServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;