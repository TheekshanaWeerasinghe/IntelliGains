import React from 'react';
import './PersonalTrainer.css'
import { Link } from 'react-router-dom';

const PersonalTrainer = () => {
  return (
    <div>
      <div><a href="/" class="back-button">Back</a>
    </div>
    <div className="personal-trainer">
      <h1>Unlock Your Potential with a Personal Trainer</h1>
      <p>
        Elevate your fitness journey with personalized guidance and support from a
        dedicated IntelliGains personal trainer. Our trainers will create a custom
        plan to fit your goals and needs, ensuring you see results and stay motivated.
      </p>
      <h2>Subscription Required</h2>
      <p>
        To access personalized training, you'll need to subscribe to one of our
        premium membership plans. Subscriptions offer a range of benefits beyond
        just personal training, including access to exclusive programs, nutrition
        guides, and more.
      </p>
      <p>
        <Link className='link' to="/Pricing">Learn More About Subscriptions</Link>
      </p>
    </div>
    </div>
  );
};

export default PersonalTrainer;
