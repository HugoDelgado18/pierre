import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="menu-icon" onClick={handleClick}>
      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <Link to="/" className="navbar-logo">
          Ngon like moms
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/recipes" className="nav-links">
              Recipes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-links">
             Create a Recipe
            </Link>
          </li>
        </ul>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
