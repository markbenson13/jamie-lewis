import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
    <Layout>
        <SEO title="About" />
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>About Me</h1>
                </div>
            </div>
            <div className="row profile-wrapper">
                <div className="col-sm-12 col-md-5">
                    <img src="-" alt="Profile picture" />
                </div>
                <div className="col-sm-12 col-md-7">
                    <div className="profile-info">
                        <p className="large-text">
                            Hi.
                    </p>
                        <p>
                            ‘Welcome. Feel free to email or add me on skype - I look forward to chatting :)
                    </p>
                    </div>
                    <div className="contact-info">
                        <p className="email"><span className="icon email"></span><a href="mailto:jme@c-a-d.me">jme@c-a-d.me</a></p>
                        <p className="Skype"><span className="icon-skype"></span>jmelew</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default About
