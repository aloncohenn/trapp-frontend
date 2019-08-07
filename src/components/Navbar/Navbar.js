import React, { useState, useContext } from 'react';
import TokenService from '../../services/TokenService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { status, dispatch } = useContext(UserContext);

  const renderLoggedOutView = () => {
    return (
      <nav className="navbar">
        <span
          className="navbar-toggle"
          id="js-navbar-toggle"
          onClick={() => setActive(!active)}
        >
          <FontAwesomeIcon icon="bars" color="white" size="lg" />
        </span>
        <Link to="/">
          <img
            className="logo"
            src="https://via.placeholder.com/60.png?text=TrApp"
            alt="company logo"
          />
        </Link>
        <ul className="main-nav" id={active ? 'active' : null}>
          <li>
            <Link to="/signup" className="nav-links">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-links">
              Log In
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  const renderLoggedInView = () => {
    return (
      <nav className="navbar">
        <span
          className="navbar-toggle"
          id="js-navbar-toggle"
          onClick={() => setActive(!active)}
        >
          <FontAwesomeIcon icon="bars" color="white" size="lg" />
        </span>
        <Link to="/">
          <img
            className="logo"
            src="https://via.placeholder.com/60.png?text=TrApp"
            alt="company logo"
          />
        </Link>
        <ul className="main-nav" id={active ? 'active' : null}>
          <li>
            <Link to="/signup" className="nav-links">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-links">
              New Job
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="nav-links"
              onClick={() => dispatch({ type: 'TOGGLE_LOGGED_OUT' })}
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  if (status) {
    return renderLoggedInView();
  } else {
    return renderLoggedOutView();
  }
};

export default Navbar;
