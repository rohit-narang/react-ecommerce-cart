import React from 'react';
import Header from '../Commons/Header';
import OffersCarousel from './offersCarousel';
import BestSellers from './bestSellers';

const Home = () => {
    return(
        <>
        <Header />
        <OffersCarousel />
        <BestSellers />
        </>
    );
}

export default Home;
