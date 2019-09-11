import React, {Component} from 'react';
import styled from "styled-components";

export class Sample extends Component {

    render() {
        return (
            <SStyles>
                <div className="sample">
                    <h1>Songfindrr Description</h1>
                        ultricies congue. Integer nibh hendrerit sed pulvinar hac leo faucibus malesuada enim eu nisl,
                        sem vestibulum ultrices sapien taciti cursus est torquent sodales proin enim pellentesque purus
                        etiam curabitur neque commodo congue aenean, felis tristique faucibus magna porttitor volutpat
                        leo vestibulum, id hendrerit dui leo in praesent eu eget pharetra ut arcu etiam rhoncus varius
                        condimentum luctus aliquam auctor gravida, pretium erat felis ultricies congue. Integer nibh
                    hendrerit sed pulvinar hac leo faucibus malesuada enim eu nisl,
                    sem vestibulum ultrices sapien taciti cursus est torquent sodales proin enim pellentesque purus
                    etiam curabitur neque commodo congue aenean, felis tristique faucibus magna porttitor volutpat
                    leo vestibulum, id hendrerit dui leo in praesent eu eget pharetra ut arcu etiam rhoncus varius
                    condimentum luctus aliquam auctor gravida, pretium erat felis

                    hendrerit sed pulvinar hac leo faucibus malesuada enim eu nisl,
                    sem vestibulum ultrices sapien taciti cursus est torquent sodales proin enim pellentesque purus
                    etiam curabitur neque commodo congue aenean, felis tristique faucibus magna porttitor volutpat
                    leo vestibulum, id hendrerit dui leo in praesent eu eget pharetra ut arcu etiam rhoncus varius
                    condimentum luctus aliquam auctor gravida, pretium erat felis
                </div>
            </SStyles>
        )
    }
}

const SStyles = styled.div`
    .sample {
        color: #a5a1a5;
        display: block;
        font-size: 30px;
        margin: 60px 60px 200px 60px;
        -webkit-transition: 1.5s;
        -moz-transition: 1.5s;
        -o-transition: 1.5s;
        transition: 1.5s;
        opacity: 0;
        visibility: hidden;
    }

    h1 {
        font-size: 60px;
        margin-bottom: 30px;
    }
    
    
`;

export default Sample;