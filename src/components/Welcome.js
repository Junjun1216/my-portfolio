import React, {Component} from 'react';
import {Container} from "react-bootstrap";

export class Welcome1 extends Component {

    render() {
        return (
            <div className="about">
                 <Container className="aboutContent">
                    <h2>About Me</h2>
                    <img className="portrait" src = {require("../resources/portrait.jpg")} alt="portrait"/>
                     My name is Jun Chao (Michael) Chen, I am a third year computer science and philosophy student at
                     the University of Toronto Scarborough currently searching for my second CO-OP term. After my first
                     co-op experience as an Angular Test Developer, I have developed an interest in web development. I began to
                     experiment with npm packages in particular relation to web-scraping such as cheerios, jquery,
                     phantomjs, puppeteerjs, nightmarejs, and supercrawler. I have also experimented with the React frontend
                     framework with bootstrapping, hence, this site. Furthermore, I completed a web-development course
                     where I participated in a free-exploration project which you read about below. Some personal
                     interests of mine include ethical philosophy particularly regarding debates between contractualism
                     and utilitarianism, and listening to various audio-books with my favorite being Norwegian Woods
                     by Haruki Murakami.
                </Container>
            </div>
        )
    }
}

export default Welcome1;
