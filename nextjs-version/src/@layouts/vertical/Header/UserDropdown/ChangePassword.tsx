"use client";

import { useState } from "react";
import { Modal } from "antd";
import { LockOutlined } from "@ant-design/icons";

const ChangePassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex gap-2" onClick={showModal}>
        <LockOutlined />
        <span>Change Password</span>
      </div>

      <Modal
        title="Change Password"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ChangePassword;
