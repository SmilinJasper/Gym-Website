import React, { Component } from 'react';
import './footerAddressSection.css';

class FooterAddressSection extends Component {
    render() { 
        return (

            <section class="footer-address-section">

                <address>

                    <div class="address-info">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <p>
                        Near Kannan Dept. Stores,
                        <br /> 
                        2nd Floor Akil Complex,
                        <br /> 
                        ESH Fitness, Sulur,
                        <br /> 
                        Coimbatore - 641402
                    </p>
                </div>

                <div class="address-info">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <a href='tel:9875661852'>
                    9875661852
                    </a>
                </div>

                <div class="address-info">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <a href='mailto:contact@eshfitness.com'>
                    contact@eshfitness.com
                    </a>
                </div>

            </address>

        </section>
    
    );
    }
}
 
export default FooterAddressSection;