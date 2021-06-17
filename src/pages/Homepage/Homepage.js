import React, { useEffect } from 'react';
import './Homepage.scss';

// Libraries
import anime from 'animejs';
    // https://animejs.com/documentation/
import ReactRotatingText from 'react-rotating-text';
    // https://www.npmjs.com/package/react-rotating-text
import { Parallax } from 'react-parallax';
    // https://www.npmjs.com/package/react-parallax

// images
import reactjs from '../../assets/images/reactjs.png';
import angularjs from '../../assets/images/angularjs.png';
import nodejs from '../../assets/images/nodejs.png';
import mysql from '../../assets/images/mysql.png';
import mongodb from '../../assets/images/mongodb.png';
import python from '../../assets/images/python.png';

import image from '../../assets/images/background2.jpg';
// components
// import AnimeText from '../../components/AnimeText/AnimeText';
import InfoBox from '../../components/InfoBox/InfoBox';


// bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Homepage() {

    useEffect(() => { 
        
    });

    return (
        <div id="homepage">
            <Parallax
                className="fluid-container d-flex align-items-center justify-content-center"
                style={{ minHeight: '60vh' }}
                // blur={1}
                bgImage={image}
                bgImageAlt="the cat"
                strength={500}
            >
                <p className="text-white text-center fs-1">Have <ReactRotatingText items={['an amazing site!', 'an app customers will love...', 'a site made for you :)']} /></p>
            </Parallax>

            <div>
                <InfoBox
                    header={
                        "Need support or have something to offer? Join the growing community on discord"
                    }
                    text={
                        "Click on the connect button below on the discord widget!"
                    }
                    borderColor={
                        "#7fb3e4"
                    }
                />
            </div>

            <div id="homepage-section7" className="fluid-container">
                <div className="d-flex justify-content-around">
                    <iframe
                    src="https://discord.com/widget?id=839274694511427655&theme=dark" 
                    width="350" 
                    height="500" 
                    allowtransparency="true" 
                    frameborder="0" 
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    title="discord"
                    ></iframe>
                </div>
            </div>
            <div className="vertical-spacing"></div>
        </div>
    )
}

export default Homepage;


/*

Contact info on homepage
for services use reds and yellows

*/


/*
Customer stars and reviews
More info on item, aka tv thing & menu thing

*/