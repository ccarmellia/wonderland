import React, { useRef } from "react";
import "antd/dist/antd.css";
import { PageHeader, Button } from "antd";
import axios from "axios";
import { Input } from "antd";

const { TextArea } = Input;

export const AddPage = () => {

  const contentRef = useRef(null);

  const username = localStorage.getItem(username);

  function Create(e) {
    e.preventDefault();
    if (!contentRef.current.value) { 
      return;
    }
    const content = contentRef.current.value;
    axios({
      method: "post",
      url: "/newarticle",
      data: {
        username: username,
        content: content,
      },
    }).then(function (res) {
      console.log(res);
      //   console.log(res.data.data.Token)
    });
    // 添加完后清空输入框
    contentRef.current.value = "";
  }

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
        <TextArea ref={contentRef} rows={27} placeholder="在此处编辑你的作品..." />
      </div>
    </div>
  );
};

export default AddPage;
