import React from 'react';
import './Homepage.scss';

import anime from 'animejs';
import Plx from 'react-plx';


import Box from '../../components/Box/box';


const parallaxData = [
    {
        start: 0,
        end: 500,
        properties: [
            {
                startValue: 1,
                endValue: -2,
                property: 'rotate',
            },
        ],
    },
];

function Homepage () {
    return (
        <div id="homepage" className="fluid-container">
            <div id="homepage-section1">
                <p className="postition-relative">Still being worked on</p>
            </div>
            <div id="homepage-section2" className="d-flex">
                <div>
                    <Box />
                </div>
            </div>
        </div>
    )
}

export default Homepage;