import React from 'react';
import './navigation.scss';



function Navigation () {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark">
                <a class="navbar-brand" href="#">Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Prices</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Examples</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;