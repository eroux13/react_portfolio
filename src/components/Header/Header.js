import React from "react";
// Import Custom Logo
import logo from "../../images/customLogo.png";
// Import Font Awesome & Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// Import Smooth Scroll
import { Link } from "react-scroll";
// Import Stylesheet
import "./Header.css";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="EJ's Custom Logo" className="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} className="navBtn"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li> */}
                        <li className="nav-item">
                            <Link smooth={true} to="about" offset={-110} className="nav-link active" >About Me</Link>
                            {/* <a className="nav-link active" href="#">About Me</a> */}
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" offset={-110} className="nav-link active" >Portfolio</Link>
                            {/* <a className="nav-link active" href="#">Portfolio</a> */}
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="skills" offset={-110} className="nav-link active" >Skills</Link>
                            {/* <a className="nav-link active" href="#">Skills</a> */}
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="experience" offset={-110} className="nav-link active" >Experience</Link>
                            {/* <a className="nav-link active" href="#">Experience</a> */}
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link active" href="#">Testimonials</a>
                        </li> */}
                        <li className="nav-item">
                            <Link smooth={true} to="contact" offset={-110} className="nav-link active" >Contact Me</Link>
                            {/* <a className="nav-link active" href="#">Contact Me</a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
