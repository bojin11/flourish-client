import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

import './style.css'
import '../style.css'

const handleSubmit = () => {
    alert("Sign up/in clicked!");
  }

// const [formData, setFormData] = useState({ username: "", password: "" });

// const handleInput = (e) => {
//     setError();
//     return setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

const LogInForm = () => {

  return (
    <>
      <form
        id="form-login"
        className="make-me-flex-2"
        onSubmit={handleSubmit}
        aria-label="login-aria"  
      >
         <div className="form-control">
          <label className= "sign-up-in-field-title" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            // value={formData.password}
            // onChange={handleInput}
            placeholder=""
            required
            id="email" 
            className="input-sign-in-up"
          />
        </div>
        <div className="form-control">
          <label className= "sign-up-in-field-title" htmlFor="email">Password</label>
          <input
            type="password"
            name="password"
            // value={formData.password}
            // onChange={handleInput}
            placeholder=""
            required
            id="password" 
            className="input-sign-in-up"
          />
        </div>
        <input
          type="submit"
          className="log-in-now-button"
          value="Log in"
        />
      </form>
      {/* {error && (
        <div className="pb-4 text-center" id="error">
          {error}
        </div>
      )}
      {loading && (
        <div className="pb-4 text-center" id="loading">
          Logging in . . .
        </div>
      )} */}
    </>
  );
};

export default LogInForm;
