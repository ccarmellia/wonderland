import React from "react";
import "antd/dist/antd.css";
import "./user.css"
import userBackground from "../../assets/userBackground.png"
import userAvatar from "../../assets/userAvatar.png";
import { Navigation } from "../../components/navigation";
import { Card, Image, List, Avatar } from "antd";

const { Meta } = Card;

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    name: "李桑",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

export const User = () => {
  return (
    <div className="userWrapper">
      <div className="userHeader">
          <Meta
            avatar={<Image width={80} height={80} src={userAvatar} />}
            title="李桑"
            description="当地一位比较有意思的打工人小李"
          />
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
          dataSource={listData}
          renderItem={(item) => (
            <List.Item className="listItemStyle">
              <List.Item.Meta
                avatar={<Avatar src={userAvatar} />}
                title={<a href={item.href}>{item.name}</a>}
              >
                <Card style={{ border: "20px", backgroundColor: "#F5F5F5" }}>
                  {item.description}
                </Card>
              </List.Item.Meta>
              {item.content}
            </List.Item>
          )}
        />
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default User;
