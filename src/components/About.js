import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import '../css/About.css';

export class About extends Component {

    render() {
        return (
            <div className="about">
                 <Container className="aboutContent">
                    <h2>About Me</h2>
                     <div className="portraits">
                         My name is Jun Chao (Michael) Chen, I am a forth year computer science and philosophy student at
                         the University of Toronto Scarborough currently taking my second co-op work term at CIBC as an application developer. After my first
                         co-op experience as an Angular Test Developer, I have developed an interest in web development. I began to
                         experiment with npm packages in particular relation to web-scraping such as cheerios, jquery,
                         puppeteerjs, and nightmarejs. I have also worked with the React frontend
                         framework both professionally at CIBC and during my free time. Furthermore, I completed a web-development course
                         where I participated in a free-exploration project which you read about below. Some personal
                         interests of mine include philosophy in normative ethics and listening to audio-books with my favorite being Norwegian Woods
                         by Haruki Murakami.
                         <img className="portrait" src = {require("../resources/portrait.jpg")} alt="portrait"/>
                     </div>
                </Container>
                <hr/>
            </div>
        )
    }
}

export default About;
