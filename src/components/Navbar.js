import React from 'react';
import { Link } from 'gatsby';
import logo from '../assets/spark-fitness-logo.svg';
import Links from '../constants/links';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className='nav-logo'>
            <img src={logo} alt="coder-news logo" />
          </Link>
        </div>
      </div>
      <Links />
    </nav>
  )
};

export default Navbar;