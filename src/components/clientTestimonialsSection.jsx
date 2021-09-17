import React, { Component } from 'react';
import Testimonial from './testimonial';
import './clientTestimonialSection.css';

class ClientTestimonialSection extends Component {
    state = {  }
    render() { 
        return ( 

            <section className='home-testimonials'>

            <header>
                <h1 className='title'>WHAT<br />
                    CLIENTS SAY
                </h1>
            </header>

            <div className='container'>

                <Testimonial 
                testimonial='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis itaque aliquid voluptatum minus atque fugiat ad suscipit! Necessitatibus accusamus consequuntur quod rerum.'
                client='John Doe'
                />

                <Testimonial 
                testimonial='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis itaque aliquid voluptatum minus atque fugiat ad suscipit! Necessitatibus accusamus consequuntur quod rerum.'
                client='John Doe'
                />

                <Testimonial 
                testimonial='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis itaque aliquid voluptatum minus atque fugiat ad suscipit! Necessitatibus accusamus consequuntur quod rerum.'
                client='John Doe'
                />
                
            </div>

        </section>

         );
    }
}
 
export default ClientTestimonialSection;