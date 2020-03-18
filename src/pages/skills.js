import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/skillHeader"
import Bar from "../components/skillBar"


export default function Bars() {
  return (
    <Layout>
      <SEO title="Skills" />
     

      <Header title="programming"/>
        <Bar percent="90" skill="HTML"/>
        <Bar skill="CSS" percent="90"/>
        <Bar skill="SASS" percent="70"/>
        <Bar skill="Bootstrap" percent="70"/>
        <Bar percent="80" skill="JavaScript"/>
        <Bar percent="40" skill="TypeScript"/>
        <Bar skill="ES6" percent="80"/>
        <Bar percent="60" skill="React"/>
        <Bar percent="60" skill="Gatsby"/>
        <Bar skill="jQuery" percent="50"/>
        <Bar skill="Gulp" percent="80"/>
        <Bar skill="MobX" percent="30"/>
        <Bar skill="GraphQL" percent="40"/>
        <Bar skill="MySQL" percent="50"/>
        <Bar skill="PHP" percent="40"/>
        <Bar skill="Wordpress" percent="40"/>
        <Bar skill="WooCommerce" percent="35"/>

      <Header title="graphics"/>
        <Bar percent="60" skill="Adobe Photoshop"/>
        <Bar percent="70" skill="Adobe XD"/>
        <Bar percent="40" skill="Adobe Illustrator"/>

      <Header title="languages"/>
        <Bar percent="100" skill="Polish"/>
        <Bar percent="95" skill="English"/>
        <Bar percent="50" skill="French"/>
        <Bar percent="65" skill="Russian"/>
        <Bar percent="30" skill="Indonesian"/>
    </Layout>
  )
}







