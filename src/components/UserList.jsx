import { Button } from '@mui/material';
import { deleteUser } from '../services/userService';

const UserList = ({ users, refreshUsers, onEdit , setMessage }) => {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this user?',
    );

    if (!confirmDelete) return;

    await deleteUser(id);
    setMessage("User deleted successfully!");
    refreshUsers();
  };

  return (
    <div>
      <h2 style={{ marginBottom: '15px', textAlign: 'center' }}>User List</h2>

      {users.length === 0 && <p>No users available</p>}

     {users.map((user) => (
  <div
    key={user.id}
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      
      padding: "6px 0",
      
    }}
  >
    {/* User Info */}
    <span>
      {user.firstName} {user.lastName} | {user.email} | {user.phone}
    </span>

    {/* Buttons */}
    <div style={{ display: "flex", gap: "10px" }}>
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
