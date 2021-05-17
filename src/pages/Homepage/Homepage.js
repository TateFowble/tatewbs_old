import React, { useEffect } from 'react';
import './Homepage.scss';

// Libraries
import anime from 'animejs';

// images
import reactjs from '../../assets/images/reactjs.png';
import angularjs from '../../assets/images/angularjs.png';
import nodejs from '../../assets/images/nodejs.png';
import mysql from '../../assets/images/mysql.png';
import mongodb from '../../assets/images/mongodb.png';
import python from '../../assets/images/python.png';


// components
import AnimeText from '../../components/AnimeText/AnimeText';
import InfoBox from '../../components/InfoBox/InfoBox';


// bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Homepage() {

    useEffect(() => { });

    return (
        <div id="homepage">
            <div id="homepage-section1" className="fluid-container d-flex align-items-center justify-content-center shadow">
                <p id="homepage-section1-text" className="text-center text-white text">
                    <AnimeText text={"All you need for a successful website"} className={''} />
                </p>
            </div>
            <hr className="mt-5" />
            <div className="vertical-spacing"></div>
            <div id="homepage-section2" className="fluid-container">
                <InfoBox
                    header={
                        "What I work with"
                    }
                    text={
                        "I work with most NodeJS applications, but I primarily work with ReactJS and AngularJS for web development"
                    }
                    borderColor={
                        "#3f9634"
                    }
                    buttonText={
                        "Learn More"
                    }
                    buttonLink={
                        '/about'
                    }
                />
            </div>

            <div className="vertical-spacing"></div>

            <div id="homepage-section3" className="container-md">
                <h3 id="frameworksIuse" className="text-center no-wrap pb-3">Framesworks I use</h3>
                <div className="d-flex justify-content-center">
                    <div class="d-flex justify-content-around flex-md-row flex-column">
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src={reactjs} alt="..." height="300" width="300" className="touchable-link" /></a>
                        <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src={nodejs} alt="..." height="300" width="300" className="touchable-link" /></a>
                        <a href="https://angularjs.org/" target="_blank" rel="noreferrer"><img src={angularjs} alt="..." height="300" width="300" className="touchable-link" /></a>
                    </div>
                </div>
            </div>

            <div className="vertical-spacing"></div>
            
            <div id="homepage-section4">
                <InfoBox
                    header={
                        "Needed a website? Join the discord and send a DM"
                    }
                    text={
                        "Join the Discord by clicking on the connect button below on the discord widget"
                    }
                    borderColor={
                        "#7fb3e4"
                    }
                    buttonText={
                        "Learn More"
                    }
                    buttonLink={
                        'http://discord.tatewbs.com'
                    }
                />
            </div>
            <div id="homepage-section5" className="fluid-container">
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


*/