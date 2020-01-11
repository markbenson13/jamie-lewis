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
                    <img src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Profile picture" />
                </div>
                <div className="col-sm-12 col-md-7">
                    <div className="profile-info">
                        <p className="large-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nibh aliquet, accumsan lectus vitae, hendrerit augue. Duis ut magna ut leo tempor ultricies.
                    </p>
                        <p>
                            ‘Cras placerat odio eu dui auctor vestibulum. Quisque a purus ac orci luctus rutrum. Phasellus convallis neque at quam finibus commodo. Suspendisse et mauris enim. Integer vel convallis mauris, ac porta est. Nam nisi ipsum, tristique eget condimentum in, gravida sit amet ante. Donec lacinia velit sit amet ex aliquam, non rhoncus ex tincidunt. Donec vehicula dui eget ante luctus, ut ultrices mauris maximus. Proin vel porta turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam dignissim lorem nec neque auctor, ut accumsan nunc semper. Suspendisse dui erat, cursus vel nisl id, ultricies scelerisque enim.
                    </p>
                    </div>
                    <div className="contact-info">
                        <p className="email"><span className="icon email"></span><a href="#">jamielewis@gmail.com</a></p>
                        <p className="phone-no"><span className="icon phone"></span> + 12 799 3456</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default About