import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import React from 'react';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
       
         <div className="flex flex-col min-h-screen">
            <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
      
    );
};

export default MainLayout;