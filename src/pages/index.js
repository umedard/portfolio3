import React from "react"

import Layout from "../components/layout"
import PortfolioItem from '../components/portfolioItem'
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"

const Index = () => (
  <Layout>
    <SEO title="Projects" />
    <Portfolio>
       <PortfolioItem picture="/img/emei.png" title="Car company" description="CSS, vanilla JavaScript, Netlify" github="" url=""/>
       <PortfolioItem picture="/img/bristol.png" title="Portfolio" description="Gatsby, Module CSS, Netlify" github="" url=""/>
       <PortfolioItem picture="/img/portfolio.png" title="Electronic company" description="Gatsby, Netlify CMS" github="" url=""/>
    </Portfolio>
  </Layout>
)

export default Index
