import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="row">
        <div className="col-5 featured-video">
          <h1 className="site-title">Jamie Lewis</h1>
          <hr />
          <h2>Music Composition & Sound Design</h2>
          <h3 className="video-title">In-Game animations by Secret Sauce Studios</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="http://extinction.com/" target="_blank" title="external link">extinction.com/</a>
        </div>
        <div className="col-7">
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/266492994" width="640" height="360" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <div className="row video-items">
        <div className="col-4">
          <iframe src="https://player.vimeo.com/video/188828855" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          <p><a href="https://vimeo.com/188828855">The Guardians - Elite Dangerous: Horizons Trailer</a> from <a href="https://vimeo.com/audioshowreel">Jamie Lewis</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        </div>
        <div className="col-4">
          <iframe src="https://player.vimeo.com/video/200855187" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          <p><a href="https://vimeo.com/200855187">Planet Coaster- Official Launch Trailer</a> from <a href="https://vimeo.com/audioshowreel">Jamie Lewis</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        </div>
        <div className="col-4">
          <iframe src="https://player.vimeo.com/video/232099163" width="640" height="273" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          <p><a href="https://vimeo.com/232099163">1000 Animated Trailer</a> from <a href="https://vimeo.com/audioshowreel">Jamie Lewis</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        </div>
      </div>
    </div>
    <h1>Hello World!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
