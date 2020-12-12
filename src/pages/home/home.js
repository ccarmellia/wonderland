/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import React from "react";
import "antd/dist/antd.css";
import "./home.css";
import { Link ,Redirect} from "react-router-dom";
import addItem from "../../assets/addItem.png";
import houseLogo from "../../assets/houseLogo.png";
import { Navigation } from "../../components/navigation";
import { List, Image, Input } from "antd";
import {useUserStore} from "../../stores/userStore"

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
  {
    type: "music",
    title: "红莲华",
    description:
      "《红莲华》是由LiSA演唱的一首歌曲，由LiSA作词，草野华余子作曲，江口亮编曲，是TV动画《鬼灭之刃》的片头曲。",
  },
];

const { Search } = Input;

const onSearch = (value) => console.log(value);

export const Home = () => {

  const handleClick=(buildingName)=>{

    <Redirect to="/buildings" />
  }

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
      <div className="blankContainer"></div>
      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default Home;
