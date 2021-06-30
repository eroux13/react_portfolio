import React from "react";
// Import Typed Effect
import Typed from "react-typed";
// Import Smooth Scroll
import { Link } from "react-scroll";
// Import Stylesheet
import "./Jumbotron.css";

const Jumbotron = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hello, my name is EJ Roux!</h1>
                <Typed 
                    className="typed-text"
                    strings={
                        [
                            "Full-Stack Developer",
                            "Web Developer",
                            "Web Designer",
                            "Software Developer",
                            "Software Engineer"
                        ]
                    }
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to="contact" offset={-110} className="btn-main">Contact Me</Link>
                {/* <a href="#" className="btn-main">Contact Me</a> */}
            </div>
        </div>
    )
}

export default Jumbotron
