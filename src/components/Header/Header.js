import React from "react"
// Import Custom Logo
import logo from "../../images/customLogo.png"
// Import Font Awesome & Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// Import Stylesheet
import "./Header.css"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="EJ's Custom Logo" className="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} className="navBtn"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
