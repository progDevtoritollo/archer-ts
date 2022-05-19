import { Form, Input, Button } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  InfoCircleTwoTone,
  GoogleSquareFilled,
} from "@ant-design/icons";

import { GOOGLE_API } from "./../../commons";
import { Block } from "./../../components";
import registerService from "./../../services/registerService";

async function register(registerData, setSuccess) {
  console.log("Received values of form: ", registerData);
  let res = await registerService.Register(registerData);
  console.log(res);
  if (res) {
    setSuccess(false);
  }
}

const RegisterForm = (registerData) => {
  const [success, setSuccess] = useState(true);
  const onFinish = (registerData) => {
    register(registerData, setSuccess);
  };

  const handleGoogleClick = () => {
    window.location.replace(GOOGLE_API);
  };

  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {success ? (
          <Form className="login-form" name="register" onFinish={onFinish}>
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
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="name"
              rules={[
                { min: 3, message: "Add more symboles" },
                { max: 18, message: "Enough" },
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Имя"
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="surname"
              rules={[
                { min: 5, message: "Add more symboles" },
                { max: 18, message: "Enough" },
                {
                  required: true,
                  message: "Please input your Surname!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Фамилия"
              />
            </Form.Item>
            <Form.Item
              name="password"
              hasFeedback
              rules={[
                { min: 8, message: "Add more symboles" },
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Пароль"
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Повторить пароль"
              />
            </Form.Item>

            <Form.Item>
              <div className="auth__wrapper_button">
                <Button
                  size="middle"
                  className="button"
                  type="primary"
                  htmlType="submit"
                >
                  ЗАРЕГИСТРИРОВАТЬСЯ
                </Button>
                <div onClick={handleGoogleClick}>
                  <GoogleSquareFilled className="Google" />
                </div>
              </div>
            </Form.Item>
            <Form.Item>
              <Link className="auth__register-link" to="/signin">
                Войти в аккаунт
              </Link>
            </Form.Item>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div className="auth__success-icon">
              <InfoCircleTwoTone />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
