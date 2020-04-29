import React, {Component} from 'react';
import '../css/Contact.css';

export class Contact extends Component {

    render() {
        return (
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
        )
    }
}

export default Contact;