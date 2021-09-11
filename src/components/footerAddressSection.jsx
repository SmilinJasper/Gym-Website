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
                    <p>
                        9875661852
                    </p>
                </div>

                <div class="address-info">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <p>
                       contact@eshfitness.com
                    </p>
                </div>

            </address>

        </section>
    
    );
    }
}
 
export default FooterAddressSection;