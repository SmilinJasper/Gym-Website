import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './header.css'

class Header extends Component {
    state = {  }

    render() { 
        return ( 

            <Router>
                
                <header className='nav-bar-header'>

                    <div className='head'>
                        <img className='company-logo' src='/images/logo.png' alt='ESH Fitness Gym, Sulur, Coimbatore, Tamilnadu, India Logo' />
                            <ul className='nav-bar'>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='index.html'>Locations</NavLink></li> 
                            <li><NavLink to='index.html'>Our Trainers</NavLink></li> 
                            <li><NavLink to='index.html'>Shop</NavLink></li> 
                            <li><NavLink to='index.html'>Contact Us</NavLink></li>
                            </ul> 
                        <label for='nav-toggle' className='fas fa-bars fa-2x'></label>
                    </div>

                    <input type='checkbox' id='nav-toggle' className='nav-toggle' />

                    <nav>
                        <ul className='nav-bar-mobile'>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='index.html'>Locations</NavLink></li> 
                            <li><NavLink to='index.html'>Our Trainers</NavLink></li> 
                            <li><NavLink to='index.html'>Shop</NavLink></li> 
                            <li><NavLink to='index.html'>Contact Us</NavLink></li> 
                        </ul>
                    </nav>

                </header>

            </Router>

        );
    }
}

window.onload = () => {
    
    let lastScrollTopPosition = 0;
    const navBarHeader = document.querySelector('.nav-bar-header');

    function removeNavBarHeader(){
        navBarHeader.classList.add('header--scrolled-down');
    }

    function addNavBarHeader(){
        navBarHeader.classList.remove('header--scrolled-down');
    }

    window.addEventListener('scroll', () => {

        const navBarHeaderIsRetracted = navBarHeader.classList.contains('header--scrolled-down');

        let scrollTopPosition = window.pageYOffset || document.documentElement.scrollTopPosition;

        if (scrollTopPosition > lastScrollTopPosition) {
            if (!navBarHeaderIsRetracted) return removeNavBarHeader();
        } else {
            if (navBarHeaderIsRetracted) return addNavBarHeader();
        }

    lastScrollTopPosition = scrollTopPosition === 0 ? 0 : scrollTopPosition;
    });
}

export default Header;