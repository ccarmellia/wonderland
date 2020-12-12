import React, { useRef, useState } from "react";
import "antd/dist/antd.css";
import { PageHeader, Button } from "antd";
import axios from "axios";
import { Input } from "antd";

const { TextArea } = Input;

export const AddPage = () => {
  const contentRef = useRef(null);

  const [itemList, setItemList] = useState([]);
  //   const username = localStorage.getItem(username);
  //   const content = contentRef.current.value;
  function Create() {
    // if (!contentRef.current.value) {
    //   return;
    // }
    axios({
      method: "post",
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhYSIsInBhc3N3b3JkIjoiMTExIiwiZXhwIjoxNjA3NzgyMjYzLCJpc3MiOiJseHkiLCJuYmYiOjE2MDc3Nzc2NjN9.n8qXbo3LWj-Wk2PiwWR0TzfPsJmt_COHlylPFVZ03mI",
      },
      url: "/newarticle",
      data: {
        name: "红舞鞋",
        up_id: "aaa",
        text_src: "这是红舞鞋",
      },
    }).then(function (res) {
      console.log(res);
      console.log(res.data.data.name);
      //   console.log(res.data.data.Token)
    });
  }
  const getData = () => {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    axios({
      url: "/newarticle",
      type: "json",
      method: "post",
      headers: { token: token },
      data: { name: username, up_id: username, text_src: username },
      contentType: "application/json",
    }).then((res) => {
      setItemList({
        data: res.data.data,
        list: res.data.data,
      });
      console.log(res.data.data);
    });
  };

  return (
    <div>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          style={{ backgroundColor: "#82C6B1", width: "100%", height: "80px" }}
          ghost={false}
          onBack={() => window.history.back()}
          extra={[
            <Button
              onClick={Create}
              style={{
                backgroundColor: "#329375",
                border: "1px #329375 solid",
                color: "white",
              }}
            >
              发布
            </Button>,
          ]}
        ></PageHeader>
      </div>
      <div>
        <TextArea
          ref={contentRef}
          rows={27}
          placeholder="在此处编辑你的作品..."
        />
      </div>
    </div>
  );
};

export default AddPage;
