import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/schools">Schools</Link>
        </li>
        <li>
          <Link to="/degrees">Degrees</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Map, Directions and Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
