import React, { useState } from "react";
import "./Registration.css";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitting(true);
      const { confirmPassword, ...dataToSend } = formData; 

      console.log(dataToSend)
      fetch("http://testserver.divinelk.com:5000/api/users/register", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to register. Please try again.");
          }
          return response.json();
        })
        .then((data) => {
          alert("User registered successfully");
          navigate('/Login'); 
        })
        .catch((error) => {
          console.error("Error:", error.message);
          alert(error.message); 
        })
        .finally(() => {
          setSubmitting(false);
        });
    }
  };

  return (
    <div>
      <a href="/" className="back-button">Back</a>
      <div className="body">
        <div className="reg">
          <h1>Register</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
          {formErrors.username && <div className="error">{formErrors.username}</div>}
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          {formErrors.email && <div className="error">{formErrors.email}</div>}
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          {formErrors.password && <div className="error">{formErrors.password}</div>}
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
          {formErrors.confirmPassword && <div className="error">{formErrors.confirmPassword}</div>}
          <button type="submit" className="btn" disabled={submitting}>{submitting ? "Submitting..." : "Register"}</button>
          <span className="login-option">
            Already have an account? <Link to="/login" className="login">Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
