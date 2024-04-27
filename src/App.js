import React from "react";
import "./App.css"; // Import CSS for styling

// Import Components
import Hero from "./Components/Hero/Hero";
import Reasons from "./Components/Reasons/Reasons";
import Registration from "./Components/Registration/Registration";
import Questionnaire from "./Components/Questionnaire/Questionnaire";
import PersonalTrainer from "./Components/PersonalTrainer/PersonalTrainer"; // Import PersonalTrainer component
import Pricing from "./Components/PersonalTrainer/Pricing/Pricing"; // Import Pricing component
import Login from './Components/Registration/Login/Login'; // Import Login component
import Header from "./Components/Hero/Header/Header"; // Import Header component
import Plans from "./Components/Plans/Plans"; // Import Plans component

// Import Router libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Home page */}
          <Route path="/reasons" element={<Reasons />} /> {/* Reasons page */}
          <Route path="/register" element={<Registration />} /> {/* Registration page */}
          <Route path="/Login" element={<Login />} /> {/* Login page */}
          <Route path="/Questionnaire" element={<Questionnaire />} /> {/* Questionnaire page */}
          <Route path="/PersonalTrainer" element={<PersonalTrainer />} /> {/* Personal Trainer page */}
          <Route path="/Pricing" element={<Pricing />} /> {/* Pricing page */}
          <Route path="/Plans" element={<Plans />} /> {/* Plans page */}

          {/* Add more routes for other components if needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
