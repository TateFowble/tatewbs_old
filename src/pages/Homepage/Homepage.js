import React from 'react';
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
    return (
        <div id="homepage" className="fluid-container">
            <div id="homepage-section1" className="fluid-container">
                <div className="d-flex justify-content-around">
                    <p className="text-white">Have a beautiful site!</p>
                </div>
            </div>
            <div id="homepage-section2" className="d-flex">
                <div className="container">
                    <h1 className="text">Oh hey there</h1>
                    <p className="text">(◕ᴥ◕ʋ)</p>
                </div>
                <div className="d-flex justify-content-around flex-column">
                    <div>
                        <img src={reactjs} alt="ReactJS" className="image" />
                        <img src={angularjs} alt="AngularJS" className="image" />
                        <img src={nodejs} alt="NodeJS" className="image" />
                    </div>
                    {/* <div>
                        <img src={mysql} alt="MySQL" className="image" />
                        <img src={mongodb} alt="MongoDB" className="image" />
                        <img src={python} alt="Python" className="image" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Homepage;