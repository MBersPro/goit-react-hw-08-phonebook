import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { isLogged } from "../redux/auth/authSelectors";

export default function PublicRoute({ children, restricted, ...routeProps }) {
    const logCheck = useSelector(isLogged);
  return (
    <Route {...routeProps}>
      {logCheck ? <Redirect to="/" /> : children}
    </Route>
  );
}
