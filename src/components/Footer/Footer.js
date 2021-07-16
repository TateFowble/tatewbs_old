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
                    <img id="footer-logo" className="image-fluid" src={logo} alt="...logo..."/>
                </div>
                <div id="footer-social-media" className="text-white">
                    <a href="https://github.com/TateFowble" target="_blank"><img src={github} alt="..." className="touchable-link" /></a>
                    <a href="http://discord.tatewbs.com"    target="_blank"><img src={discord} alt="..." className="touchable-link" /></a>
                    <a href="http://youtube.tatewbs.com"    target="_blank"><img src={youtube} alt="..." className="touchable-link" /></a>
                    <a href="http://twitch.tatewbs.com"     target="_blank"><img src={twitch} alt="..." className="touchable-link" /></a>
                    <a href="http://instagram.tatewbs.com"  target="_blank"><img src={instagram} alt="..." className="touchable-link" /></a>
                </div>
            </div>
        </footer>
    )
}


export default Footer;