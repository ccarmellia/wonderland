import React from "react";
import "antd/dist/antd.css";
import axios from "axios";
import "./register.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useUserStore } from "../../stores/userStore";
import { Link, Redirect } from "react-router-dom";
import { Form, Input, Button } from "antd";

export const Register = () => {
  const [form] = Form.useForm();

  // const onFinish = (values) => {
  //   console.log(values)(async () => {
  //     try {
  //       await register(values.nickname, values.password);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // };
  const onFinish = (values) => {
    axios.post('/register', {
      username: values.nickname,
      password: values.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const register = useUserStore((state) => state.register);

  return (
    <div className="Wrapper">
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
      >
        <Form.Item
          name="nickname"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input
            className="userInput"
            prefix={<UserOutlined style={{ fontSize: "24px" }} />}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            className="psdInput"
            prefix={<LockOutlined style={{ fontSize: "24px" }} />}
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
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password
            className="psdInput"
            prefix={<LockOutlined style={{ fontSize: "24px" }} />}
          />
        </Form.Item>
        <Form.Item>
          <Link to="/login">
            <Button className="loginButton">登录</Button>
          </Link>
          <Button className="registerButton" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
