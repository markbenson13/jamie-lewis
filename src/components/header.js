import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header className="header-wrapper">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-8 nav-wrapper">
          <Nav
            activeKey="/"
            className="align-items-center"
          >
            <Nav.Item>
              <Link className="nav-link" activeClassName="active" to="/">Work</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" activeClassName="active" to="/about/">About</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" activeClassName="active" to="/music/">Music</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" activeClassName="active" to="#contact-wrapper">Contact</Link>
            </Nav.Item>
            <div className="social-media-wrapper">
              <a href="#" className="smi linkedin" target="_blank" rel="noopener noreferrer">Linkedin</a>
              <a href="#" className="smi twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </Nav>
        </div>
        <div className="col-sm-12 col-md-4 logo-wrapper">
          <a href="/" className="text-logo">Jamie Lewis</a>
          <p className="sub-heading">Music Composition &amp; Sound Design</p>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
