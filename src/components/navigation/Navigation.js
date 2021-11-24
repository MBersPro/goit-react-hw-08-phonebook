import React from "react";
import { mainRoutesAuth, mainRoutesHome } from "../../routes/mainRoutes";
import NavigationItem from "./navigationItem/NavigationItem";
import { h2, nav, navUl, li, link } from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { isLogged } from "../../redux/auth/authSelectors";
import { useDispatch } from "react-redux";
  import authOperations from "../../redux/auth/authOperations";
const Navigation = ({
  routesAuth = mainRoutesAuth,
  routesHome = mainRoutesHome,
}) => {
  const isLoggedIn = useSelector(isLogged);
  const dispatch = useDispatch();

  const onHandleLogout = () => {
    dispatch(authOperations.logOut())
  }
  return (
    <nav className={nav}>
      <h2 className={h2}>PhoneBook</h2>
      {isLoggedIn ? (
        <ul className={navUl}>
          {routesHome.map(({ name, path, exact }) => (
            <NavigationItem key={path} name={name} path={path} exact={exact} />
          ))}
          <li className={li}>
            <button
              className={link}
              onClick={onHandleLogout}
            >
              SignOut
            </button>
          </li>
        </ul>
      ) : (
        <ul className={navUl}>
          {routesAuth.map(({ name, path, exact }) => (
            <NavigationItem key={path} name={name} path={path} exact={exact} />
          ))}
        </ul>
      )}
      {/* <ul className={navUl}>
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
      </ul> */}
    </nav>
  );
};

export default Navigation;
