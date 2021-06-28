import React from 'react';
import './Navigation.scss';

import { Link } from 'react-router-dom';

// import logo from '../../assets/images/logo21.png';

import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
    return (
            <nav className="navbar navbar-expand-md navbar-dark text-center">
                <Link className="navbar-brand" to="/">TateWBS</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li class="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://discord.tatewbs.com">Discord</a>
                        </li>
                        <li className="nav-item">
                        <NavDropdown title="Links" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="http://youtube.tatewbs.com" target="_blank">YouTube</NavDropdown.Item>
                            <NavDropdown.Item href="http://instagram.tatewbs.com" target="_blank">Instagram</NavDropdown.Item>
                            <NavDropdown.Item href="http://twitch.tatewbs.com" target="_blank">Twitch</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                        </NavDropdown>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navigation;