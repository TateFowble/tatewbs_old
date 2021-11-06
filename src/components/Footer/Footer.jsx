import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

import instagram from '../../assets/icons/instagram.svg';
import github from '../../assets/icons/github.svg';
import discord from '../../assets/icons/discord.svg';
import twitch from '../../assets/icons/twitch.svg';
import youtube from '../../assets/icons/youtube.svg';
// import logo1 from '../../assets/images/logo.svg';
// import logo from '../../assets/images/tatewbs-logo.png';
import logo from '../../assets/images/footer/logo.png';

function Footer() {

    let icons = [
        {
            image: github,
            url: "https://github.com/TateFowble"
        },
        {
            image: discord,
            url: "http://discord.tatewbs.com"
        },
        {
            image: youtube,
            url: "http://youtube.tatewbs.com"
        },
        {
            image: twitch,
            url: "http://twitch.tatewbs.com"
        },
        {
            image: instagram,
            url: "http://instagram.tatewbs.com"
        },
    ];


    const iconFunction = (image, url) => {
        return (
            <a href={url} target="_blank" rel="noreferrer">
                <img src={image} alt="..." className="touchable-link" />
            </a >
        )
    }


    return (
        <footer>
            <div className="
            d-flex
             flex-column-reverse
              align-items-center
               justify-content-center
                flex-md-row
                 justify-content-md-around
                 ">
                {/* <div id="footer-social-media" className="text-white">
                    <a href="https://github.com/TateFowble" target="_blank"><img src={github} alt="..." className="touchable-link" /></a>
                    <a href="http://discord.tatewbs.com" target="_blank"><img src={discord} alt="..." className="touchable-link" /></a>
                    <a href="http://youtube.tatewbs.com" target="_blank"><img src={youtube} alt="..." className="touchable-link" /></a>
                    <a href="http://twitch.tatewbs.com" target="_blank"><img src={twitch} alt="..." className="touchable-link" /></a>
                    <a href="http://instagram.tatewbs.com" target="_blank"><img src={instagram} alt="..." className="touchable-link" /></a>
                </div> */}
                <div className="text-white">
                    <Link to="/"><img id="footer-logo" className="image-fluid" src={logo} alt="...logo..." /></Link>
                </div>
                <div id="footer-social-media" className="text-white">
                    {
                        icons.map(i => {
                            let image = i.image;
                            let url = i.url;
                            return iconFunction(image, url);
                        })
                    }
                </div>
            </div>
        </footer>
    )
}


export default Footer;