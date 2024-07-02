"use client";

import { Modal } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

const LogOut = () => {
  const onLogout = () => {
    Modal.confirm({
      title: "This is a warning message",
      content: "some messages...",
      onCancel: () => {
        console.log("Cancel");
      },
      onOk: () => {
        console.log("OK");
      },
    });
  };

  return (
    <>
      <div className="flex gap-2 text-red-600" onClick={onLogout}>
        <LogoutOutlined />
        <span>Log Out</span>
      </div>
    </>
  );
};

export default LogOut;
