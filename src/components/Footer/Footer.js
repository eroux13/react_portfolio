import React from "react";
// Import Smooth Scroll
import { Link } from "react-scroll";
// Import Stylesheet
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>San Jose, CA</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">+1(408)824-4657</a>
            </div>
            <div className="d-flex">
              <p>ej.roux13@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="about" offset={-110} className="footer-nav" >About Me</Link>
                {/* <a className="footer-nav">About Me</a> */}
                <br />
                <Link smooth={true} to="portfolio" offset={-110} className="footer-nav" >Portfolio</Link>
                {/* <a className="footer-nav">Portfolio</a> */}
                <br />
                <Link smooth={true} to="skills" offset={-110} className="footer-nav" >Skills</Link>
                {/* <a className="footer-nav">Skills</a> */}
              </div>
              <div className="col">
                <Link smooth={true} to="experience" offset={-110} className="footer-nav" >Experience</Link>
                {/* <a className="footer-nav">Experience</a> */}
                {/* <br />
                <a className="footer-nav">Testimonials</a> */}
                <br />
                <Link smooth={true} to="contact" offset={-110} className="footer-nav" >Contact Me</Link>
                {/* <a className="footer-nav">Contact Me</a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;EJ Roux | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
