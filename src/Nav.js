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
        <a href="/" className="navlogo">Home</a>
        <ul className="navbar">
          <li>
            <a href="#section-d">About</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          {/* <li>
            <a href="https://clamelconstruction.com" target="_blank">
              Clamel Official
            </a>
          </li> */}
                    <li>
                    {globalState.loggedIn === false && (
          <Link to="/login">
            Log In / Register
          </Link>
        )}

        {globalState.loggedIn === true && (
          <button className="logout" onClick={logOut}>
            <Link to="/">
            Log Out
            </Link>
            </button>
        )}
          </li>
        </ul>
      </nav>
    </div>
  );
};


export default Nav;