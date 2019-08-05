import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="navbar">
      <span
        className="navbar-toggle"
        id="js-navbar-toggle"
        onClick={() => setActive(!active)}
      >
        <FontAwesomeIcon icon="bars" color="white" size="lg" />
      </span>
      <Link to="/"><img
        className="logo"
        src="https://via.placeholder.com/60.png?text=TrApp"
        alt="company logo"
      /></Link>
      <ul className="main-nav" id={active ? 'active' : null}>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/demo">Demo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
