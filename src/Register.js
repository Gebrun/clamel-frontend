import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { validEmail, validPassword } from "./utils";
import Nav from "./Nav.js";

const Register = () => {
  const [state, setState] = useState({
    registered: false,
    loading: false,
    errors: 0,
    messages: [],
  });

  let firstNameField;
  let lastNameField;
  let emailField;
  let passwordField;

  const registerUser = () => {
    let errors = 0;
    let messages = [];

    if (firstNameField.value.length < 1) {
      errors++;
      messages.push("Please enter a valid first name");
    }
    if (lastNameField.value.length < 1) {
      errors++;
      messages.push("Please enter a valid last name");
    }
    if (!validEmail(emailField.value)) {
      errors++;
      messages.push("Please enter a valid email");
    }
    if (!validPassword(passwordField.value)) {
      errors++;
      messages.push("Please enter a valid password");
    }

    // If user makes any mistake
    if (errors > 0) {
      setState({
        ...state,
        errors: errors,
        messages: messages,
      });
      return;
    }
    // If no mistake occurs, reset the errors
    else {
      setState({
        ...state,
        errors: 0,
        messages: [],
        loading: true,
      });
    }

    fetch(`${process.env.REACT_APP_API_URL}users/register`, {
      method: "POST",
      body: JSON.stringify({
        firstName: firstNameField.value,
        lastName: lastNameField.value,
        email: emailField.value,
        password: passwordField.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const { message } = json;
        if (message === "User has been saved") {
          //
          setState({
            ...state,
            registered: true,
            loading: false,
          });
        } else {
          //alert("Please check all the fields");
          setState({
            ...state,
            loading: false,
          });
        }
      });
  };

  // If the user is registered, redirect them
  if (state.registered === true) {
    return (<Redirect to="/login"/>)
  }

  // Otherwise, show the registration form
  else {
    return (
      <div>
        <Nav />
        <div className="bg-image3"></div>
        <div className="login-box">
          <h2>Register</h2>
          <div className="register">
            <div className="user-box">
              <input
                ref={(comp) => (firstNameField = comp)}
                type="text"
                name=""
                required=""
              />
              <label>First Name</label>
            </div>
            <div className="user-box">
              <input
                ref={(comp) => (lastNameField = comp)}
                type="text"
                name=""
                required=""
              />
              <label>Last Name</label>
            </div>
            <div className="user-box">
              <input
                ref={(comp) => (emailField = comp)}
                type="text"
                name=""
                required=""
                placeholder="We'll never share your email."
              />
              <label>Email address</label>
            </div>
            <div className="user-box">
              <input
                ref={(comp) => (passwordField = comp)}
                type="password"
                name=""
                required=""
                placeholder="Your password is safe with us!"
              />
              <label>Password</label>
            </div>
            <button onClick={registerUser}>
              {/* <span></span>
          <span></span>
          <span></span>
          <span></span> */}
              Register
            </button>
            <p>
              Already have an account? Click{" "}
              <Link to="/login" className="registerlink">
                here
              </Link>{" "}
              to Login.
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Register;
