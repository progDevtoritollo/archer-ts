import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { Auth, Home } from "./pages";
import userService from "./services/userService";
import { setAuth } from "./redux/actions/user";

function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(({ user }) => user);

  useEffect(() => {
    userService
      .getIsAuth()
      .then((res) => {
        if (res.status === 200) {
          dispatch(setAuth(true));
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(setAuth(false));
        }
      });
  }, []);

  return (
    <div className="wrapper">
      <Switch>
        <Route
          exact
          path={["/signin", "/signup", "/signup/verify"]}
          component={() => (isAuth ? <Redirect to="/" /> : <Auth />)}
        />
        <Route path={["/", "/oauth2/redirect"]} render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
