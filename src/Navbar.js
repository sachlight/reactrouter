import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar=()=> {
    return (
      <div>
      <nav className="mainMenu">
        <NavLink exact to="/"
            activeClassName="menu_link"
            className="menu_style"
        >
        Home </NavLink>

        <NavLink exact  to="/about"
            activeClassName="menu_link"
            className="menu_style"
        >
        About Us </NavLink>

        <NavLink exact to="/contact"
        activeClassName="menu_link"
            className="menu_style">
        Contact </NavLink>

        <NavLink exact to="/search"
        activeClassName="menu_link"
            className="menu_style">
        Search </NavLink>
        </nav>
      </div>
    );
  };

  export default Navbar;