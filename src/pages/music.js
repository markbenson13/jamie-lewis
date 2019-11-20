import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SoundCloudVideo from "../components/soundcloud-items"

const Music = () => (
    <Layout>
        <SEO title="Music" />
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Music</h1>
                </div>
            </div>
            <div className="row music-wrapper">
                <div className="col-12">
                    <SoundCloudVideo />
                </div>

            </div>
        </div>
    </Layout>
)

export default Music
