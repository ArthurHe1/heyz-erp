import { Avatar, Dropdown, MenuProps } from "antd";
import {
  UserOutlined,
  DownOutlined,
  LogoutOutlined,
  LockOutlined,
} from "@ant-design/icons";

const UserDropdown = () => {
  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex gap-2">
          <LockOutlined />
          <span>Change Password</span>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="flex gap-2 text-red-600">
          <LogoutOutlined />
          <span>Log Out</span>
        </div>
      ),
      key: "1",
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }}>
        <div className="flex items-center justify-center gap-1 cursor-pointer">
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
            size={26}
          />
          <span className="text-sm text-slate-400">Arthur</span>
          <DownOutlined className="text-xs" />
        </div>
      </Dropdown>
    </>
  );
};

export default UserDropdown;
