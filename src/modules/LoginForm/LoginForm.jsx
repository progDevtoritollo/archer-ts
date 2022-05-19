import { Form, Input, Button } from "antd";
import {
  MailOutlined,
  LockOutlined,
  GoogleSquareFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import loginService from "./../../services/loginService";
import { Block } from "./../../components";
import { GOOGLE_API } from "./../../commons";

async function login(loginData) {
  console.log("Received values of form: ", loginData);
  let res = await loginService.Login(loginData);
  console.log(res);
}

const LoginForm = (loginData) => {
  const [email, setEmail] = useState("");

  const onFinish = (loginData) => {
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
          onFinish={onFinish}
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
              {/* <Link to={GOOGLE_API}>
                <GoogleSquareFilled className="Google" />
              </Link> */}
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
