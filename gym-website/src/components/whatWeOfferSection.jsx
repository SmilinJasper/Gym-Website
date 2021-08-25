import React, { Component } from 'react';
import PerkItem from './perkItem';
import './whatWeOfferSection.css';

class WhatWeOfferSection extends Component {
    state = {  }
    render() { 
        return ( <>

        <section className='home-perks'>

            <header>
                <h1>WHAT WE <br />
                    OFFER
                </h1>
            </header>

            <div className='container'>

                <PerkItem 
                    imageSrc='/images/personal_training_icon.png' 
                    imageAlt='Personal Training in Sulur, Coimbatore, Tamilnadu, India'
                    imageSize='perk-item-image--big'
                    title='PERSONAL TRAINING'
                    description ='Our training programs are designed specifically for each individual client to help them achive their goals faster.'
                />

                <PerkItem 
                    imageSrc='/images/community-man.svg' 
                    imageAlt='Group Fitness Classes in Sulur, Coimbatore, Tamilnadu, India' 
                    title='GROUP FITNESS CLASSES'
                    description ='Our group fitness classes offer a blend of both resistance based and cardio training for best overall health.'
                />

                <PerkItem 
                    imageSrc='/images/24-7-icon.png' 
                    imageAlt='24/7 Gym in Sulur, Coimbatore, Tamilnadu, India' 
                    title='24/7 SERVICE'
                    description ='All our gyms are open 24/7 throughout the year so you can get in your workouts no matter what kind of a schedule you are on.'
                />

                <PerkItem 
                    imageSrc='/images/nutritious-food.png' 
                    imageAlt='Nutritional Plans Offered in Sulur, Coimbatore, Tamilnadu, India' 
                    title='NUTRITIONAL PLANS'
                    description ='Just simple low-calorie dense, high volume deliciousness that will keep you energized and help you lose fat and build muscle.'
                />

            </div>

        </section>

        </> );
    }
}
 
export default WhatWeOfferSection;