const validate = values => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = 'Name is required'; 
  } else if (values.fullName.length > 40) {
    errors.fullName = 'Must be 40 characters or less';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required'; 
  } else if (values.password.length > 20) {
    errors.password = 'Must be 14 characters or less'; 
  }
  return errors;
};

export default validate;