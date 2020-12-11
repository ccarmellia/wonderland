import { useUserStore } from "../../stores/userStore";
import React from "react";
import { Navigation } from "../../components/navigation";
import "antd/dist/antd.css";
import { Input, Carousel, Tabs, Card, List } from "antd";
import houseLogo from "../../assets/houseLogo.png";

const { Search } = Input;

const onSearch = (value) => console.log(value);

const { TabPane } = Tabs;

const { Meta } = Card;

const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
];

function callback(key) {
  console.log(key);
}

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  fontSize: "40px",
  background: "#69b4a0",
};

export const Square = () => {
  const getSquare = useUserStore((state) => state.getSquare);

  // const Data = () => {
  //   (async () => {
  //     try {
  //       await getSquare();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // };

  return (
    <div className="carouselWrapper">
      <div className="searchWrapper" >
        <Search
          className="searchInput"
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
        />
      </div>
      <div>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>红高粱</h3>
          </div>
          <div>
            <h3 style={contentStyle}>红楼梦</h3>
          </div>
          <div>
            <h3 style={contentStyle}>红与黑</h3>
          </div>
          <div>
            <h3 style={contentStyle}>红辣椒</h3>
          </div>
        </Carousel>
      </div>
      <div>
        <Tabs onChange={callback} type="card" style={{ display: "flex"}}>
          <TabPane tab="书籍" key="1">
          <List
              grid={{ gutter: 16, column: 3 }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    hoverable
                    style={{ width: 120 }}
                    cover={<img alt="example" src={houseLogo} height={120} />}
                  >
                    <Meta title="红高粱" />
                  </Card>
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="影视" key="2">
          <List
              grid={{ gutter: 16, column: 3 }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    hoverable
                    style={{ width: 120 }}
                    cover={<img alt="example" src={houseLogo} height={120} />}
                  >
                    <Meta title="红辣椒" />
                  </Card>
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="音乐" key="3">
            <List
              grid={{ gutter: 16, column: 3 }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    hoverable
                    style={{ width: 120 }}
                    cover={<img alt="example" src={houseLogo} height={120} />}
                  >
                    <Meta title="红莲华" />
                  </Card>
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default Square;
