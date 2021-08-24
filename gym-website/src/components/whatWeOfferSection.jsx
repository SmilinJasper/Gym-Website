import React, { Component } from 'react';
import './whatWeOfferSection.css';

class WhatWeOfferSection extends Component {
    state = {  }
    render() { 
        return ( <>

        <section className="home-perks">

            <header>
                <h1>WHAT WE <br />
                    OFFER
                </h1>
            </header>

            <div className="container">

                <figure className="perk-item">
                    <img className="perk-item-image perk-item-image--big" src='/images/personal_training_icon.png' alt="Personal Training in Sulur, Coimbatore, Tamilnadu, India" />
                    <figcaption className="perk-description">
                        <h3>PERSONAL TRAINING</h3>
                        <p>Our training programs are designed specifically for each individual client to help them achive their goals faster.</p>
                    </figcaption>
                </figure>

                <figure className="perk-item">
                    <img className="perk-item-image" src="/images/community-man.svg" alt="Group Fitness Classes in Sulur, Coimbatore, Tamilnadu, India" />
                    <figcaption className="perk-description">
                        <h3>
                            GROUP FITNESS CLASSES
                        </h3>
                        <p>
                            Our group fitness classes offer a blend of both resistance based and cardio training for best overall health.
                        </p>
                    </figcaption>
                </figure>

                <figure className="perk-item">
                    <img className="perk-item-image" src="/images/24-7-icon.png" alt="24/7 Gym in Sulur, Coimbatore, Tamilnadu, India" />
                    <figcaption className="perk-description">
                        <h3>
                            24/7 SERVICE
                        </h3>
                        <p>
                            All our gyms are open 24/7 throughout the year so you can get in your workouts no matter what kind of a schedule you are on.
                        </p>
                    </figcaption>
                </figure>

                <figure className="perk-item">
                    <img className="perk-item-image" src="/images/nutritious-food.png" alt="Nutritional Plans Offered in Sulur, Coimbatore, Tamilnadu, India" />
                    <figcaption className="perk-description">
                        <h3>
                            NUTRITIONAL PLANS
                        </h3>
                        <p>
                            Just simple low-calorie dense, high volume deliciousness that will keep you energized and help you lose fat and build muscle.
                        </p>
                    </figcaption>
                </figure>

            </div>

        </section>

        </> );
    }
}
 
export default WhatWeOfferSection;