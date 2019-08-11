import { Link } from "gatsby"
import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar } from "react-bootstrap"

const Header = () => (
  <>
    <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" expand="lg">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
        <Navbar.Toggle aria-controls="navbarResponsive"/>
        <Navbar.Collapse id="navbarResponsive">
          <Scrollspy className="navbar-nav ml-auto my-2 my-lg-0" items={["about", "services", "portfolio", "contact"]}
                     currentClassName="active">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </Scrollspy>
        </Navbar.Collapse>
      </div>
    </Navbar>
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <h1 className="text-uppercase text-white font-weight-bold">Your Favorite Source of Free Bootstrap
              Themes</h1>
            <hr className="divider my-4"/>
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites
              using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
          </div>
        </div>
      </div>
    </header>
  </>
)

export default Header
