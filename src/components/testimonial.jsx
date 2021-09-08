import React, { Component } from 'react'

class Testimonial extends Component {

    state = {  }

    render() { 
        return (

        <article class="testimonial">

            <blockquote>
                <p>
                    {this.props.testimonial}
                </p>
            </blockquote>

            <cite>
                {this.props.client}
            </cite>
            
        </article>

        );
                
    }

}
 
export default Testimonial;