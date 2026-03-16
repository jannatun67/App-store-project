import React from 'react';



import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
     
       <div>
         <Outlet />
       </div>
     
      <Footer />
    </div>
  );
};

export default Root;