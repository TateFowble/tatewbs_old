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


function Homepage() {

    useEffect(() => {


    });
    return (
        <div id="homepage">
            <div id="homepage-section1" className="fluid-container d-flex align-items-center justify-content-center shadow">
                <p id="homepage-section1-text" className="text-center text-white text">
                    {/* <AnimeText text={"Follow the social"} className={''} /> */}
                </p>
            </div>
            <hr className="mt-5" />
            <div id="homepage-section2" className="mt-5 mb-5 container-md">
                {/* <div className="d-flex justify-content-center"> */}
                    <div class="d-flex justify-content-around flex-md-row flex-column">
                        <img src={reactjs} alt="..." height="300" width="300" />
                        <img src={nodejs} alt="..." height="300" width="300" />
                        <img src={angularjs} alt="..." height="300" width="300" />
                    </div>
                {/* </div> */}
            </div>
            <div id="homepage-section3">
                <InfoBox
                    header={
                        "I do things"
                    }
                    text={
                        "Yup I do do things"
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