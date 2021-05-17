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

    useEffect(() => {});

    return (
        <div id="homepage">
            <div id="homepage-section1" className="fluid-container d-flex align-items-center justify-content-center shadow">
                <p id="homepage-section1-text" className="text-center text-white text">
                    <AnimeText text={"All you need for a successful website"} className={''} />
                </p>
            </div>
            <hr className="mt-5" />
            <div id="homepage-section2" className="mt-5 mb-5 container-md">
                <div className="d-flex justify-content-center">
                    <div class="d-flex justify-content-around flex-md-row flex-column">
                        <a href="https://reactjs.org/" target="_blank"><img src={ reactjs  }  alt="..." height="300" width="300" className="touchable-link" /></a>
                        <a href="https://nodejs.org/en/" target="_blank"><img src={nodejs} alt="..." height="300" width="300" className="touchable-link" /></a>
                        <a href="https://angularjs.org/" target="_blank"><img src={angularjs} alt="..." height="300" width="300" className="touchable-link" /></a>
                    </div>
                </div>
            </div>
            <div className="vertical-spacing"></div>
            <div id="homepage-section3">

                <InfoBox
                    header={
                        "What I work with"
                    }
                    text={
                        "I work with most NodeJS applications, but I primarily work with ReactJS and AngularJS for web development"
                    }
                    borderColor={
                        "purple"
                    }
                />
            </div>
            <div id="homepage-section4">

            </div>
            <div id="homepage-section5">

            </div>
        </div>
    )
}

export default Homepage;


/*

Contact info on homepage


*/