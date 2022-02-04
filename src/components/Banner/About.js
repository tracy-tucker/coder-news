import React from 'react';
import SocialLinks from '../../constants/socialLinks';
import { StaticImage } from 'gatsby-plugin-image';
import Title from './Title';
import styled from 'styled-components';

const About = () => {
  return (
      <Wrapper>
          <Title title="about author" />
          <StaticImage
            src='../../assets/banner-about.jpeg'
            layout='fixed'
            width={100}
            height={100}
            alt='author'
            className='img'
          />
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <SocialLinks styleClass='banner-icons'></SocialLinks>
      </Wrapper>
  )
};

const Wrapper = styled.div`
    text-align: center;
    p {
        color: var(--clr-grey-5);
    }
    .img {
        border-radius: 50%;
        margin: 0 auto;
        margin-bottom: 1rem;
    }
  `

export default About;
