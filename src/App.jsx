import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { Auth, Home } from "./pages";
import userService from "./services/userService";
import { SetIsAuth } from "./redux/user/slice";

function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(({ user }) => user);

  useEffect(() => {
    userService
      .getIsAuth()
      .then((res) => {
        if (res.status === 200) {
          dispatch(SetIsAuth(true));
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(SetIsAuth(false));
        }
      });
  }, []);

  return (
    <div className="wrapper">
      <Switch>
        <Route
          exact
          path={["/signin", "/signup"]}
          component={() => (isAuth ? <Redirect to="/" /> : <Auth />)}
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
