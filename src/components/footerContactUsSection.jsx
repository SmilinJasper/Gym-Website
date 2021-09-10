import React, { Component } from 'react'
import FooterContactForm from './footerContactForm';
import './footerContactUsSection.css'

class FooterContactUsSection extends Component {
    render() { 
        return (
        
        <React.Fragment>
            
            <section class="footer-contact-section">
            
            <h2>
                Contact Us
            </h2>

            <FooterContactForm />

            </section>
        
        </React.Fragment>);
    
}
}
 
export default FooterContactUsSection;