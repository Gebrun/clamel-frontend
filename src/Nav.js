import React, { useContext } from "react";
import AppContext from "./AppContext";
import { Link } from "react-router-dom";

const Nav = () => {

  const [globalState, setGlobalState] = useContext(AppContext);

  const logOut = () => {
    setGlobalState({
      ...globalState,
      loggedIn: false,
    });

    localStorage.clear();
  };


  return (
    <div>
      <nav>
        <a href="http://localhost:3000/" className="navlogo">Home</a>
        <ul className="navbar">
          <li>
            <a href="#section-d">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          {/* <li>
            <a href="https://clamelconstruction.com" target="_blank">
              Clamel Official
            </a>
          </li> */}
                    <li>
                    {globalState.loggedIn === false && (
          <Link to="/login">
            Log In
          </Link>
        )}

        {globalState.loggedIn === true && (
          <button onClick={logOut}>
            Log Out
          </button>
        )}
          </li>
        </ul>
      </nav>
    </div>
  );
};


export default Nav;