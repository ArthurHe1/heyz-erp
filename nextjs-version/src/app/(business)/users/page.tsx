import { Button } from "antd";
import UserTableList from "./_components/UserTableList";

export default function Users() {
  return (
    <>
      <div className="p-4">
        <div>
          <Button type="primary">Add User</Button>
        </div>
        <UserTableList />
      </div>
    </>
  );
}
