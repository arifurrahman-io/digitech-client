import React from 'react';
import Hero from './Hero';
import Services from './Services';
import { Helmet } from 'react-helmet';
import Features from './Features';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div className='mt-5'>
            <Helmet>
                <title>Home | GigiTech</title>
            </Helmet>
            <Hero></Hero>
            <Services></Services>
            <Features></Features>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;