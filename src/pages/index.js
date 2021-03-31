
import React from "react"
import { Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"

import SEO from "../components/seo"

import Checkout from "../components/checkout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Checkout />
 <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
     
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage