import React from 'react';
import './navigation.scss';

import { Link } from 'react-router-dom';


function Navigation () {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark">
                <Link class="navbar-brand" to="/">Home</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="prices">Prices</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/examples">Examples</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;