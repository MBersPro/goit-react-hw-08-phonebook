import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import { isLogged } from "../redux/auth/authSelectors";

export default function PrivateRoute({ children, ...routeProps }) {
    const logCheck = useSelector(isLogged);

  return (
    <Route {...routeProps}>
      {logCheck ? children : <Redirect to="/signin" />}
    </Route>
  );
}
