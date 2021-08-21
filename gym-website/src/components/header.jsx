import React, { Component } from 'react'

class Header extends Component {
    state = {  }

    render() { 
        return ( <React.Fragment>

<header className="nav-bar-header">

    <div className="head">
    <img className="company-logo" src="assets/images/logo.png" alt="ESH Fitness Gym, Sulur, Coimbatore, Tamilnadu, India Logo" />
    <label for="nav-toggle" className="fas fa-bars fa-2x"></label>
    </div>

    <input type="checkbox" id="nav-toggle" class="nav-toggle" />

    <nav role="navigation">
        <ul className="nav-bar">
            <li>
                <a href="index.html">Home</a>
            </li>   
            <li>
                <a href="#">Locations</a>
            </li>
            <li>
                <a href="#">Our Trainers</a>
            </li>
            <li>
                <a href="#">Shop</a>
            </li>
            <li>
                <a href="#">Contact Us</a>
            </li>
        </ul>
    </nav>

</header>

        </React.Fragment> );
    }
}
 
export default Header;