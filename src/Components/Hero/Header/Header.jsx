import React from 'react';
import './Header.css';
import Logo from '../../../assets/intelligainslogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />

      <ul className="header-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Plans">Plans</Link></li>
        <li><Link to="/reasons">Reasons</Link></li>
        <li><Link to="/PersonalTrainer">Personal Trainer</Link></li>
      </ul>
    </div>
  );
};

export default Header;
