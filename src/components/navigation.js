import React from "react";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export class Navigation extends React.Component {
  state = {
    current: "1",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div className="Navigation">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="1">
            <Link to="/home">home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/square">square</Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to="/user">user</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
