import React, { useEffect } from 'react';
import './Homepage.scss';

// Libraries
import anime from 'animejs';
import ReactRotatingText from 'react-rotating-text';

// images
import reactjs from '../../assets/images/reactjs.png';
import angularjs from '../../assets/images/angularjs.png';
import nodejs from '../../assets/images/nodejs.png';
import mysql from '../../assets/images/mysql.png';
import mongodb from '../../assets/images/mongodb.png';
import python from '../../assets/images/python.png';


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
            <div id="homepage-section1" className="fluid-container d-flex align-items-center justify-content-center shadow">
                <p className="text-white fs-1">Have <ReactRotatingText items={['an amazing site', 'an app customers will love', 'a site made for you']} /></p>
            </div>
            <div>
                
            </div>
            <div>
                <InfoBox
                    header={
                        "Need support or have something to offer? Join the discord and join the growing community!"
                    }
                    text={
                        "Join the Discord by clicking on the connect button below on the discord widget"
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