import React, { useContext, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import AppContext from "./AppContext";
import Nav from "./Nav.js";

const Login = () => {
  // These will be assigned values by React
  let emailField;
  let passwordField;

  // Connected to globalState
  const [globalState, setGlobalState] = useContext(AppContext);

  // A local state
  const [state, setState] = useState({
    loading: false,
  });

  const loginUser = () => {
    // Start loading
    setState({ ...state, loading: true });

    fetch(`${process.env.REACT_APP_API_URL}users/login`, {
      method: "POST",
      body: JSON.stringify({
        email: emailField.value,
        password: passwordField.value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((result) => result.json())
      .then((json) => {
        const { message, jsonwebtoken } = json;

        // If web token exists (meaning login was successful)
        if (jsonwebtoken) {
          // update the globalState
          setGlobalState({
            ...globalState,
            loggedIn: true,
          });

          // save the jwt in the browser
          localStorage.setItem("jwt", jsonwebtoken);

          // turn off the preloader
          setState({ ...state, loading: false });
        } else {
          // throw an error
          alert(message);
        }
      });
  };

  // If the user is loggedIn, redirect them
  if (globalState.loggedIn === true) {
    return (<Redirect to="/"/>)
  }

  // Otherwise, show the login form
  else {
    return (
      <div>
        <Nav />
        <div className="bg-image2"></div>
        <div className="login-box">
          <h2>Login</h2>
          <div className="login">
            <div className="user-box">
              <input
                ref={(comp) => (emailField = comp)}
                type="text"
                name=""
                required
              />
              <label>Username or Email</label>
            </div>
            <div className="user-box">
              <input
                ref={(comp) => (passwordField = comp)}
                type="password"
                name=""
                required
              />
              <label>Password</label>
            </div>
            <button onClick={loginUser}>
              {/* <span></span>
              <span></span>
              <span></span>
              <span></span> */}
              Login
            </button>
            <p>
              If you're not a registered user, click{" "}
              <Link to="/register" className="registerlink">
                here
              </Link>{" "}
              to create an account
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
