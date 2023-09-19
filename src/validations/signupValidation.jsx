const validate = (values) => {
  const errors = {};

  if (!values.first_name.trim()) {
    errors.first_name = 'First Name is required';
  } else if (values.first_name.length > 40) {
    errors.first_name = 'Must be 40 characters or less';
  }

  if (!values.last_name.trim()) {
    errors.last_name = 'Last Name is required';
  } else if (values.last_name.length > 40) {
    errors.last_name = 'Must be 40 characters or less';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Phone is required';
  } else if (!/^\+234[0-9]{10}$/.test(values.phone)) {
    errors.phone = 'Invalid phone number. It should be in the format +234XXXXXXXXXX (10 digits)';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password.trim()) {
    errors.password = 'Password is required';
  } else if (values.password.length > 20) {
    errors.password = 'Must be 20 characters or less';
  }

  return errors;
};


export default validate;