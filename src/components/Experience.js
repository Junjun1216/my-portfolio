import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import '../css/Experience.css';

export class Experience extends Component {

    render() {
        return (
            <div>
                <Container className="experience">
                    <h5> Experience and Achievement</h5>
                    <div className="entry">
                        <h4>
                            Project Songfindrr
                        </h4>
                        <iframe
                            title = "demo"
                            style = {{
                                width: 400,
                                height: 235
                            }}
                            src={`https://www.youtube.com/embed/vKWSeDDvsPc`}
                            frameBorder="0"
                            allowFullScreen={true}
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                        />
                        <p1>
                            Project Songfindrr is a song finder web-application that uses a combination of database
                            query, web-scrape, and supporting search engines. For a more detailed description of the
                            app, please click here.
                        </p1>
                    </div>

                    <div className="entry">
                        <h4>
                            Application Developer at CIBC
                        </h4>
                        <img
                            src = {require("../resources/cibc2.png")}
                            width = "400"
                            height = "235"
                            alt = "cibclogo"
                        ></img>
                        <p1>
                            Currently work here as a co-op application developer where I am responsible for creating
                            mock frontends. These frontend serves as an accessible and interactive way for Pega backend
                            developers to test the core functionality of their api. I also assist on other misc backend
                            development tasks as well as daily deployments.
                        </p1>
                    </div>

                    <div className="entry">
                        <h4>
                            Angular Test Developer at Caseware International
                        </h4>
                        <img
                            src = {require("../resources/bulb.jpeg")}
                            width = "400"
                            height = "235"
                            alt = "bulb"
                        ></img>
                        <p1>
                            My first CO-OP work term where I was an Angular Test Developer at Caseware International,
                            a software solution company specializing in auditing, accounting, and financial reports for
                            both the government and private sectors. I primarily worked with both UI testing in Protractor,
                            and unit testing in Karma on their ReviewCompTax Cloud platform.
                        </p1>
                    </div>

                    <div className="entry">
                        <h4>
                            Received A+ in web development course CSCC09
                        </h4>
                        <img
                            src = {require("../resources/uoft.png")}
                            width = "400"
                            height = "235"
                            alt = "uoft"
                        ></img>
                        <p1>
                            A web-development course introducing the essentials of frontend, backend, restful api, api calls,
                            html, and css. I took a strong interest in this course and excelled in it, receiving
                            a letter grade above the class.
                        </p1>
                    </div>
                </Container>
                <hr/>
            </div>
        )
    }
}

export default Experience;
