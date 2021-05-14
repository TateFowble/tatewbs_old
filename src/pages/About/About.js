import { React } from 'react';


const About = () => {
    return (
        <div className="container homepage-section-light mt-5 mb-5">
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
    )
}

export default About;