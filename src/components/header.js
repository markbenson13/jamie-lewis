import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header className="header-wrapper">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-8">
          <Nav
            activeKey="/"
          >
            <Nav.Item>
              <Link className="nav-link" to="/">Work</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/about/">About</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/music/">Music</Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="col-4 social-media-wrapper">
          <a href="#" className="smi linkedin" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href="#" className="smi twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
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
