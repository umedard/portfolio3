import React from "react"

import Layout from "../components/layout"
import PortfolioItem from '../components/portfolioItem'
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"

const Index = () => (
  <Layout>
    <SEO title="Projects" />
    <Portfolio>
       <PortfolioItem picture="/img/emei.png" title="Bristol cars" description="CSS, vanilla JavaScript, Netlify" github="https://github.com/umedard/bristol" url="https://bristol-medard.netlify.com/"/>
       <PortfolioItem picture="/img/bristol.png" title="Portfolio site" description="React, Gatsby, Module CSS, Netlify" github="https://github.com/umedard/portfolio3" url="https://medard.dev"/>
       <PortfolioItem picture="/img/portfolio.png" title="Emei" description="React, Gatsby, Netlify CMS, Markdown" github="https://github.com/umedard/emei" url="https://emei-medard.netlify.com/"/>
       <PortfolioItem picture="/img/portfolio.png" title="Aurora Box" description="HTML, CSS, SASS" github="https://github.com/umedard/aurorabox" url="https://aurorabox.netlify.app/"/>
    </Portfolio>
  </Layout>
)

export default Index
