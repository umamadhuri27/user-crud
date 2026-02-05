import { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { useUsers } from '../hooks/useUsers';

const UsersPage = () => {
  const { users, loading, fetchUsers } = useUsers();
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const clearSelection = () => {
    setSelectedUser(null);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '750px',
          background: '#fff',
          padding: '25px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>User Management</h1>

        <UserForm
          selectedUser={selectedUser}
          refreshUsers={fetchUsers}
          clearSelection={clearSelection}
          setMessage={setMessage}
        />
        {message && (
          <p
            style={{
              color: 'green',
              textAlign: 'center',
              marginBottom: '15px',
            }}
          >
            {message}
          </p>
        )}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <UserList
            users={users}
            refreshUsers={fetchUsers}
            onEdit={setSelectedUser}
            setMessage={setMessage}
          />
        )}
      </div>
    </div>
  );
};

export default UsersPage;
