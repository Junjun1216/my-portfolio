import React from 'react';
import { Jumbotron as Jumbo, Container} from "react-bootstrap";
import styled from 'styled-components';
import starJar from '../resources/astro-back.jpg';

function Quote() {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay">                 </div>

                <h3>Welcome Reader</h3>
                    <p>"Quality is not an act, it is a habit" - Aristotle</p>
            </Jumbo>
        </Styles>
    )
}

const Styles = styled.div`
  .jumbotron {
    margin-top: 0px;
  }
  
  .jumbo {
    background: url(${starJar}) no-repeat fixed bottom center;
    background-size: cover;
    color: #efefef;
    height: 300px;
    position: relative;
    z-index: -2;
    margin-bottom: 0;
  }
  .overlay {
    background-color: black;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  
  h3 {
    font-size: 80px;
  }
`;

export default Quote;