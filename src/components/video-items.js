/**
 * Video component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"


const VideoItems = () => (
    <StaticQuery query={videoItemsQuery} render={(data) => (
        <div className="row video-items">
            {
                data.allMarkdownRemark.edges.map(({ node }) => (
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <a className=" video-item" key={node.id} href={node.frontmatter.path}>
                            <img src={node.frontmatter.videoThumbnail} alt={node.frontmatter.videoTitle} />
                            <span>{node.frontmatter.videoTitle}</span>
                            <span>{node.frontmatter.featuredTitle}</span>
                        </a>
                    </div>
                ))
            }

        </div>
    )} />
)

VideoItems.propTypes = {
    videoTitle: PropTypes.string,
}

VideoItems.defaultProps = {
    videoTitle: ``,
}

const videoItemsQuery = graphql`
    query videoItemsQuery {
        allMarkdownRemark {
            edges {
              node {
                html
                id
                frontmatter {
                  title
                  path
                  videoTitle
                  videoSourceUrl
                  videoThumbnail
                  featuredTitle
                }
              }
            }
        }
    }
`

export default VideoItems


