import Footer from '../components/Navbar';
import Navbar from '../components/Footer';
import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
};

export default MainLayout;