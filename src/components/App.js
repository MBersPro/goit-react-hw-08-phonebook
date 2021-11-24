import Navigation from "./navigation/Navigation";
import { Switch, Route } from "react-router";
import { mainRoutesHome, mainRoutesAuth } from "../routes/mainRoutes";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        {mainRoutesHome.map(({ path, exact, component }) => (
          <Route path={path} exact={exact} component={component} />
        ))}
        {mainRoutesAuth.map(({ path, exact, component }) => (
          <Route path={path} exact={exact} component={component} />
        ))}
      </Switch>
    </>
  );
}

export default App;
