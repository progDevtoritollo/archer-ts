import { Route, Redirect, Switch } from "react-router-dom";
// import 'antd/dist/antd.css';

import { Auth, Home } from "./pages";

function App() {
  const isAuth = true;

  return (
    <div className="wrapper ">
      <Switch>
        <Redirect
          from="/oauth2/authorization/google"
          to="/oauth2/authorization/google"
        />
        <Route
          exact
          path={["/signin", "/signup", "/signup/verify"]}
          component={Auth}
        />
        <Route
          path="/"
          render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
        // render={() => <Home />}
        />
      </Switch>
    </div>
  );
}

export default App;
