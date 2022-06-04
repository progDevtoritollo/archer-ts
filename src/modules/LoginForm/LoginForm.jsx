import { Form, Input, Button } from "antd";
import {
  MailOutlined,
  LockOutlined,
  GoogleSquareFilled,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import loginService from "./../../services/loginService";
import { Block } from "./../../components";
import { GOOGLE_API } from "./../../commons";
import requestBuilder from "./../../utils/requestBuilder";
import { setAuth } from "./../../redux/actions/user";

const LoginForm = () => {
  const history = useHistory();
  async function login(loginData) {
    let res = await loginService.Login(loginData);
    if (res.status === 200) {
      dispatch(setAuth(true));
      requestBuilder.setToken(res.data.accessToken);
      history.push("/");
    }
  }
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const handleSubmit = (loginData) => {
    login(loginData);
  };

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleGoogleClick = () => {
    window.location.replace(GOOGLE_API);
  };

  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
        >
          <Form.Item
            hasFeedback
            name="email"
            icon="mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              value={email}
              onChange={handleSetEmail}
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="E-mail"
            />
          </Form.Item>
          <Form.Item
            name="password"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <div className="auth__wrapper_button">
              <Button
                type="primary "
                size="middle"
                className="button"
                htmlType="submit"
              >
                ВОЙТИ В АККАУНТ
              </Button>
              <div onClick={handleGoogleClick}>
                <GoogleSquareFilled className="Google" />
              </div>
            </div>
          </Form.Item>
          <Form.Item>
            <Link className="auth__register-link" to="/signup">
              Зарегистрироваться
            </Link>
          </Form.Item>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;
