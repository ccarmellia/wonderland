import React from "react";
import "antd/dist/antd.css";
import Icon from "@ant-design/icons";

const Pwd = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
  >
    <path
      id="路径_74"
      data-name="路径 74"
      d="M19.238,21.763a7.7,7.7,0,0,1-1.205-4.388,8.3,8.3,0,0,1,8.609-8.125,8.3,8.3,0,0,1,8.609,8.125A8.3,8.3,0,0,1,26.642,25.5a8.933,8.933,0,0,1-4.993-1.462l-3.96,3.737,1.894,1.787-2.411,2.275-1.894-1.787-1.205,1.137,1.894,1.787-2.411,2.275-4.3-4.063,9.987-9.425Zm7.4-9.262a4.883,4.883,0,1,0,0,9.75,4.937,4.937,0,0,0,5.166-4.875A5.043,5.043,0,0,0,26.642,12.5Z"
      transform="translate(-9.251 -9.251)"
      fill="#82c6b1"
    />
  </svg>
);
export const pwdItem = (props) => <Icon component={Pwd} {...props} />;
