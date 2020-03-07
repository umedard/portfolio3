import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/skillHeader"
import Bar from "../components/skillBar"


export default function Skills() {
  return (
    <Layout>
      <SEO title="Skills" />
      <Header title="programming"/>
      <Bar percent="40" skill="Gatsby"/>

      <Header title="graphics"/>


      <Header title="languages"/>
    </Layout>
  )
}







