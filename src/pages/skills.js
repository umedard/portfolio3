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
        <Bar percent="80" skill="JavaScript"/>

      <Header title="graphics"/>
        <Bar percent="60" skill="Photoshop"/>
        <Bar percent="70" skill="Adobe XD"/>
        <Bar percent="10" skill="Illustrator"/>

      <Header title="languages"/>
        <Bar percent="100" skill="Polish"/>
        <Bar percent="95" skill="English"/>
        <Bar percent="50" skill="French"/>
        <Bar percent="65" skill="Russian"/>
    </Layout>
  )
}







