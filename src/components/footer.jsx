import React, { Component } from 'react';
import FooterBottomCopyrightSection from './footerBottomCopyrightSection';
import './footer.css'
import FooterConnectWithUsSection from './footerConnectWithUsSection';
import FooterContactUsSection from './footerContactUsSection';

class Footer extends Component {
    render() { 
        return (
        
        <footer>
            <FooterContactUsSection />
            <FooterConnectWithUsSection />
            <FooterBottomCopyrightSection />
        </footer>
        
        );
    }
}
 
export default Footer;