import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function UserNavbar() {
  const [active, setActive] = useState("navbar-links");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");

  const navToggle = () => {
    if (active === "navbar-links") {
      setActive("navbar-links navbar-active");
    } else {
      setActive("navbar-links");
    }
    if (toggleIcon === "nav-toggler") {
      setToggleIcon("nav-toggler toggle");
    } else {
      setToggleIcon("nav-toggler");
    }
  };

  return (
    <div className="navbar-container">
      <IoSettingsSharp className="settings-cog" />
      <ul className={active} style={{ paddingTop: "1rem" }}>
        <li className="navbar-link-items">
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li className="navbar-link-items">
          <NavLink to="/new-client">New Client</NavLink>
        </li>
        <li className="navbar-link-items">
          <NavLink to="/search-clients">Search Clients</NavLink>
        </li>
        <li className="navbar-link-items">
          <NavLink to="bookings">Bookings</NavLink>
        </li>
        <li className="navbar-link-items">Logout</li>
      </ul>
      <button onClick={navToggle} type="button" className={toggleIcon}>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </button>
    </div>
  );
}
export default UserNavbar;
