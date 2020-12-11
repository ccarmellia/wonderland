import React from "react";
import "antd/dist/antd.css";
import userAvatar from "../../assets/userAvatar.png";
import { Navigation } from "../../components/navigation";
import { Card, Image, List, Avatar } from "antd";

const { Meta } = Card;

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    name: "李桑",
    avatar: "../../assets/userAvatar.png",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

export const User = () => {
  return (
    <div>
      <div>
        <Card style={{ width: "100%", height: "120px"}}>
          <Meta
            avatar={<Image width={80} height={80} src={userAvatar} />}
            title="李桑"
            description="当地一位比较有意思的打工人小李"
          />
        </Card>
      </div>
      <div>
        <List
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
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.name}</a>}
                description={item.description}
              />
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
