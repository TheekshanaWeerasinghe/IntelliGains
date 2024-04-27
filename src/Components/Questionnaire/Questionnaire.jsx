import React, { useState } from 'react';
import './Questionnaire.css'; // Import the CSS file


const Questionnaire = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    height: '',
    'height-inches': '',
    weight: '',
    goal: '',
    'activity-level': '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here (e.g., send data to server)
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  // Handle submit button click (implementation depends on your backend)
  const handleSubmitImage = () => {
    // Replace with your actual logic to submit the image
    console.log('Submitting image:', selectedImage); // Placeholder for now
  };

  return (
    <div>
      <div><a href="/" class="back-button">Back</a>
    </div>
    <div className="questionnaire-container">
      <h1 className="questionnaire-title">Fitness Questionnaire</h1>
      <form onSubmit={handleSubmit} className="questionnaire-form">
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender:</label>
          <select name="gender" id="gender" value={formData.gender} onChange={handleChange} className="form-select">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-Binary</option>
            <option value="prefer-not-to-say">Prefer Not to Say</option>
          </select>
        </div>

        <div className="form-group">
  <label htmlFor="age" className="form-label">Age Range:</label>
  <select name="age" id="age" value={formData.age} onChange={handleChange} className="form-select">
    <option value="">Select Age Range</option>
    <option value="18-25">18 - 25</option>
    <option value="26-30">26 - 30</option>
    <option value="31-35">31 - 35</option>
    <option value="36-40">36 - 40</option>
    <option value="40+">40+</option>
  </select>
</div>

<div className="form-group">
  <label htmlFor="height-ft" className="form-label">Height (ft):</label>
  <input
    type="number"
    id="height-ft"
    name="height-ft"
    value={formData['height-ft'] || ''} // Access height-ft from formData
    onChange={handleChange}
    className="form-input"
    min="4"
    max="8"
  />
</div>
        
<div className="form-group">
  <label htmlFor="Weight-kg" className="form-label">Weight (Kg):</label>
  <input
    type="number"
    id="Weight-kg"
    name="Weight-kg"
    value={formData['Weight-kg'] || ''} // Access height-ft from formData
    onChange={handleChange}
    className="form-input"
    min="25"
    max="200"
  />
</div>

<div className="form-group">
  <label className="form-label">Goals (select all that apply):</label>
  <div className="checkbox-group">
    <label>
      <input type="checkbox" name="goal[]" value="get-fitter" onChange={handleChange} /> Get Fitter
    </label>
    <label>
      <input type="checkbox" name="goal[]" value="gain-weight" onChange={handleChange} /> Gain Weight
    </label>
    <label>
      <input type="checkbox" name="goal[]" value="lose-weight" onChange={handleChange} /> Lose Weight
    </label>
    <label>
      <input type="checkbox" name="goal[]" value="build-muscle" onChange={handleChange} /> Build Muscle
    </label>
    <label>
      <input type="checkbox" name="goal[]" value="fitness-training" onChange={handleChange} /> Fitness Training
    </label>
    <label>
      <input type="checkbox" name="goal[]" value="learn-basics" onChange={handleChange} /> Learn the Basics
    </label>
  </div>
</div>


        <div className="form-group">
          <label htmlFor="activity-level" className="form-label">Regular Physical Activity Level:</label>
          <select name="activity-level" id="activity-level" value={formData.activityLevel} onChange={handleChange} className="form-select">
            <option value="">Select Activity Level</option>
            <option value="sedentary">Sedentary (little to no exercise)</option>
            <option value="lightly-active">Lightly Active (light exercise/sports 1-3 days a week)</option>
            <option value="moderately-active">Moderately Active (moderate exercise/sports 3-5 days a week)</option>
            <option value="very-active">Very Active (hard exercise/sports 6-7 days a week)</option>
            <option value="super-active">Super Active (very hard exercise/sports & physical job)</option>
          </select>
        </div>

        <div className="form-group">
        <label htmlFor="upload-image" className="form-label">Upload your image</label>
        <div className="upload-image">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <div className="image-preview">
          <img src={selectedImage} alt="Uploaded Image" />
        </div>
      )}
      </div>
    </div>


        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  </div>
  );
};

export default Questionnaire;
