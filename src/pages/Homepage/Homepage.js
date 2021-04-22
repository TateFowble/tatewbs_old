import React from 'react';
import './Homepage.scss';

// Libraries
import anime from 'animejs';
import Plx from 'react-plx';


// images
import reactjs from '../../assets/images/reactjs.png';
import angularjs from '../../assets/images/angularjs.png';

// components
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

function Homepage() {
    return (
        <div id="homepage" className="fluid-container">
            <div id="homepage-section1" className="fluid-container">
                <div className="container">
                    <h1 className="text">Oh hey there</h1>
                    <p className="text">(◕ᴥ◕ʋ)</p>
                </div>
                <div className="d-flex justify-content-evenly flex-row">
                    <img src={reactjs} alt="" />
                    <img src={angularjs} alt="" />
                </div>
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