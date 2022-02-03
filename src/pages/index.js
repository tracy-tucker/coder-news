import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import { graphql } from 'gatsby'

const IndexPage = ({data}) => {
  console.log(data)
  return (
    <Layout>
      <Hero showCoder/>
      <h1>Home page goes here!</h1>
    </Layout>
  )
}

export const query = graphql`
{
  allMdx(limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      frontmatter {
        title
        author
        category
        readTime
        slug
        date
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

export default IndexPage