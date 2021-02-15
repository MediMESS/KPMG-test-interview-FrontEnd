import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import LandingPage from "./auth/pages/LandingPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
