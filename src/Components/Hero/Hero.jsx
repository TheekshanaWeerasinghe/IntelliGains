import React from 'react';
import './Hero.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import women from '../../assets/women_gym.png';
import men from '../../assets/men_gym.png';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import Questionnaire from '../Questionnaire/Questionnaire'; // Import Questionnaire component

const Hero = () => {
  const navigate = useNavigate(); // Get the navigate function

  const handleGeneratePlansClick = () => {
    navigate('/Questionnaire'); // Redirect to the questionnaire page
  };

  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        {/* Heading */}
        <div className="Main-text">
          <div>
            <span className="Stroke-text">IntelliGains</span>
          </div>
          <div>
            <span>Get Fit, Get Healthy</span>
          </div>
          <div>
            <span>
              Let's work together to unlock your full potential and create the
              body you desire.
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span>+50</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+10</span>
            <span>Members</span>
          </div>
          <div>
            <span>+30</span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/* Header Buttons */}
        <div className="header-buttons">
          <button className="btn" onClick={handleGeneratePlansClick}>
            Generate Plans
          </button>
        </div>

        <Footer />
      </div>
      <div className="right-h">
        <Link to="/Register">
          <button className="mbtn">Join Now</button>
        </Link>

        {/* Images */}
        <img src={men} alt="" className="men-image" />
      </div>
    </div>
  );
};

export default Hero;
