import { Route, Redirect, Switch } from "react-router-dom";
// import 'antd/dist/antd.css';

import { Auth, Home } from "./pages";
import { GOOGLE_API } from "./commons";

function App() {
  const isAuth = false;

  return (
    <div className="wrapper ">
      <Switch>
        <Redirect
          from={GOOGLE_API}
          to={GOOGLE_API}
        />
        <Route
          exact
          path={["/signin", "/signup", "/signup/verify"]}
          component={Auth}
        />
        <Route
          path="/"
          render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
        />
      </Switch>
    </div>
  );
}

export default App;
