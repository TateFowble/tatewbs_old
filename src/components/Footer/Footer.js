import React from 'react';

import './Footer.scss';

import instagram from '../../assets/icons/instagram.svg';
import github from '../../assets/icons/github.svg';
import discord from '../../assets/icons/discord.svg';
import twitch from '../../assets/icons/twitch.svg';

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
                    logo
                </div>
                <div id="footer-social-media" className="text-white">
                    <img src={ github  } alt="..." />
                    <img src={ discord } alt="..." />
                    <img src={ twitch  } alt="..." />
                    <img src={ instagram } alt="..." />
                </div>
            </div>
        </footer>
    )
}


export default Footer;