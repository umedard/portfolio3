import React from "react"

import Layout from "../components/layout"
import PortfolioItem from '../components/portfolioItem'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Projects" />
    <PortfolioItem picture="./img/portfolio.png" title="Car company website" description="CSS, vanilla JavaScript" github="" url=""/>
    <PortfolioItem picture="./img/emei.png" title="Car company website" description="CSS, vanilla JavaScript" github="" url=""/>
  </Layout>
)

export default IndexPage
