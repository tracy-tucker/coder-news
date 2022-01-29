import React from 'react';
import {
    FaTwitterSquare,
    FaMedium,
    FaGithubSquare,
} from 'react-icons/fa';

const SocialLinks = () => {
  return (
      <ul>
          <li>
              <a href="https://twitter.com/mapTracy">
                  <FaTwitterSquare className='social-icon twitter-icon'></FaTwitterSquare>
              </a>
          </li>
          <li>
              <a href="https://medium.com/@tracy-tucker">
                  <FaMedium className='social-icon twitter-icon'></FaMedium>
              </a>
          </li>
          <li>
              <a href="https://github.com/tracy-tucker">
                  <FaGithubSquare className='social-icon twitter-icon'></FaGithubSquare>
              </a>
          </li>
      </ul>
  )
};

export default SocialLinks;
