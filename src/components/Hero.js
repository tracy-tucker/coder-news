import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = ({ showCoder }) => {
  return (
      <header className='hero'>
          {showCoder && (
              <StaticImage
              src="../assets/computer-gal.png"
              placeholder='blurred'
              className='hero-person'
              alt="coder"
          />
          )}
      </header>
  )
};

export default Hero;
