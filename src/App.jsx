import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";

import { Auth, Home,UserStatistic } from "./pages";
import userService from "./services/userService";
import { setCoach } from "./redux/actions/user";
function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuth } = useSelector(({ user }) => user);
  useEffect(() => {
    userService
      .getIsAuth()
      .then((res) => {
        if (res.status === 200) {
          dispatch(setCoach(true));
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          history.push("/signin");
          dispatch(setCoach(false));
        }
      });
  }, [Auth]);

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
          exact
          path={["/signin", "/signup", "/signup/verify"]}
          component={Auth}
        />
        <Route
          path={["/", "/oauth2/redirect"]}
          render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
        />
      </Switch>
    </div>
  );
}

export default App;
