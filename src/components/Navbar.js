import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{ height: '8em', backgroundColor: '#18453B' }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img
                style={{ maxHeight: '3.75rem' }}
                className="fas fa-lg"
                src="https://battle-for-msu-swim-dive.s3.amazonaws.com/home.png"
                alt="Logo"
              />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div
              className="navbar-start has-text-centered"
              style={{ backgroundColor: '#18453B' }}
            >
              <Link className="navbar-item has-text-white" to="/media">
              Media & Press Releases
              </Link>
              <Link className="navbar-item has-text-white" to="/pledge">
                Pledge Your Support
              </Link>
              <Link className="navbar-item has-text-white" to="/get-involved">
                Get Involved
              </Link>
              <Link
                className="navbar-item has-text-white"
                to="/program-accolades"
              >
                Program Accolades
              </Link>
              <Link className="navbar-item has-text-white" to="/testimonials">
                Testimonials
              </Link>
              {/* <Link className="navbar-item has-text-white" to="/save-olympic-sports">
                #SaveOlympicSports
              </Link> */}
              <Link className="navbar-item has-text-white" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
          <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/team_room.jpg')`,
          }}
        ></div>
        </div>
      </nav>
    )
  }
}

export default Navbar
