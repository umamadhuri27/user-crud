export const validateField = (field, value) => {
  if (field.required && !value) {
    return `${field.label} is required`;
  }

  if (field.type === "email") {
    const emailRegex = /\S+@\S+\.\S+/;
    if (value && !emailRegex.test(value)) {
      return "Invalid email format";
    }
  }

  if (field.type === "tel") {
    const phoneRegex = /^[0-9]{10}$/;
    if (value && !phoneRegex.test(value)) {
      return "Phone must be 10 digits";
    }
  }

  return "";
};
