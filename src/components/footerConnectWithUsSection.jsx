import React, { Component } from 'react'
import './footerConnectWithUsSection.css'

class FooterConnectWithUsSection extends Component {

    render() { 
        return (

            <section className='footer-connect-with-us-section'>
            <h2>Connect With Us</h2>

            <div className='social-media-links'>
                <ul>
                    <li>
                        <a href='https://www.instagram.com/eshfitnessone/' target='_blank' aria-label='ESH Fitness Instagram'>
                            <i className='fa fa-instagram social-media-icon'></i>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.facebook.com/pages/category/Product-Service/ESH-Fitness-New-Arnold-Gym-Sulur-104493178377200/' target='_blank' aria-label='ESH Fitness Facebook'>
                            <i className='fa fa-facebook social-media-icon'></i>
                        </a>
                    </li>

                    <li>
                        <a href='https://twitter.com/home' target='_blank' aria-label='ESH Fitness Twitter'>
                            <i className='fa fa-twitter social-media-icon'></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>

        );
    }
}
 
export default FooterConnectWithUsSection;