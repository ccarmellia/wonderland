import React, { useRef,useState } from "react";
import "antd/dist/antd.css";
import { PageHeader, Button } from "antd";
import axios from "axios";
import { Input } from "antd";

const { TextArea } = Input;

export const AddPage = () => {
    
  const contentRef = useRef(null);

  const Create = () => {
    const content = contentRef.current.value;
    const buildingName = localStorage.getItem("buildingName");
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    axios({
      url: "/newarticle",
      type: "json",
      method: "post",
      headers: { token: token },
      data: { name: buildingName, up_id: username, text_src: content },
      contentType: "application/json",
    }).then((res) => {
      console.log(res);
      window.history.back();
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
        <textarea
          style={{width:"100%",height:"600px"}}
          ref={contentRef}
          type="text"
          placeholder="在此处编辑你的作品..."
        />
      </div>
    </div>
  );
};

export default AddPage;
