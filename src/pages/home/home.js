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
const data = [
  {
    type: "book",
    title: "红与黑",
    description: "《红与黑》是法国作家司汤达创作的长篇小说，也是其代表作。",
  },
  {
    type: "video",
    title: "红高粱",
    description:
      "《红高粱》是由西安电影制片厂出品的战争文艺片，由张艺谋执导，姜文、巩俐、滕汝骏等主演，于1987年在中国上映。",
  },
  {
    type: "music",
    title: "红玫瑰",
    description:
      "《红玫瑰》是香港流行男歌手陈奕迅的一首国语歌曲，由李焯雄填词，梁翘柏编曲，收录于2007年发行的专辑《认了吧》。",
  },
  {
    type: "book",
    title: "红楼梦",
    description:
      "《红楼梦》，中国古代章回体长篇小说，中国古典四大名著之一，一般认为是清代作家曹雪芹所著。",
  },
  {
    type: "video",
    title: "红辣椒",
    description:
      "《红辣椒》改编自筒井康隆的封笔之作《梦侦探》，讲述美女医师千叶敦子与天才科学家时田浩作一起发明了“DC MINI”从而引发的故事。",
  },
];
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
        <List
          className="listStyle"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              className={
                item.type === "book"
                  ? "listItemStyle-book"
                  : item.type === "video"
                  ? "listItemStyle-video"
                  : "listItemStyle-music"
              }
            >
              <List.Item.Meta
                onClick={handleClick(item.title)}
                avatar={
                  <Link to="/buildings">
                    <Image
                      className="listImage"
                      width={130}
                      height={140}
                      src={houseLogo}
                    />
                  </Link>
                }
                title={
                  <a href="https://ant.design" style={{ color: "#FFFFFF" }}>
                    {item.title}
                  </a>
                }
                description={
                  <div style={{ color: "#FFFFFF" }}>{item.description}</div>
                }
              />
              <div>
                <Link to="/add">
                  <Image
                    width={30}
                    height={30}
                    style={{ bottom: 0 }}
                    src={addItem}
                  />
                </Link>
              </div>
            </List.Item>
          )}
        />
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
                    onClick={handleClick(item.title)}
                    className="listImage"
                    width={130}
                    height={140}
                    src={houseLogo}
                  />
                }
                title={
                  <a href="https://ant.design" style={{ color: "#FFFFFF" }}>
                    {item.building_name}
                  </a>
                }
                description={
                  <div style={{ color: "#FFFFFF" }}>{item.text_src}</div>
                }
              />
              <div>
                <Link to="/add">
                  <Image
                    width={30}
                    height={30}
                    style={{ bottom: 0 }}
                    src={addItem}
                  />
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
