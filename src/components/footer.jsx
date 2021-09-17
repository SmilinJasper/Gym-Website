import React, { Component } from 'react';
import './footer.css'
import FooterConnectWithUsSection from './footerConnectWithUsSection';
import FooterContactUsSection from './footerContactUsSection';

class Footer extends Component {
    render() { 
        return (
        
        <footer>
            <FooterContactUsSection />
            <FooterConnectWithUsSection />
        </footer>
        
        );
    }
}
 
export default Footer;