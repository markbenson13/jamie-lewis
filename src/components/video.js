import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Video = ({ videoSrcURL, videoTitle }) => (
    <div className="col-4">
        <iframe
            src={videoSrcURL}
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen>
        </iframe>
        <p><a href="https://vimeo.com/188828855">{videoTitle}</a> from <a href="https://vimeo.com/audioshowreel">Jamie Lewis</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
    </div>

)


Video.propTypes = {
    videoTitle: PropTypes.string,
}

Video.defaultProps = {
    videoTitle: ``,
}

export default Video