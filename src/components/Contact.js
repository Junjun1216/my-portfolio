import React, {Component} from 'react';
import styled from "styled-components";
import footer from '../resources/footer.jpg';

export class Contact extends Component {

    render() {
        return (
            <CStyles>
                <div className="contact">

                    <a href='https://www.linkedin.com/in/junchao-chen-17816b145/' target="_blank" rel="noopener noreferrer">
                        <img className="contact-item" src = {require("../resources/linkedln.png")} alt="linkedln"/>
                    </a>

                    <a href='https://www.facebook.com/astral.staraph' target="_blank" rel="noopener noreferrer">
                        <img className="contact-item" src = {require("../resources/facebook.png")} alt="facebook"/>
                    </a>

                    <a href='https://github.com/Junjun1216' target="_blank" rel="noopener noreferrer">
                        <img className="contact-item" src = {require("../resources/github.png")} alt="github"/>
                    </a>

                </div>
            </CStyles>
        )
    }
}

const CStyles = styled.div`
    .contact {
        display: flex;
        display-direction: horizontal;
        justify-content: center;
        color: black;
        background: url(${footer});
        height: 100px;
        -webkit-transition: 1.5s;
        -moz-transition: 1.5s;
        -o-transition: 1.5s;
        transition: 1.5s;
        opacity: 0;
        visibility: hidden;
    }
    
    .contact-item {
        height: 60px;
        width: 60px;
        margin: 20px;
    }
`;

export default Contact;