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
import Box from '../../components/Box/box';


function Homepage() {
    useEffect(() => {
        anime({
            targets: '.homepage-section-one-images',
            translateY: 15,
            direction: 'alternate',
            loop: true,
            easing: 'easeInElastic(1,1) easeOutElastic(1,1)',
            duration: 1000,
            autoplay: true
        });

    })
    return (
        <div id="homepage" className="fluid-container">
            <div id="homepage-section1" className="fluid-container">
                <div className="d-flex justify-content-around">
                    <p className="text-white text mt-5">Have a beautiful site!</p>
                </div>
            </div>
            <div id="homepage-section2" className="d-flex">
                <div className="container">
                    <div className="d-flex justify-content-around flex-row">
                        <div>
                            <a href="https://reactjs.org" target="_blank">
                                <img src={reactjs} alt="ReactJS" className="image homepage-section-one-images touchable-link" />
                            </a>
                            <a href="https://nodejs.org" target="_blank">
                                <img src={nodejs} alt="NodeJS" className="image homepage-section-one-images touchable-link" />
                        </a>
                            <a href="https://angularjs.org" target="_blank">
                                <img src={angularjs} alt="AngularJS" className="image homepage-section-one-images touchable-link" />
                        </a>
                    </div>
                </div>
                {/* <div>
                        <img src={mysql} alt="MySQL" className="image" />
                        <img src={mongodb} alt="MongoDB" className="image" />
                        <img src={python} alt="Python" className="image" />
                    </div> */}
            </div>
        </div>
        </div >
    )
}

export default Homepage;