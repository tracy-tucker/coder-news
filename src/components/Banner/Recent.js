import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import Title from './Title';

export const query = graphql`
{
  allMdx(limit: 5, sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      frontmatter {
        title
        author
        category
        readTime
        slug
        date(formatString: "MMMM, Do, YYYY")
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}
`

const Recent = () => {

    const data = useStaticQuery(query)
    const {
        allMdx:{nodes:posts}
    } = data

    return (
      <Wrapper>
          {posts.map(post => {
              const {title, slug, date, image } = post.frontmatter
              return <Link to={`/posts${slug}`} key={post.id} className='post'>
                  <GatsbyImage
                    image={getImage(image)}
                    alt={title}
                    className='img'
                  />
                  <div>
                      <h5>{title}</h5>
                      <p>{date}</p>
                  </div>
              </Link>
          })}
      </Wrapper>
  )
};

const Wrapper = styled.div`
    .post {
        display: grid;
        grid-template-columns: 75px 1fr;
        column-gap: 1rem;
        margin-bottom: 1rem;
    }
    .img {
        border-radius: var(--radius);
    }
    h5 {
        font-size: 0.7rem;
        margin-bottom: 0.25rem;
        letter-spacing: 0;
        line-height: 1.2;
        color: var(--clr-grey-1);
    }
    p {
        font-size: 0.6rem;
        margin-bottom: 0;
        color: var(--clr-grey-5);
    }
    .post:hover {
        h5 {
        color: var(--clr-primary-5);
        }
    }
  `

export default Recent;
