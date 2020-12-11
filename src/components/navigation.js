import React from "react";
import "antd/dist/antd.css";
import joinLogo from "../assets/joinLogo.png";
import squareLogo from "../assets/squareLogo.png";
import userLogo from "../assets/userLogo.png";
import { Link } from "react-router-dom";
import { Menu, Image } from "antd";

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
      <div
        className="Navigation"
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <Menu
          style={{ width: "100%",display:"flex",justifyContent: "space-around" }}
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="1">
            <Link to="/home">
              <Image src={joinLogo} height={58} width={40} />
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/square">
              <Image src={squareLogo} height={58} width={40} />
            </Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to="/user">
              <Image src={userLogo} height={58} width={40} />
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
