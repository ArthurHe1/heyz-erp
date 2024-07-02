"use client";

import { useState } from "react";
import { Button, Form, Input, Modal, message } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import customClientFetch from "@/utils/customFetch";

interface IProps {
  refresh: () => void;
}

const AddUser = ({ refresh }: IProps) => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    // console.log("Received values of form: ", values);
    createUser(values);
  };

  const createUser = async (values: any) => {
    setSubmitting(true);
    const result = await customClientFetch("/user", {
      method: "POST",
      body: JSON.stringify(values),
    });
    if (result.code === 200) {
      refresh();
      handleCancel();
    } else {
      message.error(result.message);
    }
    setSubmitting(false);
  };

  return (
    <>
      <div>
        <Button type="primary" onClick={showModal}>
          <PlusCircleOutlined />
          <span>Add User</span>
        </Button>
      </div>

      <Modal
        title="Add a new user"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <div className="flex gap-2 justify-center">
            <Button onClick={handleCancel} disabled={submitting}>
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              disabled={submitting}
              loading={submitting}
            >
              Create
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default AddUser;
