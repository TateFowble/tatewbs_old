import React from 'react';
import './Navigation.scss';

import { Link } from 'react-router-dom';

// import logo from '../../assets/images/logo21.png';

import Dropdown from 'react-bootstrap/Dropdown';

function Navigation() {
    return (
            <nav className="navbar navbar-expand-md navbar-dark text-center" sticky="top">
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
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown">
                                    Social
                            </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="http://twitch.tatewbs.com">Twitch</Dropdown.Item>
                                    <Dropdown.Item href="http://youtube.tatewbs.com">YouTube</Dropdown.Item>
                                    <Dropdown.Item href="http://instagram.tatewbs.com">Instagram</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navigation;