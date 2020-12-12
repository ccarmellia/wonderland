import React, { useState, useEffect } from "react";
import axios from "axios";

function LoadMoreList() {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    getData((res) => {
      setItemList({
        data: res.data,
      });
    });
  }, [itemList]);
  const getData = () => {
    //获取个人页面  返回name:建筑名称 up_id:用户名 text_src:发布内容
  //   axios({
  //     url: "/querysave",
  //     type: "json",
  //     method: "post",
  //     headers:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhYSIsInBhc3N3b3JkIjoiMTExIiwiZXhwIjoxNjA3Nzc4MTY5LCJpc3MiOiJseHkiLCJuYmYiOjE2MDc3NzM1Njl9.JWTOEPfB1tC2ORE2hoLKfIF-mJAZ1Mz1xofb-LL1a1k"},
  //     data:{username:"aaa"},
  //     contentType: "application/json",
  //   }).then((res) => {
  //     console.log(res.data.data)
  //   });
  // };
    //获取用户加入的建筑数据 返回text_src:作品简介  building_name:作品名 building_class：建筑类别
//   axios({
//     url: "/querysavebuilding",
//     type: "json",
//     method: "post",
//     headers:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhYSIsInBhc3N3b3JkIjoiMTExIiwiZXhwIjoxNjA3NzgyMjYzLCJpc3MiOiJseHkiLCJuYmYiOjE2MDc3Nzc2NjN9.n8qXbo3LWj-Wk2PiwWR0TzfPsJmt_COHlylPFVZ03mI"},
//     data:{username:"aaa"},
//     contentType: "application/json",
//   }).then((res) => {
//     console.log(res.data)
//   });
//res.data.building_name：建筑名称  text_src
axios({
  url: "/querybuildingbyname",
  type: "json",
  method: "post",
  headers:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhYSIsInBhc3N3b3JkIjoiMTExIiwiZXhwIjoxNjA3NzgyMjYzLCJpc3MiOiJseHkiLCJuYmYiOjE2MDc3Nzc2NjN9.n8qXbo3LWj-Wk2PiwWR0TzfPsJmt_COHlylPFVZ03mI"},
  data:{building_name:"红舞鞋"},
  contentType: "application/json",
}).then((res) => {
  console.log(res.data)
});
};







  // function formatTime(initTime) {
  //   let diff = Day(new Date()).diff(Day(initTime));
  //   let time = Day(initTime).format("MM-DD HH:mm");
  //   if (diff >= 36000000) {
  //     return time;
  //   } else {
  //     return diff >= 3600000
  //       ? parseInt(diff / 3600000) + "小时前"
  //       : parseInt(diff / 60000) + "分钟前";
  //   }
  // }

  // const { initLoading, loading, list } = itemList;
  // const loadMore =
  //   !initLoading && !loading ? (
  //     <div
  //       style={{
  //         textAlign: "center",
  //         marginTop: 12,
  //         height: 32,
  //         lineHeight: "32px",
  //       }}
  //     >
  //     </div>
  //   ) : null;

  // return (
  //   <List
  //     className="demo-loadmore-list"
  //     loading={initLoading}
  //     itemLayout="horizontal"
  //     style={{padding:30}}
  //     loadMore={loadMore}
  //     dataSource={list}
  //     renderItem={(item) => (
  //       <List.Item actions={[]}>
  //         <Skeleton avatar title={false} loading={item.loading} active>
  //           <List.Item.Meta
  //             title={
  //               <div>
  //                 <a href={item.newsArray[0].url}>{item.title}</a>
  //                 <span>{formatTime(item.updatedAt)}</span>
  //               </div>
  //             }
  //             description={<p style={{fontSize:5}}>{item.summary}</p>}
  //           />
  //         </Skeleton>
  //       </List.Item>
  //     )}
  //   />
  // );
  return(
    <div></div>
  )
}

class Topics extends React.Component {
  render() {
    return <div>{}</div>;
  }
}
export { LoadMoreList as default, Topics };