import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

const Form = () => {
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    navigate("/success");
  };

  // JSX code for login form
  const renderForm = (
    <div className="app">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="login-form">
      <div className="title">Sign In</div>
      {renderForm}
    </div>
  );
};
export default Form;
