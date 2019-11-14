import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const SoundCloudVideo = () => (
    <StaticQuery query={SoundCLoudQuery} render={(data) => (
        <div className="soundcloud-videos">
            {
                data.allSoundcloudVideosJson.edges.map(({ node }) => (
                    <div className="soundcloud-item">
                        <iframe src={node.soundcloudURL}
                            width="100%"
                            height="400"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                        />
                    </div>
                ))
            }

        </div>
    )} />
)

const SoundCLoudQuery = graphql`
    query SoundCloudQuery {
        allSoundcloudVideosJson {
            edges {
                node {
                id
                soundcloudURL
                }
            }
        }
    }
`

export default SoundCloudVideo;