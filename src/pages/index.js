import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Posts from "../components/Posts"
import { graphql } from 'gatsby'

const IndexPage = ({data}) => {
  
  const {
    allMdx: {nodes:posts}
  } = data
  return (
    <Layout>
      <Hero showCoder/>
      <Posts posts={posts} />
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
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        date(formatString: "MMMM, Do, YYYY")
      }
    }
  }
}
`

export default IndexPage