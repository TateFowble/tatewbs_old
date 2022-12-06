import React from 'react';


import '../styles/main.scss';

import discord from '../assets/images/discord.jpg'



const InteractiveImages = () => {

    const images = document.getElementsByClassName('image');

    let globalIndex = 0,
        last = { x: 0, y: 0 };


    const activate = (image, x, y) => {
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;

        image.dataset.status = 'active';

        last = { x, y };

    }

    const distanceFromLast = (x, y) => {
        return Math.hypot(x - last.x, y - last.y);
    }

    window.onmousemove = e => {
        if (distanceFromLast(e.clientX, e.clientY) > 100) {

            const lead = images[globalIndex % images.length],
                tail = images[(globalIndex - 5) % images.length];
            activate(lead, e.clientX, e.clientY);

            globalIndex++;
        }
    }

    const imf = [
        'https://api.menu.tatewbs.com/images/1669434365796-1400740915434.webp',
        'https://api.menu.tatewbs.com/images/1669434533464-1533665470464.webp',
        'https://api.menu.tatewbs.com/images/1669434615914-1461594171836.webp',
        'https://api.menu.tatewbs.com/images/1669434831826-1400611025252.webp',
        'https://api.menu.tatewbs.com/images/1669435006786-1645211589997.webp',

    ];

    return (
        <div id='interactiveimages'>
            {
                imf.map((obj, i) => <img className='image' data-index={i} data-status='inactive' src={obj} />)
            }
        </div>
    )
}


export default InteractiveImages;