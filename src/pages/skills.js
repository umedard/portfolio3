import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/skillHeader"
import Bar from "../components/skillBar"

// import skills from "../data/skills"

export default function Bars() {
  return (
    <Layout>
      <SEO title="Skills" />

      <Header title="programming" />
      <Bar skill="HTML" percent="90" />
      <Bar skill="CSS / SASS" percent="90" />

      <Bar skill="Bootstrap" percent="70" />
      <Bar skill="JavaScript / ES6" percent="80" />
      <Bar skill="jQuery" percent="50" />
      <Bar skill="TypeScript" percent="40" />
      <Bar skill="React" percent="60" />
      <Bar skill="Gatsby" percent="60" />
      <Bar skill="Vue.js" percent="40" />
      <Bar skill="Gulp" percent="80" />
      <Bar skill="MobX / Redux / Vuex" percent="60" />
      <Bar skill="GraphQL" percent="40" />
      <Bar skill="MySQL" percent="50" />
      <Bar skill="PHP" percent="40" />
      <Bar skill="Wordpress" percent="40" />

      <Header title="graphics" />
      <Bar skill="Adobe Photoshop" percent="60" />
      <Bar skill="Adobe XD" percent="70" />
      <Bar skill="Adobe Illustrator" percent="40" />

      <Header title="languages" />
      <Bar skill="Polish" percent="100" />
      <Bar skill="English" percent="95" />
      <Bar skill="French" percent="50" />
      <Bar skill="Russian" percent="65" />
      <Bar skill="Indonesian" percent="30" />
      <Bar skill="Spanish" percent="20" />
    </Layout>
  )
}
