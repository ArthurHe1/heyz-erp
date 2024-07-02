"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu } from "antd";
import {
  ProductOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

const items: any[] = [
  {
    key: "system",
    label: "System Management",
    icon: <ProductOutlined />,
    children: [
      { key: "users", label: "Users Management", path: "/users" },
      { key: "roles", label: "Roles Management", path: "/roles" },
    ],
  },
];

const NavBar = () => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onMenuClick = (item: any) => {
    const _path = item?.item?.props?.path;
    console.log("item: ", _path);
    if (typeof _path !== "undefined") {
      router.push(_path);
    }
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
          defaultSelectedKeys={["users"]}
          defaultOpenKeys={["system"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onClick={onMenuClick}
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
