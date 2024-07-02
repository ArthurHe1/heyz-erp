"use client";

import { useEffect, useState } from "react";
import { Divider, Space, Table, TableProps, Tag } from "antd";
import {
  DeleteOutlined,
  FormOutlined,
  PartitionOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import customClientFetch from "@/utils/customFetch";
import AddUser from "./AddUser";

interface DataType {
  firstName: string;
  lastName: string;
  account: number;
  address: string;
  tags: string[];
}

const UserTableList = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setLoading(true);
    const result = await customClientFetch("/user/list", {
      method: "GET",
      params: { page: 1, pageSize: 20 },
    });
    setData(result?.data?.items || []);
    setLoading(false);
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "FullName",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Account",
      dataIndex: "account",
      key: "account",
      render: (text) => (
        <>{text || <span className="text-gray-300">---</span>}</>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => {
        const status = text || "Disable";
        return (
          <Tag color={status === "Enable" ? "success" : "default"}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Role",
      dataIndex: "roles",
      key: "roles",
      render: (text) => {
        if (text) {
          return text.split(",").map((role: string) => (
            <Tag key={role} color="processing">
              {role}
            </Tag>
          ));
        }
        return <span className="text-gray-300">---</span>;
      },
    },
    {
      title: "Action",
      key: "action",
      width: 500,
      render: (_, record) => (
        <Space size="small" split={<Divider type="vertical" />}>
          <span
            className={`${
              record.account ? "text-gray-300" : "text-blue-500"
            } flex gap-1 cursor-pointer`}
          >
            <SafetyOutlined />
            <span>Generate Account</span>
          </span>
          <span className="text-blue-500 flex gap-1 cursor-pointer">
            <PartitionOutlined />
            <span>Assign Roles</span>
          </span>
          <span className="text-blue-500 flex gap-1 cursor-pointer">
            <FormOutlined />
            <span>Edit</span>
          </span>
          <span className="text-red-500 flex gap-1 cursor-pointer">
            <DeleteOutlined />
            <span>Delete</span>
          </span>
        </Space>
      ),
    },
  ];

  return (
    <>
      <AddUser refresh={getUsers} />
      <div className="pt-4">
        <Table
          size="small"
          bordered
          columns={columns}
          dataSource={data}
          loading={loading}
        />
      </div>
    </>
  );
};

export default UserTableList;
