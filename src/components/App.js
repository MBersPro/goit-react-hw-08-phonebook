import Navigation from "./navigation/Navigation";
import { Switch, Route } from "react-router";
import { mainRoutes } from "../routes/mainRoutes";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        {mainRoutes.map(({ path, exact, component }) => (
          <Route path={path} exact={exact} component={component} />
        ))}
      </Switch>
    </>
  );
}

export default App;
