import UserDropdown from "./UserDropdown";
import LanguageDropdown from "./LanguageDropdown";

const Header = () => {
  return (
    <>
      <div className="border-b-[1px] border-slate-200 h-16 px-4 flex items-center">
        <div className="flex-1">
          <span className="text-lg font-bold">System Name</span>
        </div>
        <div className="flex gap-5">
          <LanguageDropdown />
          <UserDropdown />
        </div>
      </div>
    </>
  );
};

export default Header;
