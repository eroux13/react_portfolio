import React from "react";
// Import Stylesheet
import "./Experience.css";

const Experience = () => {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience & Education</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>2016</h2>
                        <h3>Coding Dojo</h3>
                        <p>Coding Dojo is a full stack development bootcamp that aims to not only teach 3 stacks, but also works to teach participants how to pick up new languages easily. I studied Python/Flask/mySQL, Javascript/Node/MongoDB/Angular_1, and iOS with Swift and Xcode. The program lasted an intense 14 weeks (900+ hrs), and gave me a good understanding of computer science basics as well as a strong knowledge of web development.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>2016-2018</h2>
                        <h3>California State University, Sacramento</h3>
                        <p>After graduating from West Valley College in Saratoga, CA, I transferred to Sacramento State to pursue a Bachelor's in Management Iformation Systems. During my time at Sacramento State, I learned how to code in C#, Visual Basic, and Java. I also participated on the collegiate baseball team, powerlifting club, and MISA (MIS Student Association). In July 2018 I received my B.S. in Management Information Systems.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>2018</h2>
                        <h3>POS Portal</h3>
                        <p>I was hired as a Software Developer Intern and worked on P2 (POS Portal's CRM Salesforce Implementation). My responsisbilities included, communicating with and aiding clients by developing custom solutions to meet their needs and handling P2 cases regarding implementation of custom development in the client's Salesforce platform.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>2019</h2>
                        <h3>Amazon Prime Now</h3>
                        <p>I was hired as an FC Associate I, who specialized in Inbound Problem Solve (IBPS), Outbound Problem Solve (OBPS), and Inventory Control Quality Assurance (ICQA). I had daily interaction with AFT Lite, Sauron Dashboard, Dolphin, Marauder’s Map, and JediBot to allow for excellent customer service.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>2020-2021</h2>
                        <h3>University of California, Davis</h3>
                        <p>In order to pursue my passion for coding and to supplement my skill set, I enrolled in the Full Stack Web Development Bootcamp at UC Davis. I learned several new technologies including MongoDB, Express.js, React, and Node.js. In June 2021, I completed the program.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
