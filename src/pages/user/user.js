import React from "react";
import "antd/dist/antd.css";
import { Navigation } from "../../components/navigation";
import {Card, Avatar } from "antd";

const { Meta } = Card;

export const User = () => {
  return (
    <div>
      <div>
        <Card style={{ width: 300, marginTop: 16 }}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default User;
