import React from 'react';
import './Navigation.scss';

import { Link } from 'react-router-dom';


import Dropdown from 'react-bootstrap/Dropdown';

function Navigation() {
    return (
        <div>
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
                        <li className="nav-item">
                            <Link className="nav-link" to="/discord">Discord</Link>
                        </li>
                        <li className="nav-item">
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    Social
                            </Dropdown.Toggle>
                                <Dropdown.Menu>
                                   <Dropdown.Item><a href="http://twitch.tatewbs.com" className="text-decoration-none text-dark">Twitch</a></Dropdown.Item>
                                    <Dropdown.Item href="/youtube" target="_blank" className="text-decoration-none text-dark">YouTube</Dropdown.Item>
                                    <Dropdown.Item as={Link} href="/instagram" className="text-decoration-none text-dark">Instagram</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;