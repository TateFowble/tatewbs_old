import React, { useEffect } from 'react';
import Anime from 'animejs';



const AnimeText = (props) => {

let text = props.text;
let theClass = props.className;

useEffect(()=> {
    Anime({
        targets: '.animated-text',
        translateY: 50,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutElastic(0.7,0.7)',
        duration: 2000,
        autoplay: true
    });
});

    return (
            <strong>
                <p className={`animated-text ${theClass}`}>
                    {text}
                </p>
            </strong>
    )
}


export default AnimeText;