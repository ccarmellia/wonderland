import React from "react";
import "antd/dist/antd.css";
import houseLogo from "../../assets/houseLogo.png";
import userAvatar from "../../assets/userAvatar.png";
import { PageHeader, List, Image, Tabs, Card } from "antd";

const { TabPane } = Tabs;
const { Meta } = Card;

const data = [
  {
    username: "李桑",
    content: "我永远喜欢高等数学",
  },
  {
    username: "李桑",
    content: "我永远喜欢高等数学",
  },
  {
    username: "李桑",
    content: "我永远喜欢高等数学",
  },
  {
    username: "李桑",
    content: "我永远喜欢高等数学",
  },
  {
    username: "李桑",
    content: "我永远喜欢高等数学",
  },
  {
    username: "李桑",
    content: "我永远喜欢高等数学",
  },
  {
    username: "李桑",
    content: "我永远喜欢高等数学",
  },
];

export const Buildings = () => {
  return (
    <div>
      <div>
        <PageHeader
          className="site-page-header"
          onBack={() => window.history.back()}
          title="Title"
          subTitle="This is a subtitle"
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Image height={200} src={houseLogo} />
      </div>
      <div className="listWrapper">
        <Tabs type="card">
          <TabPane tab="文字" key="1">
            <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Card
                    hoverable
                    style={{
                      width: "80%",
                      backgroundColor: "#82C6B1",
                      borderRadius: "20px",
                    }}
                    // cover={<img alt="example" src={houseLogo} height={120} />}
                  >
                    <div>
                      <Image
                        width={70}
                        height={70}
                        src={userAvatar}
                        style={{ padding: "0px 10px 8px 0px" }}
                      />
                      <span>{item.username}</span>
                    </div>
                    <Meta description={item.content} />
                  </Card>
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="图片" key="2">
            <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Card
                    hoverable
                    style={{
                      width: "80%",
                      backgroundColor: "#82C6B1",
                      borderRadius: "20px",
                    }}
                    // cover={<img alt="example" src={houseLogo} height={120} />}
                  >
                    <div>
                      <Image
                        width={70}
                        height={70}
                        src={userAvatar}
                        style={{ padding: "0px 10px 8px 0px" }}
                      />
                      <span>{item.username}</span>
                    </div>
                    <Meta description={item.content} />
                  </Card>
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Buildings;
