import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <Hero showCoder/>
      <h1>Home page goes here!</h1>
    </Layout>
  )
}

export default IndexPage