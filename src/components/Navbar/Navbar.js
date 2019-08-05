import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

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
      <img
        className="logo"
        src="https://via.placeholder.com/60.png?text=TrApp"
        alt="company logo"
      />
      <ul className="main-nav" id={active ? 'active' : null}>
        <li>
          <a href="#" className="nav-links">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Login
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Signup
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
