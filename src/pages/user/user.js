import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./user.css";
import addItem from "../../assets/addItem.png";
import axios from "axios";
import logoutLogo from "../../assets/logoutLogo.png";
import { Redirect, Link } from "react-router-dom";
import userAvatar from "../../assets/userAvatar.png";
import { Navigation } from "../../components/navigation";
import { Card, Image, List, Avatar } from "antd";

const { Meta } = Card;

// const Logout = () => {
//   localStorage.removeItem("username");
//   localStorage.removeItem("token");
// };

export const User = () => {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    getData((res) => {
      // setItemList({
      //   data: res.data.data,
      //   list: res.data.data,
      // });
      // console.log(res.data.data);
    });
  }, [itemList]);

  const getData = () => {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    axios({
      url: "/querysave",
      type: "json",
      method: "post",
      headers: { token: token },
      data: { username: username },
      contentType: "application/json",
    }).then((res) => {
      setItemList({
        initLoading: false,
        data: res.data.data,
        list: res.data.data,
      });
      console.log(res.data.data);
    });
  };

  const { list } = itemList;

  const username = localStorage.getItem("username");

  if (!username) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="userWrapper">
      <div className="userHeader">
        <Meta
          avatar={<Image width={80} height={80} src={userAvatar} />}
          title={username}
          description="一位筑境的新用户（在筑境，住进热爱）"
        />
        <div className="logouLogo">
          <Image
            onClick={() => {
              localStorage.removeItem("username");
              localStorage.removeItem("token");
            }}
            className="logouLogo"
            src={logoutLogo}
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="listWrapper">
        <List
          className="listStyle"
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 7,
          }}
          dataSource={list}
          renderItem={(item) => (
            <List.Item className="listItemStyle">
              <List.Item.Meta
                avatar={<Avatar src={userAvatar} />}
                title={item.up_id}
              ></List.Item.Meta>
              {item.text_src}
            </List.Item>
          )}
        />
      </div>
      <div style={{ position: "fixed", right: "5px", top: "500px" }}>
        <Link to="/add">
          <Image width={50} height={50} src={addItem} />
        </Link>
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default User;
