import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='px-3 md:px-8 lg:px-20'>
                <Outlet ></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;