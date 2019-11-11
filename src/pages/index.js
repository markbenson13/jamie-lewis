import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Video from "../components/video"

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
            <h3 className="video-title"></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="http://extinction.com/" target="_blank" rel="noopener noreferrer" title="external link">extinction.com/</a>
          </div>
          <div className="col-7">

          </div>
        </div>

        <div className="row video-items">

          {data.allMarkdownRemark.edges.map(post => (
            <div className="col-4">
              <a key={post.node.id} href={post.node.frontmatter.path}>
                <img src={post.node.frontmatter.videoThumbnail} />
                {post.node.frontmatter.videoTitle}
              </a>
            </div>
          ))}

        </div>
      </div>
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
            videoTitle
            videoThumbnail
            videoSourceUrl
          }
        }  
      }
    }
  }
`

export default IndexPage


