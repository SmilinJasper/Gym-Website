import React, { Component } from 'react'
import './header.css'

class Header extends Component {
    state = {  }

    render() { 
        return ( <React.Fragment>

<header className="nav-bar-header">

    <div className="head">
    <img className="company-logo" src="/images/logo.png" alt="ESH Fitness Gym, Sulur, Coimbatore, Tamilnadu, India Logo" />
    <label for="nav-toggle" className="fas fa-bars fa-2x"></label>
    </div>

    <input type="checkbox" id="nav-toggle" className="nav-toggle" />

    <nav role="navigation">
        <ul className="nav-bar">
            <li>
                <a href="index.html">Home</a>
            </li>   
            <li>
                <a href="index.html">Locations</a>
            </li>
            <li>
                <a href="index.html">Our Trainers</a>
            </li>
            <li>
                <a href="index.html">Shop</a>
            </li>
            <li>
                <a href="index.html">Contact Us</a>
            </li>
        </ul>
    </nav>

</header>

        </React.Fragment> );
    }
}

window.onload = () => {
    
    let lastScrollTopPosition = 0;

    window.addEventListener("scroll", () => {

        const navBarHeader = document.querySelector(".nav-bar-header");

        let scrollTopPosition = window.pageYOffset || document.documentElement.scrollTopPosition;

        if (scrollTopPosition < lastScrollTopPosition || !scrollTopPosition) {
            if (navBarHeader.classList.contains("header--scrolled-down")) return navBarHeader.classList.remove("header--scrolled-down");
        } else {
            if (!navBarHeader.classList.contains("header--scrolled-down")) return navBarHeader.classList.add("header--scrolled-down");
        }

    lastScrollTopPosition = scrollTopPosition === 0 ? 0 : scrollTopPosition;
    });
}

export default Header;