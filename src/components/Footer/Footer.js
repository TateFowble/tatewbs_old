import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

import instagram from '../../assets/icons/instagram.svg';
import github from '../../assets/icons/github.svg';
import discord from '../../assets/icons/discord.svg';
import twitch from '../../assets/icons/twitch.svg';
import youtube from '../../assets/icons/youtube.svg';
import logo from '../../assets/images/logo.svg';


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
                <div className="text-white">
                        <p id="copyright-symbol">&#169; TateWBS</p>
                        <p id="copyright-undertext">A tech company</p>
                </div>
                <div className="text-white">
                    <img id="footer-logo" className="image" src={logo} alt="...logo..."/>
                </div>
                <div id="footer-social-media" className="text-white">
                    <a href="https://github.com/TateFowble" target="_blank"><img src={ github  } alt="..." /></a>
                    <a href="" target="_blank"><img src={discord} alt="..." /></a>
                    <a href="https://www.youtube.com/channel/UCdO6661qtdVWSjAj4NcjbRw" target="_blank"><img src={ youtube } alt="..." /></a>
                    <a href="" target="_blank"><img src={ twitch  } alt="..." /></a>
                    <a href="https://www.instagram.com/tatefywb" target="_blank"><img src={ instagram } alt="..." /></a>
                </div>
            </div>
        </footer>
    )
}


export default Footer;