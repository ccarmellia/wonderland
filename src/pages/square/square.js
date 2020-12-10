import { useUserStore } from "../../stores/userStore";
import CardItem from "./components/cardItem";
import React from "react";
import { Navigation } from "../../components/navigation";
import "antd/dist/antd.css";
import { Card } from "antd";
const { Meta } = Card;

export const Square = () => {
  const getSquare = useUserStore((state) => state.getSquare);

  const Data = () => {
    (async () => {
      try {
        await getSquare();
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta title="Card title" />
        <CardItem />
      </Card>
      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default Square;
