import React from "react";
import "antd/dist/antd.css";
import { PageHeader, Button } from "antd";
import { Input } from "antd";

const { TextArea } = Input;

export const AddPage = () => {
  return (
    <div>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          style={{ backgroundColor: "#82C6B1",width:"100%",height:"80px" }}
          ghost={false}
          onBack={() => window.history.back()}
          extra={[<Button style={{backgroundColor:"#329375",border:"1px #329375 solid",color:"white"}}>发布</Button>]}
        ></PageHeader>
      </div>
      <div>
        <TextArea rows={27} placeholder="在此处编辑你的作品..." />
      </div>
    </div>
  );
};

export default AddPage;
