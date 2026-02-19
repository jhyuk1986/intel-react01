import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/todolist">Todolist</NavLink>
      <NavLink to="/updown">updown</NavLink>
    </nav>
  );
}

export default Navigation;
