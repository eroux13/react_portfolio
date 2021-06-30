import React from "react";
// Import project gifs
import codeQuiz from "../../images/codequiz.gif";
import cryptelligent from "../../images/cryptelligent.gif";
import ecommerce from "../../images/ecommerce.gif";
import employeeTracker from "../../images/employeeTracker.gif";
import fitness from "../../images/fitness.gif";
import mygym from "../../images/mygym.gif";
import noteTaker from "../../images/noteTaker.gif";
import password from "../../images/password.gif";
import readme from "../../images/readme.gif";
import scheduler from "../../images/scheduler.gif";
import smartTech from "../../images/smartTech.gif";
import teamGenerator from "../../images/teamGenerator.gif";
import weather from "../../images/weather.gif";
// Import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// Import React Pop Up Box
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
// Import Stylesheet
import "./Portfolio.css";

const Portfolio = () => {

    const openPopupboxMyGym = () => {
        const content = (
        <>
            <img className="portfolio-img-popupbox" src={mygym} alt="MyGym Project" />
            <p>Welcome to MyGym, a Gym Database Management application. This application manages a number of tables through Sequelize and MySQL2 which relate to the data types we expect a typical gym to utilize, including members, membership tiers, trainers, and gym classes. The front end of our application serves as an interface for gym administrators to manage information about the gym, as well as an online portal for gym members to sign in and register for classes or change their membership tier. The back end of our application utilizes a RESTful API to perform GET, POST, DELETE, and PUT requests on the information, as requested by front end input.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/eroux13/gym_management_database")}>https://github.com/eroux13/gym_management_database</a>
            <br/>
            <b>Deployed Project:</b> <a className="hyper-link" onClick={() => window.open("https://intense-springs-12278.herokuapp.com/")}>https://intense-springs-12278.herokuapp.com/</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "MyGym"
                }
            }
        });
    }

    const popupboxConfigMyGym = {
        titleBar: {
        enable: true,
        text: "MyGym"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxCryptelligent = () => {
        const content = (
        <>
            <img className="portfolio-img-popupbox" src={cryptelligent} alt="Cryptelligent Project" />
            <p>Welcome to Cryptelligent! This app allows you to search the trending cryptocurrencies and
                monitor specific coins, as well as read related stories on crypto. The purpose of this
                project was to create an online application for new investors who wish to learn more about
                the world of cryptocurrency.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/eroux13/Cryptelligent/")}>https://github.com/eroux13/Cryptelligent/</a>
            <br/>
            <b>Deployed Project:</b> <a className="hyper-link" onClick={() => window.open("https://eroux13.github.io/Cryptelligent/")}>https://eroux13.github.io/Cryptelligent/</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Cryptelligent"
                }
            }
        });
    }

    const popupboxConfigCryptelligent = {
        titleBar: {
        enable: true,
        text: "Cryptelligent"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxFitness = () => {
        const content = (
        <>
            <img className="portfolio-img-popupbox" src={fitness} alt="Fitness Tracker Project" />
            <p>This is a fitness application that allows a user to view, create, and track their daily workouts. 
                A user can start a new workout, log several different exercises, and even continue a workout that has not 
                yet been completed. This application features the use of Express.js for the back-end, Node.js to bring the 
                front and back ends together, MongoDB for the database, and the npm package Morgan for middleware.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/eroux13/workout_tracker")}>https://github.com/eroux13/workout_tracker</a>
            <br/>
            <b>Deployed Project:</b> <a className="hyper-link" onClick={() => window.open("https://boiling-thicket-15106.herokuapp.com")}>https://boiling-thicket-15106.herokuapp.com</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Workout Tracker"
                }
            }
        });
    }

    const popupboxConfigFitness = {
        titleBar: {
        enable: true,
        text: "Workout Tracker"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxSmartTech = () => {
        const content = (
        <>
            <img className="portfolio-img-popupbox" src={smartTech} alt="Blog Project" />
            <p>Smart Tech is a CMS-style blog, where developers can publish their blog posts and comment on other developers posts as well. 
                This application follows the MVC paradigm in its architectural structure, using Handlbars.js as the templating language, 
                Sequelize as the ORM, and express-session npm package for authentication.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/eroux13/smart_tech")}>https://github.com/eroux13/smart_tech</a>
            <br/>
            <b>Deployed Project:</b> <a className="hyper-link" onClick={() => window.open("https://evening-shore-41463.herokuapp.com/")}>https://evening-shore-41463.herokuapp.com/</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Smart Tech"
                }
            }
        });
    }

    const popupboxConfigSmartTech = {
        titleBar: {
        enable: true,
        text: "Smart Tech"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxEcommerce = () => {
        const content = (
        <>
            <img className="portfolio-img-popupbox" src={ecommerce} alt="E-Commerce Back End Project" />
            <p>The purpose of this project is to develop the back end for an e-commerce site. 
                With this project, a user can can perform CRUD operations for the Product, Tag, and Category Tables in the database. 
                This project features the use of Express.js for server side functions and Sequelize to interact with the MySQL database.
                Tests for the API Endpoints can be performed through Insomnia Core.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/eroux13/e_commerce_back_end")}>https://github.com/eroux13/e_commerce_back_end</a>
            <br/>
            <b>Video Walkthrough Part 1:</b> <a className="hyper-link" onClick={() => window.open("https://drive.google.com/file/d/1fxwr5rhaKRIGdhfsRsO_IsErI7L9vdnZ/view")}>https://drive.google.com/file/d/1fxwr5rhaKRIGdhfsRsO_IsErI7L9vdnZ/view</a>
            <br/>
            <b>Video Walkthrough Part 2:</b> <a className="hyper-link" onClick={() => window.open("https://drive.google.com/file/d/13KfSghqan3pknrAqVgZ77lPTgr3uDYZP/view")}>https://drive.google.com/file/d/13KfSghqan3pknrAqVgZ77lPTgr3uDYZP/view</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "E-Commerce Back End"
                }
            }
        });
    }

    const popupboxConfigEcommerce = {
        titleBar: {
        enable: true,
        text: "E-Commerce Back End"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxNoteTaker = () => {
        const content = (
        <>
            <img className="portfolio-img-popupbox" src={noteTaker} alt="Note Taker Project" />
            <p>This is an Express.js note taker application that allows a user to create, read, and delete notes. 
                The purpose of this project is to demonstrate my ability to work in the back-end by building a web server.
                This project was also deployed on Heroku!</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/eroux13/note_taker")}>https://github.com/eroux13/note_taker</a>
            <br/>
            <b>Deployed Project:</b> <a className="hyper-link" onClick={() => window.open("https://young-harbor-17190.herokuapp.com/")}>https://young-harbor-17190.herokuapp.com/</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Note Taker"
                }
            }
        });
    }

    const popupboxConfigNoteTaker = {
        titleBar: {
        enable: true,
        text: "Note Taker"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxEmployeeTracker = () => {
        const content = (
        <>
            <img className="portfolio-img-popupbox" src={employeeTracker} alt="Employee Tracker Project" />
            <p>This project is a Command-Line Interface (CLI) application that allows a company to build and maintain their employee database. 
                It allows a user to view all employees, roles, as well as departments. It also allows for adding employees, 
                roles, departments and updating employees all from your CLI. This project was built using Node.js and MySQL. It also features 
                the built in npm package, Iquirer, for user interaction.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/eroux13/employee_tracker")}>https://github.com/eroux13/employee_tracker</a>
            <br/>
            <b>Full Video Walkthrough:</b> <a className="hyper-link" onClick={() => window.open("https://drive.google.com/file/d/1X_F14SLiFwuBMCfb5tmoI0cUtIF5Sd1X/view")}>https://drive.google.com/file/d/1X_F14SLiFwuBMCfb5tmoI0cUtIF5Sd1X/view</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Employee Tracker"
                }
            }
        });
    }

    const popupboxConfigEmployeeTracker = {
        titleBar: {
        enable: true,
        text: "Employee Tracker"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxTeamGenerator = () => {
        const content = (
        <>
            <img className="portfolio-img-popupbox" src={teamGenerator} alt="Team Generator Project" />
            <p>The purpose of this project is to build a Node.js command-line application that takes in
                information about employees on a software engineering team, then generate an HTML webpage
                that displays summaries for each person. This project also features the use of testing
                through Node.js's built in package called Jest. To take user input the project also features
                the use of the Inquirer package.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/eroux13/team_profile_generator")}>https://github.com/eroux13/team_profile_generator</a>
            <br/>
            <b>Full Video Walkthrough:</b> <a className="hyper-link" onClick={() => window.open("https://drive.google.com/file/d/1EPW-A2-1N119oGlMCxswRAktQDCHlEcI/view")}>https://drive.google.com/file/d/1EPW-A2-1N119oGlMCxswRAktQDCHlEcI/view</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Team Profile Generator"
                }
            }
        });
    }

    const popupboxConfigTeamGenerator = {
        titleBar: {
        enable: true,
        text: "Team Profile Generator"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxReadMe = () => {
        const content = (
        <>
            <img className="portfolio-img-popupbox" src={readme} alt="README Generator Project" />
            <p>The purpose of this project is to build a command-line application that uses Node.js to
                build a README generator. The project uses npm packages such as inquirer to take in user
                input, util to use promisify that lets the user use promises instead of callback functions,
                and fs to write the file.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/eroux13/professional_readme_generator")}>https://github.com/eroux13/professional_readme_generator</a>
            <br/>
            <b>Deployed Project:</b> <a className="hyper-link" onClick={() => window.open("https://drive.google.com/file/d/1E8DHLWNlT_jxd4IcTebaC-ah8qcHRi5w/view")}>https://drive.google.com/file/d/1E8DHLWNlT_jxd4IcTebaC-ah8qcHRi5w/view</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "README Generator"
                }
            }
        });
    }

    const popupboxConfigReadMe = {
        titleBar: {
        enable: true,
        text: "README Generator"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxWeather = () => {
        const content = (
        <>
            <img className="portfolio-img-popupbox" src={weather} alt="Weather Dashboard Project" />
            <p>The purpose of this project is to demonstrate my ability to work with API's. This project
                features two API's from Open Weather Map; the Current Weather Data API, which was used to
                pull data to get the current temperature, humidity, and wind speed. This API was also used
                to get the inputted city's longitude and latitude and feed it into the One Call API to grab
                the 5-day Forecast for the city, as well as the current UV Index. This project features the
                use of Moment.js to retrieve the current date and the future dates for the forecast. It also
                features the use of saving searched cities to local storage so that the user can click on
                them again and have that previously searched city populate the dashboard.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/eroux13/weather_dashboard/")}>https://github.com/eroux13/weather_dashboard/</a>
            <br/>
            <b>Deployed Project:</b> <a className="hyper-link" onClick={() => window.open("https://eroux13.github.io/weather_dashboard/")}>https://eroux13.github.io/weather_dashboard/</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Weather Dashboard"
                }
            }
        });
    }

    const popupboxConfigWeather = {
        titleBar: {
        enable: true,
        text: "Weather Dashboard"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxScheduler = () => {
        const content = (
        <>
            <img className="portfolio-img-popupbox" src={scheduler} alt="Work Scheduler Project" />
            <p>The purpose of this project is to demonstrate my ability to work with jQuery to build an app
                that allows a user to plan out their busy work schedule. The project features the use of
                Moment.js to dynamically update the page based on the current hour. This project also
                features the use of saving events to local storage as well as retrieving those events when
                the page is refreshed.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/eroux13/work_day_scheduler/")}>https://github.com/eroux13/work_day_scheduler/</a>
            <br/>
            <b>Deployed Project:</b> <a className="hyper-link" onClick={() => window.open("https://eroux13.github.io/work_day_scheduler/")}>https://eroux13.github.io/work_day_scheduler/</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Work Day Scheduler"
                }
            }
        });
    }

    const popupboxConfigScheduler = {
        titleBar: {
        enable: true,
        text: "Work Day Scheduler"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxCodeQuiz = () => {
        const content = (
        <>
            <img className="portfolio-img-popupbox" src={codeQuiz} alt="Code Quiz Project" />
            <p>The purpose of this project is to demonstrate my ability to work with the Document Object
                Model (DOM) and dynamically create elements on the page. This project also shows my ability
                to use JavaScript event listeners and storing data into local storage to retrieve and
                display it later on.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/eroux13/code_quiz/")}>https://github.com/eroux13/code_quiz/</a>
            <br/>
            <b>Deployed Project:</b> <a className="hyper-link" onClick={() => window.open("https://eroux13.github.io/code_quiz/")}>https://eroux13.github.io/code_quiz/</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Code Quiz"
                }
            }
        });
    }

    const popupboxConfigCodeQuiz = {
        titleBar: {
        enable: true,
        text: "Code Quiz"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxPassword = () => {
        const content = (
        <>
            <img className="portfolio-img-popupbox" src={password} alt="Password Generator Project" />
            <p>The purpose of this project is to demonstrate my ability to work with JavaScript prompts and
                alerts to generate a unique password under certain circumstatnces.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/eroux13/password_generator/")}>https://github.com/eroux13/password_generator/</a>
            <br/>
            <b>Deployed Project:</b> <a className="hyper-link" onClick={() => window.open("https://eroux13.github.io/password_generator/")}>https://eroux13.github.io/password_generator/</a>
        </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Password Generator"
                }
            }
        });
    }

    const popupboxConfigPassword = {
        titleBar: {
        enable: true,
        text: "Password Generator"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="row img-box-wrapper justify-content-center">
                    <div className="portfolio-img-box col-xl-2 col-lg-2 col-md-1 col-sm-1" onClick={openPopupboxMyGym}>
                        <img className="portfolio-img" src={mygym} alt="MyGym Project"/>
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                
                    <div className="portfolio-img-box col-xl-2 col-lg-2 col-md-1 col-sm-1" onClick={openPopupboxCryptelligent}>
                        <img className="portfolio-img" src={cryptelligent} alt="Cryptelligent Project"/>
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                
                    <div className="portfolio-img-box col-xl-2 col-lg-2 col-md-1 col-sm-1" onClick={openPopupboxFitness}>
                        <img className="portfolio-img" src={fitness} alt="Fitness Tracker Project"/>
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                
                    <div className="portfolio-img-box col-xl-2 col-lg-2 col-md-1 col-sm-1" onClick={openPopupboxSmartTech}>
                        <img className="portfolio-img" src={smartTech} alt="Blog Project"/>
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                
                    <div className="portfolio-img-box col-xl-2 col-lg-2 col-md-1 col-sm-1" onClick={openPopupboxEcommerce}>
                        <img className="portfolio-img" src={ecommerce} alt="E-Commerce Back End Project"/>
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                </div>
                <div className="row img-box-wrapper justify-content-center">                
                    <div className="portfolio-img-box col-xl-2 col-lg-2 col-md-1 col-sm-1" onClick={openPopupboxNoteTaker}>
                        <img className="portfolio-img" src={noteTaker} alt="Note Taker Project"/>
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>

                    <div className="portfolio-img-box col-xl-2 col-lg-2 col-md-1 col-sm-1" onClick={openPopupboxEmployeeTracker}>
                        <img className="portfolio-img" src={employeeTracker} alt="Employee Tracker Project"/>
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                
                    <div className="portfolio-img-box col-xl-2 col-lg-2 col-md-1 col-sm-1" onClick={openPopupboxTeamGenerator}>
                        <img className="portfolio-img" src={teamGenerator} alt="Team Profile Generator Project"/>
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                
                    <div className="portfolio-img-box col-xl-2 col-lg-2 col-md-1 col-sm-1" onClick={openPopupboxReadMe}>
                        <img className="portfolio-img" src={readme} alt="README Generator Project"/>
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                
                    <div className="portfolio-img-box col-xl-2 col-lg-2 col-md-1 col-sm-1" onClick={openPopupboxWeather}>
                        <img className="portfolio-img" src={weather} alt="Weather Dashboard Project"/>
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                </div>
                <div className="row img-box-wrapper justify-content-center">
                    <div className="portfolio-img-box col-xl-2 col-lg-2 col-md-1 col-sm-1" onClick={openPopupboxScheduler}>
                        <img className="portfolio-img" src={scheduler} alt="Work Day Planner Project"/>
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>

                    <div className="portfolio-img-box col-xl-2 col-lg-2 col-md-1 col-sm-1" onClick={openPopupboxCodeQuiz}>
                        <img className="portfolio-img" src={codeQuiz} alt="Code Quiz Project"/>
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>

                    <div className="portfolio-img-box col-xl-2 col-lg-2 col-md-1 col-sm-1" onClick={openPopupboxPassword}>
                        <img className="portfolio-img" src={password} alt="Password Generator Project"/>
                        <div className="overflow">
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigMyGym} />
            <PopupboxContainer {...popupboxConfigCryptelligent} />
            <PopupboxContainer {...popupboxConfigFitness} />
            <PopupboxContainer {...popupboxConfigSmartTech} />
            <PopupboxContainer {...popupboxConfigEcommerce} />
            <PopupboxContainer {...popupboxConfigNoteTaker} />
            <PopupboxContainer {...popupboxConfigEmployeeTracker} />
            <PopupboxContainer {...popupboxConfigTeamGenerator} />
            <PopupboxContainer {...popupboxConfigReadMe} />
            <PopupboxContainer {...popupboxConfigWeather} />
            <PopupboxContainer {...popupboxConfigScheduler} />
            <PopupboxContainer {...popupboxConfigCodeQuiz} />
            <PopupboxContainer {...popupboxConfigPassword} />
        </div>
    )
}

export default Portfolio
