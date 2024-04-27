import React from 'react';
import './Pricing.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import the Link component

const Pricing = () => {
  return (
    <div>
      <div><a href="/PersonalTrainer" class="back-button">Back</a>
    </div>
    <div className="pricing-container">
      <h1>Our Pricing Plans</h1>
      <p>Choose the plan that best fits your fitness goals.</p>

      <div className="pricing-cards">
        {/* Pricing Card 1 (Basic) */}
        <div className="pricing-card">
          <h2>Basic</h2>
          <p className="price">$19/month</p>
          <ul>
            <li>Access to workout programs</li>
            <li>Basic meal plans</li>
            <li>Community forum access</li>
          </ul>
          <Link to="/signup" className="btn">Sign Up</Link>
        </div>

        {/* Pricing Card 2 (Standard) */}
        <div className="pricing-card">
          <h2>Standard (Most Popular)</h2>
          <p className="price">$29/month</p>
          <ul>
            <li>All Basic features</li>
            <li>Personalized workout plans</li>
            <li>Detailed meal plans</li>
            <li>Progress tracking tools</li>
          </ul>
          <Link to="/signup" className="btn">Sign Up</Link>
        </div>

        {/* Pricing Card 3 (Premium) */}
        <div className="pricing-card">
          <h2>Premium</h2>
          <p className="price">$49/month</p>
          <ul>
            <li>All Standard features</li>
            <li>Dedicated personal trainer</li>
            <li>Live chat support</li>
            <li>Monthly progress consultations</li>
          </ul>
          <Link to="/signup" className="btn">Sign Up</Link>
        </div>
      </div>

      <p className="disclaimer">
        All plans include a 7-day free trial. Cancel anytime.
      </p>
    </div>
    </div>
  );
};

export default Pricing;
