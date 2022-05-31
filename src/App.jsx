import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { Auth, Home } from "./pages";

function App() {
  const [page, setPage] = useState(false);
  const { isAuth } = useSelector(({ user }) => user);

  // const isAuth = false;

  useEffect(() => {
    // console.log(page, isAuth);
    setPage(isAuth);
  }, [isAuth, page]);

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

  if (page) {
    return (
      <div className="wrapper">
        <Switch>
          {/* <Route
            path="/"
            render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
          /> */}
          <Route
            path={["/oauth2/redirect", "/"]}
            render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
          />
        </Switch>
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <Switch>
          <Route
            exact
            path={["/signin", "/signup", "/signup/verify"]}
            component={Auth}
          />
          <Redirect to="/signin" />
        </Switch>
      </div>
    );
  }
}

export default App;
