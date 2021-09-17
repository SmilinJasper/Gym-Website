import React, { Component } from 'react'
import FooterAddressSection from './footerAddressSection';
import FooterContactForm from './footerContactForm';
import './footerContactUsSection.css'

class FooterContactUsSection extends Component {
    render() { 
        return (
        
        <React.Fragment>
            
            <section className='footer-contact-us-section'>
            
            <h2>
                Contact Us
            </h2>

            <FooterContactForm />
            <FooterAddressSection />

            </section>
        
        </React.Fragment>);
    
}
}
 
export default FooterContactUsSection;