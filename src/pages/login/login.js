import React from "react";
import "antd/dist/antd.css";
import "./login.css";
import { Link, Redirect } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useUserStore } from "../../stores/userStore";
import { Input, Button, Form } from "antd";

export const Login = () => {
  const login = useUserStore((state) => state.login);

  const onFinish = (values) => {
    console.log(values);
    (async () => {
      try {
        await login(values.username, values.password);
        <Redirect to="/home" />;
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <div className="loginWrapper">
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            className="userInput"
            prefix={<UserOutlined  style={{fontSize:'24px'}}/>}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            className="psdInput"
            prefix={<LockOutlined style={{fontSize:'24px'}}/>}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Button className="loginButton" htmlType="submit">
            登录
          </Button>
          <Link to="/register">
            <Button className="registerButton">注册</Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
