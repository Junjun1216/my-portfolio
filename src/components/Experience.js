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
                            style = {{
                                width: 600,
                                height: 350
                            }}
                            src={`https://www.youtube.com/embed/vKWSeDDvsPc`}
                            frameBorder="0"
                            allowfullscreen="true"
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
                            Project Songfindrr is a song finder web-application that uses a combination of
                            database query, web-scrape, and supporting search engines. For a more
                            detailed description of the app, please click here.
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
                            Project Songfindrr is a song finder web-application that uses a combination of
                            database query, web-scrape, and supporting search engines. For a more
                            detailed description of the app, please click here.
                        </p>
                    </div>

                    <div className="entry">
                        <h4>
                            Received A+ in web development course CSCC09
                        </h4>
                        <img
                            src = {require("../resources/stars.jpg")}
                            width = "600"
                            height = "350"
                            alt = "vex"
                        ></img>
                        <p>
                            Project Songfindrr is a song finder web-application that uses a combination of
                            database query, web-scrape, and supporting search engines. For a more
                            detailed description of the app, please click here.
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
        margin-top: 150px;
        margin-bottom: 30px;
    }
    
    p {
        text-align: left;
    }
    
`;

export default Experience;
