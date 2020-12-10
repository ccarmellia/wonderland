/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import React from "react";
import "antd/dist/antd.css";
import "./home.css";
import {Navigation} from "../../components/navigation"
import { List, Avatar, Input } from "antd";

const data = [
  {
    title: "高等数学",
    description: "从入门到入土",
  },
  {
    title: "红高粱",
    description:
      "《红高粱》是一部表现高密人民在抗日战争中的顽强生命力和充满血性与民族精神的经典之作。",
  },
  {
    title: "红苹果",
    description:
      "爷爷为孙女讲述一个故事，叫做《当还有苹果的时候》，然后，一个美好的世界展开了。",
  },
  {
    title: "红舞鞋",
    description: "关于一个被强迫在红舞鞋里跳舞的女孩的故事。",
  },
  {
    title: "红楼梦",
    description: "《红楼梦》，中国古代章回体长篇小说，中国古典四大名著之一，一般认为是清代作家曹雪芹所著。",
  },
  {
    title:"红豆",
    description:"《红豆》是王菲演唱的一首歌曲，由林夕作词、柳重言作曲，收录于王菲1998年发行的专辑《唱游》当中。"
  },
];

const { Search } = Input;

const onSearch = (value) => console.log(value);

export const Home = () => {
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
            <List.Item className="listItemStyle">
              <List.Item.Meta
                avatar={
                  <Avatar
                    className="listAvatar"
                    shape="square"
                    size="large"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
      <div className="navigaiton">
        <Navigation />
      </div>
    </div>
  );
};

export default Home;
