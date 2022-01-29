import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
      <>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
      <Footer />
      </>
  )
};

export default Layout;
