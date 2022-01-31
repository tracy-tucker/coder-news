import React from 'react';
import { Link } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/spark-fitness-logo.svg';
import Links from '../constants/links';
import SocialLinks from '../constants/socialLinks';

const Navbar = ({toggle}) => {
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className='nav-logo'>
            <img src={logo} alt="coder-news logo" />
          </Link>
          <button className='toggle-btn' onClick={toggle}>
            <FaBars />
          </button>
        </div>
      </div>
      <Links styleClass="nav-links" />
      <SocialLinks styleClass="nav-icons" />
    </nav>
  )
};

export default Navbar;
