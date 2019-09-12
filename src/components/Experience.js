import React, {Component} from 'react';
import styled from "styled-components";

export class Experience extends Component {

    render() {
        return (
            <EStyles>
                <div className="experience">
                    <h5> Experience and Achievement </h5>
                <div className="eContent">
                    <div className="entry">
                        <h4>
                            Project Songfindrr
                        </h4>
                        <iframe
                            title = "demo"
                            style = {{
                                width: 600,
                                height: 350
                            }}
                            src={`https://www.youtube.com/embed/vKWSeDDvsPc`}
                            frameBorder="0"
                            allowFullScreen={true}
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                        />
                        <p>
                            Project Songfindrr is a song finder web-application that uses a combination of
                            database query, web-scrape, and supporting search engines. For a more
                            detailed description of the app, please click here.
                        </p>
                    </div>

                    <div className="entry">
                        <h4>
                            Vex Robotics Competition
                        </h4>
                        <img
                            src = {require("../resources/Vex.png")}
                            width = "600"
                            height = "350"
                            alt = "vex"
                        ></img>
                        <p>
                            The Vex Robotics competition is a event I participated where students spend approximately
                            5 month planning and building a mechanical robot to perform a specific task. In my case, we had to build a
                            robot to deliver balls into a basket, and the team who manage to score the most amount of balls
                            in the allowed time limit wins. View my CV on linkedin for details.
                        </p>
                    </div>


                    <div className="entry">
                        <h4>
                            Angular Test Developer at Caseware International
                        </h4>
                        <img
                            src = {require("../resources/bulb.jpeg")}
                            width = "600"
                            height = "350"
                            alt = "vex"
                        ></img>
                        <p>
                            My first CO-OP work term where I was an Angular Test Developer at Caseware International,
                            a software solution company specializing in auditing, accounting, and financia reports for
                            both the government and private sectors. I primarily worked with both UI testing in Protractor,
                            and unit testing in Karma on their ReviewCompTax Cloud platform.
                        </p>
                    </div>

                    <div className="entry">
                        <h4>
                            Received A+ in web development course CSCC09
                        </h4>
                        <img
                            src = {require("../resources/uoft.png")}
                            width = "600"
                            height = "350"
                            alt = "vex"
                        ></img>
                        <p>
                            A web-development course introducing the essentials of frontend, backend, restful api, api calls,
                            html, and css. I took a strong interest in this course and excelled in it, receiving
                            a letter grade above the class.
                        </p>
                    </div>
                </div>
                </div>
            </EStyles>
        )
    }
}

const EStyles = styled.div`
   .experience {
        -webkit-transition: 1.5s;
        -moz-transition: 1.5s;
        -o-transition: 1.5s;
        transition: 1.5s;
        opacity: 0;
        visibility: hidden;
    }
    
    .eContent {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 100px 0 100px;
    }
    
    .entry {
        vertical-align: top;
        display: inline-block;
        text-align: center;
        width: 600px;
        color: #a5a1a5;
        margin: 50px;
    }
      
    h4 {
        font-size: 40px;
        font-style: normal;
        color: #a5a1a5;
        margin-bottom: 15px;
    } 
    
    h5 {
        font-size: 60px;
        font-style: normal;
        color: #a5a1a5;
        margin-bottom: 20px;
        padding-top: 100px;
    }
    
    p {
        text-align: left;
    }
    
`;

export default Experience;
