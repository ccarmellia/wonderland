import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import User from "../pages/user/user";
import Register from "../pages/register/register";
import AddPage from "../pages/addPage/addpage"
import "antd/dist/antd.css";
import Square from "../pages/square/square";
import Buildings from "../pages/building/building";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/square" component={Square} />
        <Route path="/add" component={AddPage} />
        <Route path="/buildings" component={Buildings} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
