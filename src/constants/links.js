import React from 'react';
import { Link } from 'gatsby';

const Links = () => {
  return (
      <ul>
          <li>
              <Link to="/" className='page-link'>
                  Home
              </Link>
          </li>
          <li>
              <Link to="/posts" className='page-link'>
                  Posts
              </Link>
          </li>
          <li>
              <Link to="/newsletter" className='page-link'>
                  Newsletter
              </Link>
          </li>
      </ul>
  )
};

export default Links;
