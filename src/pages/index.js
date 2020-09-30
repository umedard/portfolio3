import React from "react"

import Layout from "../components/layout"
import PortfolioItem from '../components/portfolioItem'
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"

const Index = () => (
  <Layout>
    <SEO title="Projects" />
    <Portfolio>
       <PortfolioItem picture="/img/emei.png" title="Hospital site" description="Wordpress" github="https://github.com/umedard/hospital_wp" url="http://server315706.nazwa.pl/wp_1/"/>
      <PortfolioItem picture="/img/bristol.png" title="Portfolio site" description="React, Gatsby, Module CSS, Netlify" github="https://github.com/umedard/portfolio3" url="https://medard.dev"/>
       <PortfolioItem picture="/img/portfolio.png" title="Emei" description="React, Gatsby, Netlify CMS, Markdown" github="https://github.com/umedard/emei" url="https://emei-medard.netlify.com/"/>
  </Portfolio>
  </Layout>
)

export default Index
