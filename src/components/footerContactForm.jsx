import React, { Component } from 'react';
import './footerContactForm.css'

class FooterContactForm extends Component {
    render() { 
        return (

        <React.Fragment>

            <form action='POST' id='contact-form' class='footer-contact-form'>

            <div class='field'>
                <label for='from-name'>Name</label>
                <input id='from-name' name='from-name' type='text' />
            </div>
            
            <div class='field'>
                <label for='reply-to-email'>Email</label>
                <input id='reply-to-email' name='reply-to-email' type='email' />
            </div>
            
            <div class='field'>
                <label for='message'>Message</label>
                <textarea id='message' name='message' rows='3'></textarea>
            </div>

            <input type='submit' id='send-message-button' class='button__send-message' value='Send Message' />

        </form>
    
    </React.Fragment>);

    }
}
 
export default FooterContactForm;