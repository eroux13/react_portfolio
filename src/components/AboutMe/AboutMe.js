import React from "react";
// Import Profile Picture
import picture from "../../images/profilePic.jpg";
// Import Stylesheet
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                {/* xm or sm? */}
                <div className="col-lg-6 col-xm-12">
                    <div className="profile-wrap mb-5">
                        <img src={picture} alt="EJ Roux" className="profile-img"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about">About Me</h1>
                    <p className="about-info">
                        Hello there, my name is EJ Roux! I enjoy working in a fast-paced, dynamic environment,
                        working on projects from concept to completion. I am a results-driven, highly motivated
                        professional with exceptional success in web design and development from front-end to
                        back-end projects from conceptualization through implementation.

                        In 2021, I graduated from the Full-Stack Web Development Bootcamp at the University of California, Davis. I also graduated 
                        from California State University, Sacramento in 2018 with a Bachelor's of Science in Management Information Systems (MIS). 
                        Over the years, I developed a passion for technology, especially in development, both in front-end and back-end.

                        Outside of daily coding, I enjoy spending time with my dogs, cooking and learning new
                        recipes, powerlifting, watching baseball, and traveling. Once the pandemic is over, I plan
                        to travel to Asia, with stops in Japan, South Korea, Philippines, and many more!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
