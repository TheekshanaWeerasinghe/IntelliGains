import React, { useState } from 'react';
import './Plans.css';   

function Plans() {
  const [workoutPlan, setWorkoutPlan] = useState({
    name: '',
    description: '',
    // Add properties for exercises, sets, reps, etc.
  });
  const [nutritionPlan, setNutritionPlan] = useState({
    name: '',
    description: '',
    // Add properties for meals, macros (carbs, protein, fat), etc.
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleWorkoutPlanChange = (event) => {
    const { name, value } = event.target;
    setWorkoutPlan((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNutritionPlanChange = (event) => {
    const { name, value } = event.target;
    setNutritionPlan((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleGenerateWorkoutPlan = async () => {
    // Integrate with a workout plan generation service (e.g., API call)
    // Replace with your actual implementation
    try {
      const response = await fetch('https://api.example.com/workout-plans', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(workoutPlan),
      });
      if (!response.ok) {
        throw new Error('Failed to generate workout plan');
      }
      const generatedPlan = await response.json();
      // Display or store the generated workout plan
      console.log('Generated Workout Plan:', generatedPlan);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleGenerateNutritionPlan = async () => {
    // Integrate with a nutrition plan generation service (e.g., API call)
    // Replace with your actual implementation
    try {
      const response = await fetch('https://api.example.com/nutrition-plans', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nutritionPlan),
      });
      if (!response.ok) {
        throw new Error('Failed to generate nutrition plan');
      }
      const generatedPlan = await response.json();
      // Display or store the generated nutrition plan
      console.log('Generated Nutrition Plan:', generatedPlan);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className='AddPlansPage'>
      <h1>Workout Plan</h1>
      <div>
        <label htmlFor="workoutPlanName" className='Name'>Name:</label>
        <input
          type="text"
          id="workoutPlanName"
          name="name"
          value={workoutPlan.name}
          onChange={handleWorkoutPlanChange}
        />
        <label htmlFor="workoutPlanDescription" className='Name'>Description:</label>
        <textarea
          id="workoutPlanDescription"
          name="description"
          value={workoutPlan.description}
          onChange={handleWorkoutPlanChange}
        />
        {/* Add additional form fields for exercises, sets, reps, etc. */}
        <button onClick={handleGenerateWorkoutPlan}>Generate Workout Plan</button>
      </div>
      <div>
        <h1>Nutrition Plan</h1>
        <label htmlFor="nutritionPlanName" className='Name'>Name:</label>
        <input
          type="text"
          id="nutritionPlanName"
          name="name"
          value={nutritionPlan.name}
          onChange={handleNutritionPlanChange}
        />
        <label htmlFor="nutritionPlanDescription" className='Name'>Description:</label>
        <textarea
          id="nutritionPlanDescription"
          name="description"
          value={nutritionPlan.description}
          onChange={handleNutritionPlanChange}
        />
        {/* Add additional form fields for meals, macros (carbs, protein, fat), etc. */}
        <button onClick={handleGenerateNutritionPlan}>Generate Nutrition Plan</button>
      </div>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}

export default Plans;
