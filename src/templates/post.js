import React from 'react'
// import Helmet from 'react-helmet'
// import { useStaticQuery, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
import VideoItems from "../components/video-items"


export default function Template({ data }) {
    const { markdownRemark: post } = data;

    return (
      <Layout>
        <SEO title={post.frontmatter.videoTitle} />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-5 featured-video">
              <h1 className="site-title">{post.frontmatter.videoTitle}</h1>
              <hr />
              {/* <h2>Music Composition & Sound Design</h2> */}
              {/* <h3 className="video-title">{post.frontmatter.videoTitle}</h3> */}
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            <div className="col-sm-12 col-md-7 video-frame">
              <Video videoSrcURL={post.frontmatter.videoSourceUrl}></Video>
            </div>
            {/* <h1>{post.frontmatter.videoTitle}</h1>
                        <img src={post.frontmatter.videoThumbnail} />
                        <p dangerouslySetInnerHTML={{ __html: post.html }} /> */}
          </div>
          <VideoItems />
        </div>
      </Layout>
    )
}



export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path} }) {
            html
            id
            frontmatter {
                path
                videoTitle
                videoThumbnail
                videoSourceUrl
        }
    }
}
`
