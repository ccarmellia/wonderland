import React, { useState, useEffect } from "react";
import axios from "axios";
import Day from "dayjs";
import { List, Skeleton } from "antd";

function LoadMoreList() {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    getData((res) => {
      setItemList({
        initLoading: false,
        data: res.data,
        list: res.data,
      });
    });
  }, [itemList]);
  const getData = () => {
    axios({
      url: "api/topic",
      type: "json",
      method: "get",
      contentType: "application/json",
    }).then((res) => {
      setItemList({
        initLoading: false,
        data: res.data.data,
        list: res.data.data,
      });
    });
  };
  function formatTime(initTime) {
    let diff = Day(new Date()).diff(Day(initTime));
    let time = Day(initTime).format("MM-DD HH:mm");
    if (diff >= 36000000) {
      return time;
    } else {
      return diff >= 3600000
        ? parseInt(diff / 3600000) + "小时前"
        : parseInt(diff / 60000) + "分钟前";
    }
  }

  const { initLoading, loading, list } = itemList;
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
      </div>
    ) : null;

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      style={{padding:30}}
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item actions={[]}>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              title={
                <div>
                  <a href={item.newsArray[0].url}>{item.title}</a>
                  <span>{formatTime(item.updatedAt)}</span>
                </div>
              }
              description={<p style={{fontSize:5}}>{item.summary}</p>}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
}

class Topics extends React.Component {
  render() {
    return <div>{}</div>;
  }
}
export { LoadMoreList as default, Topics };