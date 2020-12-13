/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "./home.css";
import { Link, Redirect } from "react-router-dom";
import addItem from "../../assets/addItem.png";
import houseLogo from "../../assets/houseLogo.png";
import { Navigation } from "../../components/navigation";
import { List, Image, Input } from "antd";

const { Search } = Input;

const onSearch = (value) => console.log(value);

export const Home = () => {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    getData((res) => {
      setItemList({
        data: res.data.data,
        list: res.data.data,
      });
      console.log(res.data.data);
    });
  }, [itemList]);

  const getData = () => {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    axios({
      url: "/querysavebuilding",
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

  function handleClick(buildingName) {
    localStorage.setItem("buildingName", buildingName);
    console.log(buildingName);
  }

  const { list } = itemList;

  return (
    <div className="homeWrapper">
      <div className="searchWrapper">
        <Search
          className="searchInput"
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
        />
      </div>
      <div className="listWrapper">
      </div>
      <div className="listWrapper">
        <List
          className="listStyle"
          itemLayout="horizontal"
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              className={
                item.building_class === "book"
                  ? "listItemStyle-book"
                  : item.type === "video"
                  ? "listItemStyle-video"
                  : "listItemStyle-music"
              }
            >
              <List.Item.Meta
                avatar={
                  <Image
                    onClick={()=>{return <Link to="/buildings" />}}
                    className="listImage"
                    width={130}
                    height={140}
                    src={houseLogo}
                  />
                }
                title={
                  <a href="/buildings" style={{ color: "#FFFFFF" }} >
                    {item.building_name}
                  </a>
                }
                description={
                  <a href="/buildings" style={{ color: "#FFFFFF" }}>
                  <div style={{ color: "#FFFFFF" }}>{item.text_src}</div>
                  </a>
                }
              />
              <div style={{ position: "fixed", right: "5px", top: "500px" }}>
                <Link to="/add">
                  <Image width={50} height={50} src={addItem} />
                </Link>
              </div>
            </List.Item>
          )}
        />
      </div>
      {/* <buildingContext.Provider value={BuildingName}></buildingContext.Provider> */}
      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default Home;
