import React, { useEffect } from 'react';
import Anime from 'animejs';



const AnimeText = (props) => {

let text = props.text;
let theClass = props.className;

useEffect(()=> {
    Anime({
        targets: '.animated-text',
        translateY: 30,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutElastic(1,1)',
        duration: 1000,
        autoplay: true
    });
});

    return (
            <p className={`animated-text ${theClass}`}>
                {text}
            </p>
    )
}


export default AnimeText;