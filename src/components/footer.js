import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav } from "react-bootstrap"

const Footer = ({ siteTitle }) => (
    <footer className="footer-wrapper">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-sm-12 col-md-6">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/home">Work</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/music">Music</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/contact" eventKey="#contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="col-sm-12 col-md-6">
                    <p className="copyright">© {new Date().getFullYear()} Copyright. All rights reserved. Designed by Mark Benson Opena.</p>
                </div>
            </div>
        </div>
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer
