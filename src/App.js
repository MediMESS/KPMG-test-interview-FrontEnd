import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import LandingPage from "./auth/pages/LandingPage";
import Admin from "./admin/Admin";

function App(props) {
  console.log(props);
  if (props.is_connecte) {
    return (
      <div>
        <Admin />
      </div>
    );
  } else {
    return (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    is_connecte: state.is_connecte,
    user: state.user,
    token: state.token,
  };
};

export default connect(mapStateToProps, null)(App);
