import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default RootLayout;