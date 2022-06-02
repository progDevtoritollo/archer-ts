import React from "react";

import LoginForm from "../../modules/LoginForm/LoginForm";
import RegisterForm from "../../modules/RegisterForm/RegisterForm";

import { Route } from "react-router-dom";

import "./Auth.scss";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Route exact path="/signin">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <RegisterForm />
        </Route>
      </div>
    </section>
  );
};
export default Auth;
