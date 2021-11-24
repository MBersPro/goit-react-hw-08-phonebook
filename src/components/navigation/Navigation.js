import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationItem from "./navigationItem/NavigationItem";
import { h2, nav, navUl, li, link, linkActive } from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = ({ routes = mainRoutes }) => {
  return (
    <nav className={nav}>
      <h2 className={h2}>PhoneBook</h2>
      <ul className={navUl}>
        {routes.map(({ name, path, exact }) => (
          <NavigationItem key={path} name={name} path={path} exact={exact} />
        ))}
        <li className={li}>
          <NavLink
            className={link}
            activeClassName={linkActive}
            to="/signout"
            exact
          >
            SignOut
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
