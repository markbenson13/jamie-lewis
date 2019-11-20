import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Video from "../components/video"
import VideoItems from "../components/video-items";
import Contact from "../components/Contact";


const IndexPage = ({
  data
}) => (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <div className="row">
          <div className="col-5 featured-video">
            <h1 className="site-title">Jamie Lewis</h1>
            <hr />
            <h2>Music Composition & Sound Design</h2>
            <h3 className="video-title">Extinction Episodes 2,3 & 4</h3>
            <a href="http://extinction.com/" target="_blank" rel="noopener noreferrer" title="external link">extinction.com/</a>
          </div>
          <div className="col-7">
            <Video videoSrcURL="https://player.vimeo.com/video/266492994">

            </Video>
          </div>
        </div>
        <VideoItems />
      </div>
      <Contact />
    </Layout>

  )

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 60) {
      edges {
        node {
          id
          frontmatter {
            path
            featuredTitle
            videoTitle
            videoThumbnail
            videoSourceUrl
          }
          html
        }  
      }
    }
  }
`

export default IndexPage


