import React from 'react';
import Header from '../Commons/Header';
import OffersCarousel from './offersCarousel';
import BestSellers from './bestSellers';
import Footer from '../Commons/Footer';

const Home = () => {
    return(
        <>
        <Header />
        <OffersCarousel />
        <BestSellers />
        <Footer />
        </>
    );
}

export default Home;
