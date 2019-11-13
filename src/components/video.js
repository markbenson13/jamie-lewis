import React from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"

const Video = ({ videoSrcURL, videoTitle }) => (

    <iframe
        src={videoSrcURL}
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        title={videoTitle}>
    </iframe>

)


Video.propTypes = {
    videoTitle: PropTypes.string,
}

Video.defaultProps = {
    videoTitle: ``,
}

export default Video