import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./auth/pages/Login";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
