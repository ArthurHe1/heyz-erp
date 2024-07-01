"use client";

import { useState } from "react";
import { Menu, MenuProps } from "antd";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Image from "next/image";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <PieChartOutlined />, label: "Option 1" },
  { key: "2", icon: <DesktopOutlined />, label: "Option 2" },
  { key: "3", icon: <ContainerOutlined />, label: "Option 3" },
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined />,
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      { key: "7", label: "Option 7" },
      { key: "8", label: "Option 8" },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "11", label: "Option 11" },
          { key: "12", label: "Option 12" },
        ],
      },
    ],
  },
];

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div className="h-screen text-white bg-[#001529] relative">
        <div className="h-16 flex items-center justify-center gap-2">
          <Image src="/imgs/logo.png" alt="logo" width={24} height={24} />
          {collapsed ? null : (
            <span className="text-lg font-bold">System Name</span>
          )}
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
        <div
          className="rounded-full bg-white shadow-md shadow-blue-500/50 w-[32px] h-[32px] border-gray-200 border-[1px] flex items-center justify-center text-xs cursor-pointer text-black absolute top-1/2 right-[-16px]"
          onClick={toggleCollapsed}
        >
          {collapsed ? <RightOutlined /> : <LeftOutlined />}
        </div>
      </div>
    </>
  );
};

export default NavBar;
