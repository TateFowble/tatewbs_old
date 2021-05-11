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

function Homepage() {
    useEffect(() => {


    })
    return (
        <div id="homepage">
            <div id="homepage-section1" className="fluid-container d-flex align-items-center justify-content-center shadow">
                <p id="homepage-section1-text" className="text-white text">
                    <AnimeText text={"Hello! Welcome to my site!"} className={"text-center"} />
                </p>
            </div>
            <div id="homepage-section2" className="mt-5 fluid-container">
                <div className="container homepage-section-light">
                    <h2>
                       Who am I? 
                    </h2>
                    <hr className="mt-4 mb-5" />
                    <p className="text-left text-wrap fs-4 text-indent">
                        My name is Tate Fowble and I am certified in <span className="text-success">Full Stack Software Development</span>!
                        I started programming and learning different uses for computers in 2014.
                        In 2015, I learned <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">HTML5</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS3</a> as my introduction for web development.
                        Following that I started with the fundamentals of programming in 2016, with languages such as <a href="https://developer.mozilla.org/en-US/docs/Web/javascript" target="_blank">Javascript</a> and <a href="https://www.python.org/" target="_blank">Python</a>.
                        Next I started using libraries for both languages to make different programs for individuals and businesses.
                        I am currently working on making websites for people and businesses
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;