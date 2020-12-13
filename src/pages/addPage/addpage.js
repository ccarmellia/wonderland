import React, { useRef } from "react";
import "antd/dist/antd.css";
import { PageHeader, Button,Cascader } from "antd";
import axios from "axios";

const options = [
    {
      value: '红与黑',
      label: '红与黑',
    },
    {
      value: '红辣椒',
      label: '红辣椒',
    },
    {
      value: '红玫瑰',
      label: '红玫瑰',
    },
    {
      value: '红楼梦',
      label: '红楼梦',
    },
  ];
  
  function onChange(value) {
    localStorage.setItem("buildingName",value)
  }


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
            <Cascader options={options} onChange={onChange} placeholder="Please select" />,
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
