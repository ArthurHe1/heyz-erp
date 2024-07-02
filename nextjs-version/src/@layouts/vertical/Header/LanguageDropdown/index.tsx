import { Dropdown, MenuProps } from "antd";
import { TranslationOutlined } from "@ant-design/icons";

const LanguageDropdown = () => {
  const items: MenuProps["items"] = [
    {
      label: (
        <div>
          <span className="text-xs">English</span>
          <span className="text-xs text-slate-400"> (US)</span>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div>
          <span className="text-xs">Chinese</span>
          <span className="text-xs text-slate-400"> (CN)</span>
        </div>
      ),
      key: "1",
    },
  ];

  return (
    <>
      <Dropdown placement="bottom" menu={{ items }}>
        <div className="text-xl cursor-pointer text-slate-400">
          <TranslationOutlined />
        </div>
      </Dropdown>
    </>
  );
};

export default LanguageDropdown;
