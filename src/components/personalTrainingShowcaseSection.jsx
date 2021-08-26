import React, { Component } from 'react';
import ShowcaseImage from './showcaseImage';

class PersonalTrainingShowcaseSection extends Component {

    state = {  }
    
    render() { 
        return ( 
            <section>

               <ShowcaseImage imageSource='/images/personal_trainer_training_client.jpg'>
               </ShowcaseImage>

            </section>
         );
    }

}
 
export default PersonalTrainingShowcaseSection;