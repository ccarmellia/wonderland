import React, { useState } from "react";
import "antd/dist/antd.css";
import "./login.css";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Input, Button, Form } from "antd";

export const Login = () => {
  const [user, setUser] = useState();

  const username = localStorage.getItem("username");

  if (username) {
    return <Redirect to="/square" />;
  }

  const onFinish = (values) => {
    axios({
      method: "post",
      url: "/login",
      data: {
        username: values.username,
        password: values.password,
      },
    }).then(function (res) {
      console.log(res);
      console.log(res.data.data.Token);
      console.log(res.data.data.ID);
      localStorage.setItem("username", res.data.data.ID);
      localStorage.setItem("token", res.data.data.Token);
      setUser({
        user: res.data.data,
      });
      if (res.data.data.ID) {
        return <Redirect to="/square" />;
      }
    });
  };

  return (
    <div className="Wrapper">
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
              prefix={<UserOutlined style={{ fontSize: "24px" }} />}
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
              prefix={<LockOutlined style={{ fontSize: "24px" }} />}
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
    </div>
  );
};

export default Login;
