import React from "react";
// Import Circular Progress Bar Component
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// Import Stylesheet
import "./Skills.css";

const Skills = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <h1 className="skills my-5">Skills</h1>
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={95} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>95%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={95} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>95%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={95} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>95%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={95} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                            alt="react"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>95%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={95} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                            alt="mongodb"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>95%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={95} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                            alt="nodejs"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>95%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
            {/* Skill Set Row 2 */}
            <div className="row">
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={95} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                            alt="expressjs"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>95%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={95} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg"
                            alt="jquery"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>95%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={95} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                            alt="mysql"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>95%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={95} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original-wordmark.svg"
                            alt="sequelize"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>95%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={95} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg"
                            alt="git"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>95%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={95} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original-wordmark.svg"
                            alt="heroku"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>95%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
            {/* Skill Set Row 3 */}
            <div className="row">
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={75} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg"
                            alt="java"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>75%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={75} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg"
                            alt="python"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>75%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={75} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-line.svg"
                            alt="csharp"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>75%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={75} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg"
                            alt="angular"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>75%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={70} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-line.svg"
                            alt="django"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>70%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="col-2 skillLogo">
                    <CircularProgressbarWithChildren value={50} styles={buildStyles({pathColor: "#f9ab00", trailColor: "#a9a9a9"})} className="progressCircle">
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            style={{ width: 70, marginTop: -5 }}
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                            alt="aws"
                        />
                        <div style={{ fontSize: 20, marginTop: 5 }} className="skillPercent">
                            <strong>50%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
        </div>
    )
}

export default Skills
