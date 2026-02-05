import { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { userFormFields } from '../config/userFormConfig';
import { validateField } from '../utils/validation';
import { createUser, updateUser } from '../services/userService';

const UserForm = ({ selectedUser, refreshUsers, clearSelection }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    let newErrors = {};

    userFormFields.forEach((field) => {
      const error = validateField(field, formData[field.name]);
      if (error) newErrors[field.name] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (selectedUser) {
      await updateUser(selectedUser.id, formData);
    } else {
      await createUser(formData);
    }

    refreshUsers();
    clearSelection();
    setFormData({});
  };

  return (
    <div style={{ marginBottom: '25px' }}>
      {userFormFields.map((field) => (
        <TextField
          key={field.name}
          label={field.label}
          value={formData[field.name] || ''}
          onChange={(e) => handleChange(field.name, e.target.value)}
          error={!!errors[field.name]}
          helperText={errors[field.name]}
          fullWidth
          margin="normal"
        />
      ))}

      <Button
        variant="contained"
        onClick={handleSubmit}
        style={{ marginTop: '15px' }}
      >
        {selectedUser ? 'Update User' : 'Create User'}
      </Button>
    </div>
  );
};

export default UserForm;
