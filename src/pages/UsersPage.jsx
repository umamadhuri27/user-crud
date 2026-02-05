import { useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import { useUsers } from "../hooks/useUsers";

const UsersPage = () => {
  const { users, loading, fetchUsers } = useUsers();
  const [selectedUser, setSelectedUser] = useState(null);

  const clearSelection = () => {
    setSelectedUser(null);
  };

  return (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      padding: "30px"
    }}
  >
    <div style={{ width: "600px" }}>
      <h1 style={{ textAlign: "center" }}>User Management</h1>

      <UserForm
        selectedUser={selectedUser}
        refreshUsers={fetchUsers}
        clearSelection={clearSelection}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserList
          users={users}
          refreshUsers={fetchUsers}
          onEdit={setSelectedUser}
        />
      )}
    </div>
  </div>
);

};

export default UsersPage;
