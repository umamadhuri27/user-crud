import { Button } from "@mui/material";
import { deleteUser } from "../services/userService";

const UserList = ({ users, refreshUsers, onEdit }) => {
  const handleDelete = async (id) => {
    await deleteUser(id);
    refreshUsers();
  };

  return (
    <div>
      <h2 style={{ marginBottom: "15px", textAlign:"center" }}>User List</h2>


      {users.length === 0 && <p>No users available</p>}

     {users.map((user) => (
  <div
    key={user.id}
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
     
      padding: "5px 0"
    }}
  >
    <p style={{ margin: 0 }}>
      {user.firstName} {user.lastName} | {user.email} | {user.phone}
    </p>

    <div>
      <Button size="small" onClick={() => onEdit(user)}>
        Edit
      </Button>

      <Button
        size="small"
        color="error"
        onClick={() => handleDelete(user.id)}
      >
        Delete
      </Button>
    </div>
  </div>
))}

    </div>
  );
};

export default UserList;
