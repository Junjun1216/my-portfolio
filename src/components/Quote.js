import React from 'react';
import { Jumbotron as Jumbo} from "react-bootstrap";
import '../css/Quote.css';

function Quote() {
    return (
        <Jumbo fluid className="jumbo">
            <div className="overlay"/>

            <h3>Welcome Reader</h3>
            <p>"Quality is not an act, it is a habit" - Aristotle</p>
        </Jumbo>
    )
}

export default Quote;