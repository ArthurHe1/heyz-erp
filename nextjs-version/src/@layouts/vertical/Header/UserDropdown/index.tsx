import { Avatar, Dropdown, MenuProps } from "antd";
import { UserOutlined, DownOutlined, LogoutOutlined } from "@ant-design/icons";
import ChangePassword from "./ChangePassword";
import LogOut from "./LogOut";

const UserDropdown = () => {
  const items: MenuProps["items"] = [
    {
      label: <ChangePassword />,
      key: "0",
    },
    {
      label: <LogOut />,
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
