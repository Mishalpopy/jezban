import React from "react";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <ul>
      <li >
        <Link to="/">Home</Link>
 
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li className="has-dropdown">
        <Link to="/team">Services</Link>
        <ul className="submenu">
          <li>
            <Link to="/">Mosquito Control</Link>
          </li>
          <li>
            <Link to="/team-details">Cockroach Control</Link>
          </li>
          <li>
            <Link to="/service">Ants Control</Link>
          </li>
          <li>
            <Link to="/service-details">Bedbugs Control</Link>
          </li>
          <li>
            <Link to="/price">Price</Link>
          </li>
         
        </ul>
      </li>
      <li>
        <Link to="/about">Gallery</Link>
      </li>
      <li>
        <Link to="/about">Contact us</Link>
      </li>
    </ul>
  );
};

export default Menus;
