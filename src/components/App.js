import Navigation from "./navigation/Navigation";
import { Switch } from "react-router";
import { mainRoutesHome, mainRoutesAuth } from "../routes/mainRoutes";
import PrivateRoute from "./PrivateRote";
import PublicRoute from "./PublicRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/authOperations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  },[dispatch])
  return (
    <>
      <Navigation />
      <Switch>
        {mainRoutesHome.map(
          ({ path, exact, component: Page, isRestricted }) => (
            <PrivateRoute path={path} exact={exact} isRestricted>
              <Page />
              {/* <Route path={path} exact={exact} component={component} /> */}
            </PrivateRoute>
          )
        )}
        {mainRoutesAuth.map(({ path, exact, component: Page }) => (
          <PublicRoute path={path} exact={exact}>
            <Page />
          </PublicRoute>
        ))}
      </Switch>
    </>
  );
}

export default App;
