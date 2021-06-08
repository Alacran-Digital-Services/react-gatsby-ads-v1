import * as React from "react"
import Hero from "../components/Hero"
import Services from "../components/Services"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero></Hero>
    <Services></Services>
  </Layout>
)

export default IndexPage
