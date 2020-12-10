import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Topics from "../pages/topics";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import User from "../pages/user/user";
import Register from "../pages/register/register";
import "antd/dist/antd.css";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Square from "../pages/square/square";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/topics" component={Topics} />
        <Route path="/user" component={User} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/square" component={Square} />
      </Switch>
      <div className="footer">
        <div className="container">
          <ul>
            <li>
              <NavLink to="/home">
                <SmileOutlined />
              </NavLink>
            </li>
            <li>
              <NavLink to="/topics">
                <SettingFilled />
              </NavLink>
            </li>
            <li>
              <NavLink to="/user">
                <HomeOutlined />
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <UserOutlined />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
