import React from "react";
import { Navigation } from "../../components/navigation";
import "antd/dist/antd.css";
import { Link, Redirect } from "react-router-dom";
import addItem from "../../assets/addItem.png";
import recommand1 from "../../assets/recommand1.jpg";
import recommand2 from "../../assets/recommand2.jpg";
import recommand3 from "../../assets/recommand3.png";
import recommand4 from "../../assets/recommand4.png";
import { Input, Carousel, Tabs, Card, List, Image } from "antd";
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
  {
    title: "Title 7",
  },
  {
    title: "Title 8",
  },
  {
    title: "Title 9",
  },
];

function callback(key) {
  console.log(key);
}

export const Square = () => {
  return (
    <div className="carouselWrapper">
      <div className="searchWrapper">
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
            <Image src={recommand1} />
          </div>
          <div>
            <Image src={recommand2} />
          </div>
          <div>
            <Image src={recommand3} />
          </div>
          <div>
            <Image src={recommand4} />
          </div>
        </Carousel>
      </div>
      <div>
        <Tabs onChange={callback} type="card" style={{ display: "flex" }}>
          <TabPane tab="书籍" key="1">
            <List
              grid={{ gutter: 16, column: 3 }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    hoverable
                    style={{ width: 120 }}
                    cover={<a href="/buildings"><img alt="example" src={houseLogo} height={120} /></a>}
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

export default Square;
