import React from "react";
import { NavLink } from "react-router-dom";
import { li, link, linkActive } from "./NavigationItem.module.css";

const NavigationItem = ({ name, path, exact }) => {
  return (
    <li className={li}>
      <NavLink
        className={link}
        activeClassName={linkActive}
        to={path}
        exact={exact}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
