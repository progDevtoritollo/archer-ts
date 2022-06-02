import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import { Auth, Home } from "./pages";

function App() {
  const { isAuth } = useSelector(({ user }) => user);

  // return (
  //   <div className="wrapper">
  //     <Switch>
  //       <Route
  //         path="/"
  //         render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
  //       />
  //       <Redirect to="/signin" />
  //       <Route
  //         exact
  //         path={["/signin", "/signup", "/signup/verify"]}
  //         component={Auth}
  //       />
  //     </Switch>
  //   </div>
  // );

  return (
    <div className="wrapper">
      <Switch>
        <Route
          path={["/", "/oauth2/redirect"]}
          render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
        />
        <Route
          exact
          path={["/signin", "/signup", "/signup/verify"]}
          component={Auth}
        />
      </Switch>
    </div>
  );
}

export default App;
